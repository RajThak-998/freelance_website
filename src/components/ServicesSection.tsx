"use client";

import React from "react";
import {
  Cpu,
  Globe2,
  Bot,
  MessageSquare,
  FileCheck2,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES_DATA = [
  {
    icon: Cpu,
    tag: "Core Systems",
    title: "Custom Software & ERPs",
    outcome: "Built strictly around your team's existing workflow. 30-min staff learning curve.",
    visual: (
      <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px]">
        <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-white/80">
          ✓ Tally Synced
        </span>
        <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-white/80">
          ✓ Real-time Stock
        </span>
        <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-white/80">
          ✓ Multi-Branch
        </span>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    tag: "Client Channels",
    title: "Smart WhatsApp Bots",
    outcome: "Automated quotation dispatch, payment receipts, and floor-plan PDFs where customers live.",
    visual: (
      <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px]">
        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
          98% Open Rate
        </span>
        <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-white/80">
          Auto PDF Delivery
        </span>
      </div>
    ),
  },
  {
    icon: Bot,
    tag: "24/7 Intelligence",
    title: "AI Web & Voice Agents",
    outcome: "Voice & chat attendants understanding regional nuance to qualify buyers and book meetings.",
    visual: (
      <div className="flex items-center gap-2 pt-2 font-mono text-[10px]">
        <span className="inline-flex items-center gap-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-2 py-1 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Hindi & English
        </span>
        <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-white/80">
          Zero Hold Time
        </span>
      </div>
    ),
  },
  {
    icon: FileCheck2,
    tag: "Audit Radar",
    title: "Inspection & Audit Automation",
    outcome: "Automated document OCR & field photo validation for third-party bank inspection firms.",
    visual: (
      <div className="flex items-center gap-2 pt-2 font-mono text-[10px]">
        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-1 rounded flex items-center gap-1">
          <ShieldCheck size={12} />
          Bank Compliant
        </span>
        <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-white/80">
          35-Min Clearance
        </span>
      </div>
    ),
  },
  {
    icon: Globe2,
    tag: "Digital Authority",
    title: "Institutional Portfolios",
    outcome: "Cinematic, lightning-fast web presence designed to pass corporate vendor verification.",
    visual: (
      <div className="flex items-center gap-2 pt-2 font-mono text-[10px]">
        <span className="bg-white/5 border border-white/10 text-white/90 px-2 py-1 rounded flex items-center gap-1">
          <CheckCircle size={11} className="text-emerald-400" />
          Enterprise Grade
        </span>
        <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-white/70">
          Sub-second Speed
        </span>
      </div>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
        <div>
          <Reveal delay={0}>
            <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md mb-4 drop-shadow-md">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white">
                Core Capabilities • High-Performance Systems
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white uppercase">
              Outcome-Driven Services.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120} className="max-w-md sm:text-right">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-white/50">
            High-utility automation engineered for tangible business scale.
          </p>
        </Reveal>
      </div>

      {/* Visual Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES_DATA.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={80 + idx * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:border-white/25 transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                    {service.outcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  {service.visual}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs text-white/80 group-hover:text-white transition-colors pt-1"
                  >
                    <span>Deploy this</span>
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
