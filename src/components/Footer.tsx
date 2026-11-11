"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { NirvyaLogo } from "./NirvyaLogo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050507]/90 backdrop-blur-xl px-4 sm:px-8 md:px-12 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
        {/* Brand left */}
        <div className="space-y-2">
          <NirvyaLogo size="md" showSubtitle={true} />
          <p className="text-xs text-white/50 max-w-sm pt-1">
            The dedicated technical agency for ambitious enterprises.
            You handle the business. We engineer the tech.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.15em] text-white/70">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#demos" className="hover:text-white transition-colors">
            Demos
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            Process
          </a>
          <a href="#trust" className="hover:text-white transition-colors">
            Cases
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
          className="p-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/25 transition-all text-white/80 hover:text-white flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] cursor-pointer"
        >
          <span>Top</span>
          <ArrowUp size={14} />
        </button>
      </div>

      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
        <div>
          © 2026 NIRVYA AGENCY. All rights reserved.
        </div>
        <div>
          Engineered for High-Growth Enterprises
        </div>
      </div>
    </footer>
  );
}
