"use client";

import React, { useState } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { NirvyaLogo } from "./NirvyaLogo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050507]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8 md:px-12 max-w-7xl">
        {/* Left Nav Links (Services first) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 flex-1">
          <a
            href="#services"
            className="text-xs sm:text-sm uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#demos"
            className="text-xs sm:text-sm uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors duration-200"
          >
            Demos
          </a>
          <a
            href="#process"
            className="text-xs sm:text-sm uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors duration-200"
          >
            Process
          </a>
        </nav>

        {/* Center Brand Identity: ALWAYS visible right from the start */}
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="hover:opacity-90 transition-opacity flex items-center justify-center py-1"
          >
            <NirvyaLogo size="sm" showSubtitle={false} />
          </a>
        </div>

        {/* Right Nav Links & Actions (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-8 lg:gap-10 flex-1">
          <a
            href="#trust"
            className="text-xs sm:text-sm uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors duration-200"
          >
            Cases
          </a>
          <a
            href="#faq"
            className="text-xs sm:text-sm uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors duration-200"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-[0.16em] text-white hover:text-white/80 transition-colors duration-200 border-b border-white/30 pb-0.5"
          >
            <span>Contact</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="text-[11px] uppercase tracking-[0.14em] text-white/90 border border-white/20 bg-white/5 px-3 py-1.5 rounded-full"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white focus:outline-none rounded-lg border border-white/10 bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#09090e]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors py-1.5"
          >
            Services
          </a>
          <a
            href="#demos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors py-1.5"
          >
            Live Demos & Impact
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors py-1.5"
          >
            How We Work
          </a>
          <a
            href="#trust"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors py-1.5"
          >
            Case Studies
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors py-1.5"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors py-1.5"
          >
            Contact Us
          </a>

          <div className="pt-3 mt-1 border-t border-white/10">
            <a
              href="https://wa.me/919876543210?text=Hi%20NIRVYA%20team,%20I'd%20like%20to%20discuss%20tech%20and%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-3 text-xs uppercase tracking-[0.15em] font-medium text-white"
            >
              <MessageCircle size={15} />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
