"use client";

import React, { useState, useEffect } from "react";

export function TechBackground() {
  const [brandBgOpacity, setBrandBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      // When at top hero fold (< 80px), opacity is 0 (clean hero, zero overlap)
      // As user scrolls down past 80px, smoothly fade in the metallic NIRVAYA brand artwork
      if (sy < 80) {
        setBrandBgOpacity(0);
      } else {
        // Ramp up opacity between 80px and 450px scroll depth
        const progress = Math.min(1, (sy - 80) / 370);
        // Peak at 0.55 opacity for optimal dark brand visibility behind cards
        setBrandBgOpacity(progress * 0.55);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 bg-[#050507] overflow-hidden pointer-events-none select-none"
    >
      {/* 1. Base clean metallic light arcs for Hero (No center text, zero overlap) */}
      <div
        className="absolute top-0 left-0 right-0 h-[700px] sm:h-[950px] w-full bg-top bg-no-repeat bg-cover opacity-60 mix-blend-screen"
        style={{
          backgroundImage: "url('/nirvya-clean-bg.jpg')",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* 2. Scroll-Activated Metallic NIRVYA Brand Backdrop */}
      {/* Smoothly fades into the background as user scrolls down from hero */}
      <div
        className="absolute top-[18vh] sm:top-[22vh] left-0 right-0 h-[650px] sm:h-[900px] w-full bg-center bg-no-repeat bg-contain transition-opacity duration-700 ease-out mix-blend-screen"
        style={{
          backgroundImage: "url('/nirvya-hero-bg.jpg')",
          opacity: brandBgOpacity,
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 50%, black 30%, transparent 95%)",
        }}
      />

      {/* 3. Soft ambient backlights */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[750px] h-[300px] sm:h-[500px] rounded-full bg-white/[0.035] blur-[130px]" />
      <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-white/[0.02] blur-[140px]" />
      <div className="absolute top-[70%] -left-[10%] w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full bg-white/[0.02] blur-[140px]" />

      {/* 4. Subtle architectural grid lines */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 10%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 10%, transparent 90%)",
        }}
      />

      {/* 5. Top horizon hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
