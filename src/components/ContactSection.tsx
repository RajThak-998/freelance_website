"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    businessType: "Real Estate & Construction",
    serviceNeeded: "WhatsApp Bot & Lead Automation",
    bottleneck: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-32">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start justify-between mb-16 sm:mb-20">
        <div>
          <Reveal delay={100}>
            <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md mb-5 drop-shadow-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                Get In Touch • Fill The Void
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-lg max-w-2xl">
              Let&apos;s fill the void
              <br />
              in your business.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={300} className="max-w-md sm:text-right">
          <p className="text-base sm:text-lg leading-relaxed text-white/80 drop-shadow-md">
            You handle the business. We engineer the tech. We don&apos;t profit off your complexity — we grow along with you on your business journey.
          </p>
        </Reveal>
      </div>

      {/* Grid: Form on Left, Direct Connect on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Form Container (7 cols) */}
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    Audit Request Received
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, {formData.name || "there"}. A senior technical architect from void will review your requirements and reach out to you on WhatsApp/Phone within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-xs font-mono uppercase tracking-[0.12em] text-white hover:bg-white/20 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/50 focus:bg-white/10 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/50 focus:bg-white/10 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                        City / State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jaipur, Indore, Surat"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/50 focus:bg-white/10 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                        Business Industry
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) =>
                          setFormData({ ...formData, businessType: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-white/50 focus:outline-none transition-all"
                      >
                        <option value="Bank & Insurance Inspection">Third-Party Bank & Insurance Inspection</option>
                        <option value="Real Estate & Construction">Real Estate & Construction</option>
                        <option value="Distribution & Wholesale">Distribution, Logistics & Supply</option>
                        <option value="Retail & Showrooms">Retail & Multi-Branch Showrooms</option>
                        <option value="Healthcare & Diagnostics">Healthcare & Clinics</option>
                        <option value="Other Commercial Enterprise">Other Commercial Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceNeeded: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white focus:border-white/50 focus:outline-none transition-all"
                    >
                      <option value="Custom Business Software & ERP">Custom Internal Software & ERP</option>
                      <option value="WhatsApp Bot & Lead Automation">WhatsApp Automation & Smart Bots</option>
                      <option value="AI Web Sales Agent">24/7 AI Web Sales & Support Agent</option>
                      <option value="AI Voice Calling Agent">AI Voice Agent (Phone Call Attendant)</option>
                      <option value="Document & Bank Audit Automation">Document & Bank Inspection Pipeline</option>
                      <option value="High-Authority Business Website">High-Authority Business Website & Portfolio</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      What bottleneck is slowing down your business right now?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Our clerks take too long compiling field reports for banks, or we are losing customer inquiries after 8 PM on WhatsApp..."
                      value={formData.bottleneck}
                      onChange={(e) =>
                        setFormData({ ...formData, bottleneck: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/50 focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/85 transition-colors duration-300 shadow-lg cursor-pointer"
                  >
                    <span>Request Free 15-Minute Operational Audit</span>
                    <ChevronRight size={16} className="stroke-[2.5]" />
                  </button>

                  <p className="text-[11px] text-white/50 font-mono tracking-wide">
                    * 100% confidential. No spam, no sales pressure. Direct conversation with a lead engineer.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Direct Connect Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Reveal delay={300}>
            <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 sm:p-8 shadow-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full inline-block mb-4">
                Instant Direct Connect
              </span>

              <h3 className="text-xl sm:text-2xl font-medium text-white mb-3">
                Prefer a quick chat?
              </h3>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Skip the form entirely. Connect directly with our engineering team right on WhatsApp or phone.
              </p>

              <div className="space-y-4 mb-6">
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/919876543210?text=Hi%20void%20team,%20I'd%20like%20to%20discuss%20automation%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Chat on WhatsApp</div>
                      <div className="text-xs text-white/60">Typical reply: &lt; 15 mins</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>

                {/* Direct Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-between p-4 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/15 text-white border border-white/20">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">+91 98765 43210</div>
                      <div className="text-xs text-white/60">Direct Engineering Hotline</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:hello@voidstudio.in"
                  className="flex items-center justify-between p-4 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/15 text-white border border-white/20">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">hello@voidstudio.in</div>
                      <div className="text-xs text-white/60">Official Inquiry Desk</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>
              </div>

              {/* Service coverage */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-start gap-2 text-xs text-white/60">
                  <MapPin size={14} className="text-white/40 flex-shrink-0 mt-0.5" />
                  <span>
                    Direct on-ground support across Jaipur, Indore, Surat, Nagpur, Lucknow, Coimbatore, Vadodara, and emerging Tier 2/3 industrial hubs.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
