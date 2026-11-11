"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const CLOUDFRONT_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4";
const LOCAL_VIDEO_URL = "/hero.mp4";
const POSTER_URL = "/hero-poster.jpg";

export function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const framesRef = useRef<ImageBitmap[]>([]);

  const [videoHasFrame, setVideoHasFrame] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [videoSrc, setVideoSrc] = useState(CLOUDFRONT_VIDEO_URL);

  // Object-cover math for canvas
  const drawCover = useCallback(
    (
      canvas: HTMLCanvasElement,
      source: ImageBitmap | HTMLVideoElement | HTMLCanvasElement
    ) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const sw = "videoWidth" in source ? source.videoWidth : source.width;
      const sh = "videoHeight" in source ? source.videoHeight : source.height;
      if (!cw || !ch || !sw || !sh) return;

      const scale = Math.max(cw / sw, ch / sh);
      const w = cw / scale;
      const h = ch / scale;
      const sx = (sw - w) / 2;
      const sy = (sh - h) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(source, sx, sy, w, h, 0, 0, cw, ch);
    },
    []
  );

  // Resize canvas to match window size and DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.floor(window.innerWidth * dpr);
    const height = Math.floor(window.innerHeight * dpr);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  }, []);

  // Handle window resize
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Frame cache extraction (preferred smooth path)
  useEffect(() => {
    if (!videoHasFrame) return;

    let cancelled = false;

    const timer = setTimeout(async () => {
      if (cancelled) return;

      try {
        const offVideo = document.createElement("video");
        offVideo.crossOrigin = "anonymous";
        offVideo.muted = true;
        offVideo.playsInline = true;
        offVideo.preload = "auto";
        offVideo.src = videoSrc;

        // Load metadata
        await new Promise<void>((resolve, reject) => {
          const onMeta = () => {
            offVideo.removeEventListener("loadedmetadata", onMeta);
            resolve();
          };
          const onError = () => {
            offVideo.removeEventListener("error", onError);
            // If CloudFront fails or CORS blocks, fallback to local mirror
            if (offVideo.src !== window.location.origin + LOCAL_VIDEO_URL) {
              offVideo.src = LOCAL_VIDEO_URL;
              offVideo.load();
              offVideo.addEventListener("loadedmetadata", onMeta, { once: true });
              offVideo.addEventListener("error", (e) => reject(e), { once: true });
            } else {
              reject(new Error("Video load failed"));
            }
          };

          if (offVideo.readyState >= 1) {
            resolve();
          } else {
            offVideo.addEventListener("loadedmetadata", onMeta, { once: true });
            offVideo.addEventListener("error", onError, { once: true });
          }
        });

        if (cancelled) return;

        const duration = offVideo.duration || 10.04;
        const targetCount = Math.max(24, Math.min(90, Math.floor(duration * 12)));
        const extracted: ImageBitmap[] = [];

        const vWidth = offVideo.videoWidth || 1920;
        const vHeight = offVideo.videoHeight || 1080;
        const maxW = 960;
        const scale = Math.min(1, maxW / vWidth);
        const targetW = Math.round(vWidth * scale);
        const targetH = Math.round(vHeight * scale);

        for (let i = 0; i < targetCount; i++) {
          if (cancelled) return;
          const targetTime = (i / (targetCount - 1)) * Math.max(0.1, duration - 0.05);
          offVideo.currentTime = targetTime;

          await new Promise<void>((resolve) => {
            let done = false;
            const onSeeked = () => {
              if (!done) {
                done = true;
                offVideo.removeEventListener("seeked", onSeeked);
                resolve();
              }
            };
            offVideo.addEventListener("seeked", onSeeked, { once: true });
            // Timeout safety to ensure smooth recovery if seeking is throttled
            setTimeout(() => {
              if (!done) {
                done = true;
                offVideo.removeEventListener("seeked", onSeeked);
                resolve();
              }
            }, 300);
          });

          if (cancelled) return;

          try {
            if (typeof window.createImageBitmap === "function") {
              const bmp = await createImageBitmap(offVideo, {
                resizeWidth: targetW,
                resizeHeight: targetH,
                resizeQuality: "medium",
              });
              extracted.push(bmp);
            } else {
              const scratch = document.createElement("canvas");
              scratch.width = targetW;
              scratch.height = targetH;
              const sctx = scratch.getContext("2d");
              sctx?.drawImage(offVideo, 0, 0, targetW, targetH);
              const bmp = await createImageBitmap(scratch);
              extracted.push(bmp);
            }
          } catch (err) {
            console.warn("Bitmap creation stopped at frame", i, err);
            break;
          }
        }

        if (!cancelled && extracted.length >= 12) {
          framesRef.current = extracted;
          setCanvasReady(true);
        }
      } catch (err) {
        console.warn("Frame cache extraction fallback to video seek", err);
      }
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [videoHasFrame, videoSrc]);

  // Scroll mapping & lerp loop
  useEffect(() => {
    let animationFrameId: number;
    let targetProgress = 0;
    let smoothedProgress = 0;
    let lastSeekTime = -1;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;
      const maxScroll = scrollHeight - innerHeight;
      if (maxScroll > 0) {
        targetProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      } else {
        targetProgress = 0;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const loop = () => {
      smoothedProgress += (targetProgress - smoothedProgress) * 0.12;

      const canvas = canvasRef.current;
      const video = videoRef.current;

      if (canvasReady && framesRef.current.length > 0 && canvas) {
        const total = framesRef.current.length;
        const index = Math.min(
          total - 1,
          Math.max(0, Math.round(smoothedProgress * (total - 1)))
        );
        const frame = framesRef.current[index];
        if (frame) {
          drawCover(canvas, frame);
        }
      } else if (video && video.duration && !Number.isNaN(video.duration)) {
        // Fallback: seek visible video to smoothed * (duration - 0.05) (seek if delta > 0.04s)
        const targetTime = smoothedProgress * Math.max(0, video.duration - 0.05);
        if (Math.abs(targetTime - lastSeekTime) > 0.04) {
          if (!video.seeking) {
            video.currentTime = targetTime;
            lastSeekTime = targetTime;
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [canvasReady, drawCover]);

  // Video fallback error handler
  const handleVideoError = () => {
    if (videoSrc !== LOCAL_VIDEO_URL) {
      setVideoSrc(LOCAL_VIDEO_URL);
    }
  };

  const handleVideoLoadedData = () => {
    setVideoHasFrame(true);
    // Seek slightly to decode first frame if needed
    if (videoRef.current && videoRef.current.currentTime === 0) {
      videoRef.current.currentTime = 0.001;
    }
  };

  // Visibility logic as specified:
  // 1. Poster: fades out once video has decoded frame or frame cache is ready
  const posterOpacity = !videoHasFrame && !canvasReady ? "opacity-100" : "opacity-0";

  // 2. Video: visible only while video has frame and canvas frame-cache is NOT ready
  const videoOpacity = videoHasFrame && !canvasReady ? "opacity-100" : "opacity-0";

  // 3. Canvas: fades in when ready
  const canvasOpacity = canvasReady ? "opacity-100" : "opacity-0";

  return (
    <div className="fixed inset-0 z-0 bg-[#0a0a0a] overflow-hidden pointer-events-none select-none">
      {/* 1. Poster <img> — full cover */}
      <img
        src={POSTER_URL}
        alt="NovaAI Hero Background Still"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${posterOpacity}`}
      />

      {/* 2. <video> — muted, playsInline, preload=auto, object-cover */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoadedData}
        onSeeked={() => setVideoHasFrame(true)}
        onError={handleVideoError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${videoOpacity}`}
      />

      {/* 3. <canvas> — full cover; draws scrubbed frames; fades in when ready */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-out ${canvasOpacity}`}
      />
    </div>
  );
}
