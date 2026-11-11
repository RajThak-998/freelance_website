"use client";

import React from "react";
import { ArrowUpRight, ArrowDown, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const ARCHITECT_PORTRAIT = "/architect-portrait.jpg";

export function SectionOne() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-between max-w-7xl mx-auto">
      {/* Top Floating Flankers */}
      <div className="flex items-start justify-between w-full pt-4 sm:pt-6">
        {/* Left Side Micro-label */}
        <Reveal delay={0}>
          <div className="text-left font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50 space-y-1">
            <div>Technical & AI</div>
            <div>Agency</div>
            <div className="text-white/30 text-[9px] pt-1">Enterprise Architecture</div>
          </div>
        </Reveal>

        {/* Right Corner Arrow */}
        <Reveal delay={80}>
          <a
            href="#contact"
            className="group p-3 sm:p-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300 flex items-center justify-center text-white"
            aria-label="Direct Consultation Inquiry"
          >
            <ArrowUpRight
              size={24}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 sm:w-7 sm:h-7"
            />
          </a>
        </Reveal>
      </div>

      {/* Main Centerpiece Headline */}
      <div className="my-auto py-10 sm:py-16 text-center flex flex-col items-center justify-center">
        <Reveal delay={120}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-medium leading-[1.05] tracking-tight text-white uppercase drop-shadow-2xl">
            <span className="block font-sans">WE ARE</span>
            <span className="block font-sans">FULL–SERVICE</span>
            <span
              className="block font-serif italic font-normal tracking-wide text-white/95 mt-1 sm:mt-2 capitalize sm:text-[1.1em]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              tech agency
            </span>
          </h1>
        </Reveal>

        {/* Sub-headline slogan */}
        <Reveal delay={200} className="mt-5 sm:mt-8">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-white/60">
            You run the business. We engineer the tech.
          </p>
        </Reveal>
      </div>

      {/* Bottom Row: Founder Card + Rotating Scroll Badge + Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-8 pt-4 w-full">
        {/* Left: Founder Advisory Micro-card with dark monochrome portrait */}
        <div className="order-2 md:order-1 flex justify-start">
          <Reveal delay={250}>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3 backdrop-blur-xl">
              <img
                src={ARCHITECT_PORTRAIT}
                alt="Technical Leadership, NIRVYA"
                className="h-14 w-12 rounded-lg object-cover flex-shrink-0 border border-white/15 shadow-md filter brightness-95 contrast-105"
              />
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white">
                  Talk with Our Engineers
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/50">
                  Technical Architecture Lead
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.1em] text-white/90 hover:text-white mt-1"
                >
                  <span>Book 15-min call</span>
                  <ChevronRight size={11} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Center: Rotating Circular Scroll Badge (Scrolls directly to Services) */}
        <div className="order-1 md:order-2 flex justify-center">
          <Reveal delay={300}>
            <button
              type="button"
              onClick={scrollToServices}
              className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 group cursor-pointer focus:outline-none"
              aria-label="Scroll to services"
            >
              {/* Rotating Text Ring */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-[spin_14s_linear_infinite]"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8.5px] uppercase font-mono tracking-[0.24em] fill-white/55 group-hover:fill-white transition-colors">
                  <textPath href="#circlePath" startOffset="0%">
                    SCROLL TO EXPLORE • NIRVYA STUDIO •
                  </textPath>
                </text>
              </svg>

              {/* Centered Arrow Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all">
                  <ArrowDown
                    size={14}
                    className="text-white/80 group-hover:translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            </button>
          </Reveal>
        </div>

        {/* Right: Editorial Overview Paragraph */}
        <div className="order-3 flex md:justify-end">
          <Reveal delay={350} className="max-w-xs md:text-right">
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              The dedicated technical arm for ambitious high-growth enterprises — integrating custom software, AI agents, and WhatsApp automation to deliver effortless scale.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
