"use client";

import React from "react";
import { Search, PenTool, Users, Headphones, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const PROCESS_STEPS = [
  {
    step: "01",
    tag: "Audit",
    icon: Search,
    title: "Ground-Level Discovery",
    outcome: "We shadow your daily routines to identify manual bottlenecks.",
    chip: "3-Day Gap Scan",
  },
  {
    step: "02",
    tag: "Build",
    icon: PenTool,
    title: "Streamlined Custom Architecture",
    outcome: "Clean, streamlined software and bots tailored strictly to your staff.",
    chip: "Lightweight & Fast",
  },
  {
    step: "03",
    tag: "Train",
    icon: Users,
    title: "Hands-On Team Training",
    outcome: "We sit with your staff in plain regional Hindi/English until 100% confident.",
    chip: "Zero Learning Curve",
  },
  {
    step: "04",
    tag: "Partner",
    icon: Headphones,
    title: "24/7 Dedicated Lead Care",
    outcome: "Continuous performance monitoring with direct WhatsApp/phone engineer access.",
    chip: "< 15-Min Response",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
        <div>
          <Reveal delay={0}>
            <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md mb-4 drop-shadow-md">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white">
                How We Work • Fast & Effortless
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white uppercase">
              The 4-Step Blueprint.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120} className="max-w-md sm:text-right">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-white/50">
            From initial audit to live deployment with zero technical headaches.
          </p>
        </Reveal>
      </div>

      {/* 4-Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.step} delay={80 + idx * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:border-white/25 transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-light text-white/30 group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      {step.chip}
                    </span>
                  </div>

                  <div className="p-2.5 w-fit rounded-xl bg-white/10 border border-white/15 mb-3">
                    <Icon size={18} className="text-white" />
                  </div>

                  <h3 className="text-base font-medium text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-white/65 leading-relaxed">
                    {step.outcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-5 flex items-center gap-1.5 text-[11px] font-mono text-white/60">
                  <Check size={12} className="text-emerald-400" />
                  <span>Guaranteed Handover</span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
