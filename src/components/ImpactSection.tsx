"use client";

import React from "react";
import {
  MessageCircle,
  FileCheck2,
  PhoneCall,
  BellRing,
  Download,
  CalendarCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

export function ImpactSection() {
  return (
    <section id="demos" className="relative px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
        <div>
          <Reveal delay={0}>
            <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md mb-4 drop-shadow-md">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white">
                Real-Life Impact • Live Demos
              </span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white uppercase">
              See what we automate.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120} className="max-w-md sm:text-right">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-white/50">
            Replacing repetitive phone calls, delayed bank files & lost WhatsApp leads.
          </p>
        </Reveal>
      </div>

      {/* Visual Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Visual Widget 1: WhatsApp Bot Simulation */}
        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      Real Estate & Sales WhatsApp Bot
                    </h3>
                    <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active 24/7 • Instant Reply
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-white/30">01</span>
              </div>

              {/* Simulated Chat Interface */}
              <div className="space-y-3 font-sans text-xs mb-6 bg-black/40 p-4 rounded-xl border border-white/5">
                {/* Incoming client message */}
                <div className="flex justify-end">
                  <div className="bg-white/15 text-white/90 p-2.5 rounded-2xl rounded-tr-none max-w-[85%]">
                    Can I get the 3BHK floor plan & pricing for Heritage Greens?
                    <div className="text-[9px] text-white/40 text-right mt-1 font-mono">
                      8:42 PM
                    </div>
                  </div>
                </div>

                {/* Instant Bot Response */}
                <div className="flex justify-start">
                  <div className="bg-[#12121a] border border-white/10 text-white/90 p-3 rounded-2xl rounded-tl-none max-w-[90%] space-y-2">
                    <p>
                      Hello Vikram! Here is the approved 3BHK brochure with pricing breakdown:
                    </p>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="font-mono text-[10px] text-white/80">
                        Heritage_Greens_3BHK.pdf
                      </span>
                      <Download size={13} className="text-white/60" />
                    </div>
                    <p className="text-white/70">
                      Would you like to schedule a site visit this Sunday at 11:30 AM?
                    </p>
                    <div className="pt-1 flex gap-2">
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                        <CalendarCheck size={11} /> Auto-Confirmed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-white/70">
                Turnaround: <span className="text-white font-medium">Under 2 seconds</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400">
                Zero Missed Leads
              </span>
            </div>
          </div>
        </Reveal>

        {/* Visual Widget 2: Bank & Insurance Audit Engine */}
        <Reveal delay={150}>
          <div className="h-full rounded-2xl border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/20">
                    <FileCheck2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      National Bank Inspection Radar
                    </h3>
                    <p className="text-[10px] font-mono text-blue-400">
                      SBI & Bank Audit Verified
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-white/30">02</span>
              </div>

              {/* Visual Scanner Mockup */}
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-3 font-mono text-xs mb-6">
                <div className="flex items-center justify-between text-[11px] text-white/60">
                  <span>FILE: SBI_Factory_Claim_042.pdf</span>
                  <span className="text-emerald-400">OCR VERIFIED</span>
                </div>

                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-white/50">Geotagged Coordinates:</span>
                    <span className="text-white">22.7196° N, 75.8577° E</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Damage Assessment:</span>
                    <span className="text-white">Validated (Machinery)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Bank Format Compliance:</span>
                    <span className="text-emerald-400 font-bold">100% Passed</span>
                  </div>
                </div>

                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[100%]" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-white/70">
                Speed: <span className="line-through text-white/40">4 Days</span> ➔ <span className="text-emerald-400 font-medium">35 Mins</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
                Zero Audit Errors
              </span>
            </div>
          </div>
        </Reveal>

        {/* Visual Widget 3: 8:00 PM Daily Executive Pulse */}
        <Reveal delay={200}>
          <div className="h-full rounded-2xl border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/20">
                    <BellRing size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      8:00 PM Executive Daily Pulse
                    </h3>
                    <p className="text-[10px] font-mono text-amber-400">
                      Delivered Straight to Owner&apos;s WhatsApp
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-white/30">03</span>
              </div>

              {/* Simulated Executive Notification */}
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                    NIRVYA Operations Bot • 8:00 PM Today
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Reconciled
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-mono text-sm sm:text-base font-semibold text-white">
                      ₹18.4L
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                      Dispatched
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-mono text-sm sm:text-base font-semibold text-emerald-400">
                      48
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                      Hot Leads
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-mono text-sm sm:text-base font-semibold text-white">
                      0
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                      Discrepancies
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-white/70">
                Action: <span className="text-white font-medium">No late-night calls needed</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
                15+ hrs Saved Weekly
              </span>
            </div>
          </div>
        </Reveal>

        {/* Visual Widget 4: AI Voice Call Attendant */}
        <Reveal delay={250}>
          <div className="h-full rounded-2xl border border-white/10 bg-[#0c0c12]/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400 border border-purple-500/20">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      AI Inbound Voice Agent
                    </h3>
                    <p className="text-[10px] font-mono text-purple-400">
                      Zero Hold Time • Hindi / English
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-white/30">04</span>
              </div>

              {/* Simulated Voice Waveform Visualizer */}
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-3 mb-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                    LIVE CALL #28
                  </span>
                  <span>02:14</span>
                </div>

                {/* Animated wave bars */}
                <div className="flex items-center justify-center gap-1 h-8 py-1">
                  {[40, 75, 25, 90, 60, 30, 85, 50, 95, 45, 65, 30, 80, 55, 90, 35].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-purple-500 to-white/90 rounded-full"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>

                <div className="text-[11px] text-white/70 italic bg-white/5 p-2 rounded border border-white/5">
                  &ldquo;Checking stock availability for Surat warehouse... Yes, 400 units ready for dispatch tomorrow morning.&rdquo;
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-white/70">
                Capacity: <span className="text-white font-medium">50 concurrent callers</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
                No Call Center Needed
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
