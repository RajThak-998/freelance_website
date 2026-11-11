"use client";

import React from "react";
import { Star, MapPin, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "50+", label: "Workflows Automated", sub: "Regional & National Hubs" },
  { value: "35+ hrs", label: "Saved Weekly", sub: "Per Business Owner" },
  { value: "99.9%", label: "System Uptime", sub: "Enterprise Reliability" },
  { value: "< 15 min", label: "Support Response", sub: "Direct Engineer Access" },
];

const TESTIMONIALS = [
  {
    name: "Rajesh V. Sharma",
    role: "MD, Apex Verification",
    location: "Indore, MP",
    quote:
      "Our bank claim inspection turnaround dropped from 4 days to 35 minutes. Zero manual entry mistakes, and our SBI audit rating is 100%.",
    highlight: "80% Faster Clearance",
  },
  {
    name: "Vikramaditya Rathore",
    role: "Founder, Heritage Heights",
    location: "Jaipur, RJ",
    quote:
      "The WhatsApp bot answers buyers in 2 seconds at night and books verified visits into our sales calendar. Our site visits literally doubled.",
    highlight: "2x Site Bookings",
  },
  {
    name: "Suresh K. Patel",
    role: "Proprietor, Patel Hardware",
    location: "Surat, GJ",
    quote:
      "We feared spending money on tech our non-tech staff wouldn't understand. NIRVYA trained our warehouse team in one afternoon. Flawless.",
    highlight: "Zero Learning Curve",
  },
  {
    name: "Dr. Neha Agarwal",
    role: "Director, CarePoint Clinics",
    location: "Nagpur, MH",
    quote:
      "Their AI voice attendant handles 80+ patient test calls daily and dispatches PDF receipts on WhatsApp. No missed calls during morning rushes.",
    highlight: "Zero Missed Calls",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="relative px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
        <div>
          <Reveal delay={0}>
            <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md mb-4 drop-shadow-md">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white">
                Client Proof • Verified Results
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white uppercase">
              Proven Across Hubs.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120} className="max-w-md sm:text-right">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-white/50">
            Real metrics from high-growth business operations.
          </p>
        </Reveal>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-10 sm:mb-12">
        {STATS.map((stat, idx) => (
          <Reveal key={stat.label} delay={80 + idx * 50}>
            <div className="rounded-2xl border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl p-4 sm:p-5 text-center shadow-lg hover:border-white/20 transition-all">
              <div className="font-mono text-2xl sm:text-4xl font-light text-white mb-1 drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/90">
                {stat.label}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/40 mt-0.5">
                {stat.sub}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Testimonials Grid (Crisp 2-line visual cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {TESTIMONIALS.map((t, idx) => (
          <Reveal key={t.name} delay={100 + idx * 60}>
            <div className="rounded-2xl border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {t.highlight}
                  </span>
                </div>

                <Quote size={16} className="text-white/20 mb-2" />
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-white">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-white/50">{t.role}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 flex items-center gap-1">
                  <MapPin size={10} />
                  {t.location}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
