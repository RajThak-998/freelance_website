"use client";

import React from "react";

interface NirvyaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
}

export function NirvyaLogo({
  className = "",
  size = "md",
  showSubtitle = false,
}: NirvyaLogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-sm tracking-[0.25em]",
    md: "text-lg tracking-[0.3em]",
    lg: "text-2xl tracking-[0.35em]",
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Stylized N emblem with 4-point star */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="nirvyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a3a3a3" />
              <stop offset="100%" stopColor="#404040" />
            </linearGradient>
            <linearGradient id="slashGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#737373" />
            </linearGradient>
          </defs>

          {/* Left vertical pillar */}
          <path
            d="M 22 28 L 38 28 L 38 78 L 22 78 Z"
            fill="url(#nirvyaGrad)"
          />

          {/* Diagonal stylized sweep */}
          <path
            d="M 22 28 C 45 32, 60 55, 78 78 L 62 78 C 48 58, 38 42, 22 28 Z"
            fill="url(#slashGrad)"
          />

          {/* Right vertical pillar */}
          <path
            d="M 62 28 L 78 28 L 78 78 L 62 78 Z"
            fill="url(#nirvyaGrad)"
          />

          {/* 4-point sparkle star on top right */}
          <path
            d="M 83 20 Q 83 25, 88 25 Q 83 25, 83 30 Q 83 25, 78 25 Q 83 25, 83 20 Z"
            fill="#ffffff"
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-sans font-light uppercase text-white ${textSizes[size]}`}
          style={{ fontFamily: "var(--font-sans), sans-serif" }}
        >
          NIRVYA
        </span>
        {showSubtitle && (
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/50 -mt-0.5">
            AGENCY
          </span>
        )}
      </div>
    </div>
  );
}
