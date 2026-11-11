"use client";

import React from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Home, Bot, FileSpreadsheet } from "lucide-react";
import { Reveal } from "./Reveal";

const IMPACT_CARDS = [
  {
    icon: ShieldCheck,
    tag: "Bank & Insurance Inspection",
    title: "Third-Party Bank Verifications & Field Audits",
    problem:
      "Field inspection reports collected on paper, clerks re-typing data across 4 portals, and bank claim files delayed by 3 to 5 days with recurring human errors.",
    solution:
      "Automated inspection intake pipeline. Field photos and documents auto-verified against bank guidelines, reducing audit turnaround from 4 days to under 3 hours.",
    metric: "80% faster bank file clearance",
  },
  {
    icon: Home,
    tag: "Real Estate & Construction",
    title: "Customer Inquiries & Site Visit Bookings",
    problem:
      "Buyers reaching out after 7 PM getting delayed replies, leads lost in personal WhatsApp chats, and sales teams forgetting to follow up with serious buyers.",
    solution:
      "24/7 AI WhatsApp assistant that instantly answers pricing queries, delivers high-res brochures, and confirms site visits directly into the sales manager's calendar.",
    metric: "Zero missed buyer inquiries",
  },
  {
    icon: Bot,
    tag: "AI Customer Attendant",
    title: "24/7 Website & Voice Sales Assistant",
    problem:
      "Website visitors bounce because no one is available to assist them immediately, forcing the business owner to personally answer repeated basic questions.",
    solution:
      "Trained AI Web & Voice agents that understand regional accents and local business context, qualifying prospects and filtering out spam inquiries automatically.",
    metric: "3.2x more qualified inquiries",
  },
  {
    icon: FileSpreadsheet,
    tag: "Daily Operations",
    title: "Replacing Scattered Excel Sheets & Manual Tally",
    problem:
      "Owners calling branch staff multiple times a day to ask about dispatch status, collections, and inventory levels, leading to constant operational anxiety.",
    solution:
      "One unified, dead-simple dashboard tailored to your staff's workflow. An automated executive snapshot is delivered straight to the owner's WhatsApp at 8 PM daily.",
    metric: "15+ hours saved weekly per owner",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-32">
      {/* Top row */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start justify-between mb-16 sm:mb-20">
        <div>
          <Reveal delay={100}>
            <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md mb-5 drop-shadow-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                Real-Life Impact • Practical Operations
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg max-w-2xl">
              Replace manual chaos
              <br />
              with effortless calm.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={300} className="max-w-md sm:text-right">
          <p className="text-base sm:text-lg leading-relaxed text-white/80 drop-shadow-md">
            You shouldn&apos;t spend your evenings tallying spreadsheets, chasing team updates on WhatsApp, or verifying paper documents. We eliminate the repetitive friction holding your business back.
          </p>
        </Reveal>
      </div>

      {/* Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {IMPACT_CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={150 + idx * 100}>
              <div className="h-full flex flex-col justify-between rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 sm:p-8 hover:border-white/30 transition-all duration-300 shadow-xl group">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/15 border border-white/20">
                        <Icon size={18} className="text-white" />
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/60">
                        {card.tag}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-white/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-6 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Problem vs Solution Split */}
                  <div className="space-y-4 mb-6">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                          The Old Manual Routine
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                        {card.problem}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/90">
                          With void Automation
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                        {card.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Metric Badge */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.12em] text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    {card.metric}
                  </span>
                  <a
                    href="#contact"
                    className="text-xs text-white/60 group-hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Implement this</span>
                    <ArrowRight size={13} />
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
