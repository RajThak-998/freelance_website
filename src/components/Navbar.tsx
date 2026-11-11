"use client";

import React, { useState } from "react";
import { Hexagon, Menu, X } from "lucide-react";
import { Reveal } from "./Reveal";

const NAV_LINKS = [
  { name: "Impact", href: "#impact" },
  { name: "Services", href: "#services" },
  { name: "How We Work", href: "#process" },
  { name: "Trust & Proof", href: "#trust" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/15 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 sm:h-20 items-center justify-between px-5 sm:px-8 md:px-12">
        {/* Logo left: Hexagon + void */}
        <Reveal delay={0}>
          <a
            href="#"
            className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
          >
            <Hexagon size={24} strokeWidth={1.5} className="text-white" />
            <span className="text-lg sm:text-xl font-medium tracking-tight">
              void
            </span>
          </a>
        </Reveal>

        {/* Center nav links (hidden below lg) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {NAV_LINKS.map((link, idx) => (
            <Reveal key={link.name} delay={100 + idx * 70}>
              <a
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            </Reveal>
          ))}
        </nav>

        {/* Right CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Reveal delay={450}>
            <a
              href="#contact"
              className="rounded-md border border-white/20 bg-white/15 backdrop-blur-md px-4 py-2 text-xs sm:px-5 sm:text-sm text-white hover:bg-white/25 transition-all duration-300 whitespace-nowrap"
            >
              Get Free Consultation
            </a>
          </Reveal>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/15 bg-black/90 backdrop-blur-xl px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-white/80 hover:text-white transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
