"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "I am not tech-savvy and my staff only knows basic WhatsApp. Will we struggle to use this?",
    a: "Not at all. We design specifically for real-world non-technical business teams in Tier 2 and Tier 3 cities. We eliminate confusing menus, tech jargon, and unnecessary buttons. If your team can send a photo or read a WhatsApp message, they can use our systems with ease. Furthermore, our engineers personally train your staff until everyone is 100% comfortable.",
  },
  {
    q: "Is custom tech an unnecessary waste of money for a Tier 2/3 business like mine?",
    a: "That fear usually comes from hearing about overpriced metro agencies that deliver bloated software you never use. We operate differently: our systems are direct investments that pay for themselves within weeks. If an automated WhatsApp bot captures 5 extra real estate deals a month, or an automated inspection pipeline saves your clerks 25 hours a week, the software has already earned its return multiple times over. We grow along with you—not off you.",
  },
  {
    q: "How long does it take from our first phone call to going live?",
    a: "Most automation workflows, AI web/voice agents, and WhatsApp bots go live within 10 to 14 days. Custom software or ERP modules typically take 3 to 4 weeks. We work in quick, transparent weekly phases so you see working prototypes almost immediately without endless waiting.",
  },
  {
    q: "What happens if something breaks or our staff needs help on a busy workday?",
    a: "You will never have to file an automated support ticket or wait 48 hours for an email reply. You have direct phone and WhatsApp access to our lead engineers. Our average response time is under 15 minutes. We treat your uptime as our personal responsibility.",
  },
  {
    q: "Are there hidden costs, server charges, or forced ongoing subscriptions?",
    a: "Zero hidden charges. Everything is presented in clear, transparent line items upfront before we write a single line of code. You own your code and your data. If you want continuous monitoring, maintenance, and regular feature updates, we offer a flat, predictable monthly plan with no surprise fees.",
  },
  {
    q: "Can you connect with our existing Tally accounting, Excel sheets, or bank portal formats?",
    a: "Yes. You never have to abandon what already works for your business. We build smooth bridges into Tally, Google Sheets, custom Excel templates, and banking PDF export formats so your daily accounting and compliance stay completely seamless.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-32">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start justify-between mb-16 sm:mb-20">
        <div>
          <Reveal delay={100}>
            <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md mb-5 drop-shadow-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                Frequently Asked Questions • Zero Secrets
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg max-w-2xl">
              Clear answers.
              <br />
              Zero surprises.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={300} className="max-w-md sm:text-right">
          <p className="text-base sm:text-lg leading-relaxed text-white/80 drop-shadow-md">
            We are here to fill the technical void in your business so you can thrive. You handle your business operations, we handle the tech end-to-end.
          </p>
        </Reveal>
      </div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Reveal key={faq.q} delay={120 + idx * 60}>
              <div
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? "border-white/30 bg-white/15 shadow-xl"
                    : "border-white/15 bg-white/10 hover:border-white/25 hover:bg-white/12"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/40">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-white">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-white/60 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-white/75 leading-relaxed border-t border-white/10 mt-1">
                    <p>{faq.a}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.12em] text-emerald-400">
                      <ShieldCheck size={13} />
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
