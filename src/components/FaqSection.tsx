"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "My staff only knows basic WhatsApp. Can they operate this?",
    a: "100% yes. If your staff can send a WhatsApp message, they can use our tools. We eliminate complex menus and personally train your team in plain language.",
  },
  {
    q: "Is custom automation an unnecessary expense for my business?",
    a: "It pays for itself within weeks. When an automated WhatsApp bot captures 5 extra deals a month or saves clerks 25 hours a week, it becomes your highest ROI asset.",
  },
  {
    q: "How fast do solutions go live?",
    a: "WhatsApp bots and AI agents go live in 10 to 14 days. Custom software or ERP modules typically deploy in 3 to 4 weeks with weekly working previews.",
  },
  {
    q: "What if something breaks on a busy workday?",
    a: "You get direct WhatsApp and phone access to our lead engineers with under 15-minute response times. We monitor system uptime 24/7.",
  },
  {
    q: "Are there hidden server costs or forced subscriptions?",
    a: "Zero hidden costs. Every deliverable is quoted with fixed transparent pricing. You own your code, database, and business data outright.",
  },
  {
    q: "Can this connect with our existing Tally and Excel sheets?",
    a: "Yes. We build automated bridges directly into your existing Tally accounting, Google Sheets, and banking PDF export formats without disrupting daily operations.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <Reveal delay={0}>
          <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md mb-4 drop-shadow-md">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white">
              Questions & Answers • Transparent Terms
            </span>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white uppercase">
            Clear Answers.
          </h2>
        </Reveal>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Reveal key={faq.q} delay={70 + idx * 40}>
              <div
                className={`rounded-2xl border transition-all duration-200 backdrop-blur-xl overflow-hidden ${
                  isOpen
                    ? "border-white/25 bg-[#101018]/90 shadow-xl"
                    : "border-white/10 bg-[#0c0c12]/70 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-3 focus:outline-none min-h-[50px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="font-mono text-[11px] text-white/40">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-white/60 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 mt-1">
                    <p>{faq.a}</p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.12em] text-emerald-400">
                      <ShieldCheck size={12} />
                      <span>Guaranteed End-to-End Support</span>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
