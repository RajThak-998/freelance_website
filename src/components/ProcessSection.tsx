"use client";

import React from "react";
import { Search, PenTool, Users, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";

const PROCESS_STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Workflow Discovery & Gap Audit",
    timeframe: "Day 1 – 3",
    description:
      "Our senior engineers analyze how your business currently runs on the ground. We identify repetitive bottlenecks, missing customer touchpoints, and the exact technical void holding you back.",
    reassurance: "Zero technical homework for you. We observe and document everything.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Tailored Architecture & Build",
    timeframe: "Week 1 – 2",
    description:
      "We design and build clean, lightweight automation or software strictly modeled around your team's current habits. Every screen is streamlined so non-technical staff can navigate effortlessly.",
    reassurance: "No bloated software menus. Only what your business actually needs.",
  },
  {
    step: "03",
    icon: Users,
    title: "Hands-On Staff Training",
    timeframe: "Week 2 – 3",
    description:
      "We sit directly with your staff—in plain regional language—and guide them step-by-step through the tool. We test live scenarios together until everyone is completely confident.",
    reassurance: "Zero steep learning curve. If your staff can use WhatsApp, they can use this.",
  },
  {
    step: "04",
    icon: Headphones,
    title: "Dedicated Ongoing Tech Partnership",
    timeframe: "Continuous",
    description:
      "We don't hand over a password and disappear. We monitor system health, perform regular security backups, and are always available on direct call or WhatsApp whenever you need an enhancement.",
    reassurance: "You handle the business operations. We handle the servers and tech.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-32">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start justify-between mb-16 sm:mb-20">
        <div>
          <Reveal delay={100}>
            <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md mb-5 drop-shadow-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                How We Work • The 4-Step Blueprint
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg max-w-2xl">
              Simple steps.
              <br />
              Zero tech headaches.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={300} className="max-w-md sm:text-right">
          <p className="text-base sm:text-lg leading-relaxed text-white/80 drop-shadow-md">
            You don&apos;t need to hire an expensive in-house IT department. We act as your dedicated technical arm from initial audit to everyday support.
          </p>
        </Reveal>
      </div>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.step} delay={150 + idx * 100}>
              <div className="h-full flex flex-col justify-between rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 sm:p-7 hover:border-white/30 transition-all duration-300 shadow-xl group relative">
                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-light text-white/40 group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="p-3 w-fit rounded-xl bg-white/15 border border-white/20 mb-4">
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Reassurance footer */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/90 italic">
                    &ldquo;{step.reassurance}&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
