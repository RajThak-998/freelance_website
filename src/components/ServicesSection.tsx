"use client";

import React from "react";
import {
  Cpu,
  Globe2,
  Bot,
  PhoneCall,
  MessageSquare,
  FileCheck2,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES_DATA = [
  {
    icon: Cpu,
    tag: "Core Infrastructure",
    title: "Custom Business Software & ERPs",
    desc: "Replace clunky paper trails and out-of-sync Excel sheets with clean, lightweight software built specifically around your exact operational routines.",
    benefit: "Staff learns it in 30 minutes. Zero human calculation errors.",
    deliverables: ["Custom Inventory & Billing", "Field Staff Tracking", "Role-Based Access"],
  },
  {
    icon: Globe2,
    tag: "Digital Authority",
    title: "High-Authority Business Portfolios",
    desc: "A lightning-fast, cinematic digital presence designed to pass vendor scrutiny when bidding for contracts with national banks and enterprise clients.",
    benefit: "Builds instant institutional trust and authority.",
    deliverables: ["Modern Mobile-First Design", "Client Portals & Case Studies", "High Speed Hosting"],
  },
  {
    icon: Bot,
    tag: "24/7 Intelligence",
    title: "AI Web Sales & Support Agents",
    desc: "Intelligent conversational agents embedded directly on your site, trained on your exact service catalog, pricing models, and regional business nuance.",
    benefit: "Captures qualified leads while you sleep.",
    deliverables: ["Multilingual Understanding", "Automated Lead Qualification", "Direct CRM Sync"],
  },
  {
    icon: PhoneCall,
    tag: "Voice Tech",
    title: "AI Voice Agents (Inbound & Outbound)",
    desc: "Natural-sounding voice agents that answer routine customer calls, follow up on quotes, verify appointments, and route high-priority cases to you.",
    benefit: "Handle 50+ simultaneous calls without a call center.",
    deliverables: ["Instant Call Answering", "Appointment Scheduling", "Post-Call Summaries"],
  },
  {
    icon: MessageSquare,
    tag: "Client Communication",
    title: "Smart WhatsApp Bots & Workflows",
    desc: "Engage clients where they already live. Automated quotation delivery, payment receipts, order status updates, and interactive self-service menus.",
    benefit: "98% message open rate within 5 minutes.",
    deliverables: ["Official WhatsApp API", "Automated PDF Delivery", "Interactive Menus"],
  },
  {
    icon: FileCheck2,
    tag: "Audits & Compliance",
    title: "Document & Inspection Automation",
    desc: "Purpose-built pipelines for third-party insurance inspectors, real estate developers, and bank compliance teams needing automated verification.",
    benefit: "Cuts document processing time from days to minutes.",
    deliverables: ["Automated OCR & Data Extraction", "Geotagged Photo Validation", "Audit-Ready Bank Reports"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-32">
      {/* Top Section Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start justify-between mb-16 sm:mb-20">
        <div>
          <Reveal delay={100}>
            <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md mb-5 drop-shadow-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                Our Services • Tech Built for Growth
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg max-w-2xl">
              Purpose-built tech.
              <br />
              Zero unnecessary jargon.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={300} className="max-w-md sm:text-right">
          <p className="text-base sm:text-lg leading-relaxed text-white/80 drop-shadow-md">
            We don&apos;t sell tech for the sake of buzzwords. Every line of code, automated bot, and system we deploy has one job: saving your business time and expanding your margins.
          </p>
        </Reveal>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES_DATA.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={120 + idx * 80}>
              <div className="h-full flex flex-col justify-between rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 sm:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl group">
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/15 border border-white/20">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/55">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-white/80">
                        <span className="w-1 h-1 rounded-full bg-white/60" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Benefit & CTA */}
                <div className="pt-4 border-t border-white/10">
                  <p className="font-mono text-[11px] text-white/90 mb-4 tracking-wide">
                    <span className="text-emerald-400">Outcome:</span> {service.benefit}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs text-white font-medium hover:text-white/80 transition-colors"
                  >
                    <span>Request this service</span>
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
