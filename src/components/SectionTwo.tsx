"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const CAPABILITIES = [
  {
    num: "01",
    title: "Real-time vision",
    body: "Reads context as it happens and surfaces what matters before you ask.",
  },
  {
    num: "02",
    title: "Layered insight",
    body: "Moves from rough outline to sharp output without losing the thread.",
  },
  {
    num: "03",
    title: "Adaptive speed",
    body: "Learns your cadence and tightens every pass as you work.",
  },
];

export function SectionTwo() {
  return (
    <section className="relative min-h-screen supports-[height:100svh]:min-h-[100svh] px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-12 md:pb-16 flex flex-col justify-between">
      {/* Top row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start justify-between">
        {/* Left badge delay 120 */}
        <Reveal delay={120}>
          <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md drop-shadow-md">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
              Insight On Demand
            </span>
          </div>
        </Reveal>

        {/* Right copy delay 220 (max-w-sm sm:text-right) */}
        <Reveal delay={220} className="max-w-sm sm:text-right">
          <p className="text-lg sm:text-xl leading-relaxed text-white drop-shadow-md">
            Our AI doesn&apos;t just respond — it interprets, sharpens, and
            delivers the signal you need.
          </p>
        </Reveal>
      </div>

      {/* Bottom area (flex-1 justify-end, flex-col gap-12 → md:flex-row items-end justify-between gap-16) */}
      <div className="flex-1 flex flex-col justify-end pt-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-end justify-between md:gap-16">
          {/* Left column (max-w-xl) */}
          <div className="max-w-xl">
            {/* H2 delay 180 */}
            <Reveal delay={180}>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg">
                Learn to see
                <br />
                brilliantly.
              </h2>
            </Reveal>

            {/* Body delay 320 */}
            <Reveal delay={320}>
              <p className="mt-6 max-w-md text-sm sm:text-base text-white/80 drop-shadow-md leading-relaxed">
                From the first sketch to the final render, Nova turns raw intent
                into decisions your team can act on — quietly, precisely, at
                speed.
              </p>
            </Reveal>

            {/* CTAs delay 420 */}
            <Reveal delay={420}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#demo"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-black hover:bg-white/85 transition-colors duration-300"
                >
                  <span>Run the demo</span>
                  <ChevronRight size={14} className="stroke-[2.5]" />
                </a>
                <a
                  href="#consultation"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2.5 text-xs sm:text-sm text-white hover:bg-white/20 transition-colors duration-300"
                >
                  Free consultation
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — frosted capability panel */}
          <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-5 sm:px-6 shadow-xl">
            {CAPABILITIES.map((item, idx) => (
              <Reveal
                key={item.num}
                delay={300 + idx * 110}
                className={`group flex gap-5 py-5 cursor-default ${
                  idx < CAPABILITIES.length - 1 ? "border-b border-white/15" : ""
                }`}
              >
                {/* Index */}
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/55 pt-1 select-none">
                  {item.num}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-medium text-white">
                      {item.title}
                    </span>
                    <ChevronRight
                      size={16}
                      className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 ml-2"
                    />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
