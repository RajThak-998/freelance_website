"use client";

import React from "react";
import { Star, MapPin, Building2, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "50+", label: "Workflows Automated", sub: "Across Tier 2 & 3 Hubs" },
  { value: "35+ hrs", label: "Saved Weekly", sub: "Per Business Owner" },
  { value: "99.9%", label: "System Uptime", sub: "Enterprise Reliability" },
  { value: "< 15 min", label: "Support Response", sub: "Direct Engineer Access" },
];

const TESTIMONIALS = [
  {
    name: "Rajesh V. Sharma",
    role: "Managing Director",
    company: "Apex Verification Partners (National Bank Audit Partner)",
    location: "Indore, Madhya Pradesh",
    quote:
      "We process inspection files for national public sector banks. Earlier, our clerks took 4 days per file just cross-checking field photos and loan papers. Void engineered an automated inspection portal that brought turnaround under 4 hours with zero audit errors. Our bank ratings have never been better.",
    highlight: "Audit clearance speed improved by 80%",
  },
  {
    name: "Vikramaditya Rathore",
    role: "Founder & Developer",
    company: "Heritage Heights Real Estate",
    location: "Jaipur, Rajasthan",
    quote:
      "If you don't answer a real estate buyer within 10 minutes on WhatsApp, they call another builder. Void deployed a 24/7 AI WhatsApp bot that delivers floor plans, checks buyer budgets, and schedules verified site visits directly into our calendars. Our weekend site visits doubled.",
    highlight: "2x more qualified site visit bookings",
  },
  {
    name: "Suresh K. Patel",
    role: "Proprietor",
    company: "Patel Industrial Hardware & Spares",
    location: "Surat, Gujarat",
    quote:
      "Being non-technical, I was terrified of wasting money on tech that my staff wouldn't understand. Void sat down with our warehouse team, removed the complicated jargon, and gave us a system so intuitive that our staff mastered it in just one afternoon.",
    highlight: "Zero training friction for non-tech staff",
  },
  {
    name: "Dr. Neha Agarwal",
    role: "Operations Director",
    company: "CarePoint Diagnostics & Clinics",
    location: "Nagpur, Maharashtra",
    quote:
      "Our reception was constantly overwhelmed with inquiry calls for test bookings and report delivery. Void installed an AI voice attendant that handles routine inquiries effortlessly and sends PDF test receipts on WhatsApp. Our patient satisfaction has soared.",
    highlight: "Zero missed patient phone calls",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-32">
      {/* Top Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start justify-between mb-16 sm:mb-20">
        <div>
          <Reveal delay={100}>
            <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md mb-5 drop-shadow-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                Client Proof • Real Regional Results
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg max-w-2xl">
              Trusted by operators
              <br />
              who demand results.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={300} className="max-w-md sm:text-right">
          <p className="text-base sm:text-lg leading-relaxed text-white/80 drop-shadow-md">
            Real feedback from growing enterprises in Tier 2 & Tier 3 cities who replaced daily operational friction with our custom tech.
          </p>
        </Reveal>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {STATS.map((stat, idx) => (
          <Reveal key={stat.label} delay={150 + idx * 80}>
            <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 text-center hover:border-white/30 transition-all duration-300">
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2 drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                {stat.sub}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <Reveal key={t.name} delay={180 + idx * 90}>
            <div className="h-full flex flex-col justify-between rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 sm:p-8 hover:border-white/30 transition-all duration-300 shadow-xl group">
              <div>
                {/* Rating & Location Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60 flex items-center gap-1">
                    <MapPin size={11} className="text-white/40" />
                    {t.location}
                  </span>
                </div>

                <Quote size={24} className="text-white/20 mb-3" />

                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-white/60 flex items-center gap-1 mt-0.5">
                      <Building2 size={12} className="text-white/40" />
                      {t.role} • {t.company}
                    </p>
                  </div>
                  <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                    {t.highlight}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
