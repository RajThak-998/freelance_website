"use client";

import React from "react";
import { Hexagon, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/15 bg-black/50 backdrop-blur-md px-5 sm:px-8 md:px-12 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
        {/* Brand left */}
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <Hexagon size={22} strokeWidth={1.5} className="text-white" />
            <span className="text-xl font-medium tracking-tight text-white">
              void
            </span>
          </div>
          <p className="text-xs text-white/60 max-w-sm">
            Filling the technical void for ambitious businesses in Tier 2 & Tier 3 cities.
            You handle the business. We engineer the tech.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-white/70">
          <a href="#impact" className="hover:text-white transition-colors">
            Impact
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            How We Work
          </a>
          <a href="#trust" className="hover:text-white transition-colors">
            Trust & Proof
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Scroll back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="p-3 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 transition-all text-white/80 hover:text-white flex items-center gap-2 text-xs font-mono uppercase tracking-[0.12em]"
        >
          <span>Top</span>
          <ArrowUp size={14} />
        </button>
      </div>

      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
        <div>
          © 2026 void studio. All rights reserved.
        </div>
        <div>
          Zero Bloatware • 100% Practical Automation
        </div>
      </div>
    </footer>
  );
}
