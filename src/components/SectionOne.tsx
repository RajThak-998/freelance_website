"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  "/ CUSTOM BUSINESS SOFTWARE",
  "/ AI WEB & VOICE AGENTS",
  "/ WHATSAPP BOT AUTOMATION",
  "/ DOCUMENT & AUDIT SYSTEMS",
];

const MITHA_PORTRAIT_URL =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85";
const MITHA_LOCAL_FALLBACK = "/mitha.webp";

export function SectionOne() {
  const [portraitSrc, setPortraitSrc] = useState(MITHA_PORTRAIT_URL);

  return (
    <section className="relative min-h-screen supports-[height:100svh]:min-h-[100svh] px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-12 md:pb-16 flex flex-col justify-between">
      {/* Top row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start justify-between">
        {/* Left — service list (gap-2), each reveal delay 150 + i*120 */}
        <div className="flex flex-col gap-2">
          {SERVICES.map((service, idx) => (
            <Reveal key={service} delay={150 + idx * 110}>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/90 drop-shadow-md">
                {service}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Right — intro (max-w-sm sm:text-right, delay 300) */}
        <Reveal delay={300} className="max-w-md sm:text-right">
          <p className="text-lg sm:text-xl leading-relaxed text-white drop-shadow-md font-normal">
            We don&apos;t profit from your complexity — we grow when your operations thrive.
            Filling the technical void for ambitious businesses across Tier 2 & Tier 3 cities.
          </p>
        </Reveal>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end justify-between mt-12 sm:mt-0">
        {/* Left */}
        <div className="max-w-2xl">
          {/* Badge delay 150 */}
          <Reveal delay={150}>
            <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md mb-5 drop-shadow-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                We Fill The Technical Void • Tier 2 & 3 Business Tech
              </span>
            </div>
          </Reveal>

          {/* H1 delay 280 */}
          <Reveal delay={280}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg">
              You run the business.
              <br />
              We engineer the tech.
            </h1>
          </Reveal>
        </div>

        {/* Right — glass contact card (delay 420) */}
        <Reveal delay={420} className="self-start md:self-auto">
          <div className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/15 p-3 backdrop-blur-md shadow-lg">
            <img
              src={portraitSrc}
              onError={() => {
                if (portraitSrc !== MITHA_LOCAL_FALLBACK) {
                  setPortraitSrc(MITHA_LOCAL_FALLBACK);
                }
              }}
              alt="Mitha, co-founder of void"
              className="h-24 w-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-1.5 pr-2">
              <span className="text-sm font-medium text-white">
                Talk with Our Engineers
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                Co-founder • Technical Architecture
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/85 transition-colors duration-300 mt-1.5 self-start"
              >
                <span>Book 15-min call</span>
                <ChevronRight size={14} className="stroke-[2.5]" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
