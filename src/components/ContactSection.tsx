"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";
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
    <section id="contact" className="relative px-4 sm:px-8 md:px-12 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start justify-between mb-12 sm:mb-16">
        <div>
          <Reveal delay={80}>
            <div className="inline-block border-l-2 border-white bg-white/10 px-3 py-1.5 backdrop-blur-md mb-4 drop-shadow-md">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white">
                Get In Touch • Direct Architecture
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-tight text-white drop-shadow-lg max-w-2xl">
              Let&apos;s build your
              <br />
              technical edge.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={200} className="max-w-md sm:text-right">
          <p className="text-sm sm:text-base leading-relaxed text-white/75 drop-shadow-md">
            You handle the business. We engineer the tech. We don&apos;t profit off your complexity — we grow along with you on your operational journey.
          </p>
        </Reveal>
      </div>

      {/* Grid: Form on Left, Direct Connect on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Form Container (7 cols) */}
        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="rounded-2xl border border-white/10 bg-[#0c0c12]/70 backdrop-blur-xl p-5 sm:p-9 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    Audit Request Received
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, {formData.name || "there"}. A lead technical architect from NIRVYA will review your requirements and reach out to you on WhatsApp/Phone within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-mono uppercase tracking-[0.12em] text-white hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
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
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/40 focus:bg-white/[0.07] focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
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
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/40 focus:bg-white/[0.07] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
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
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/40 focus:bg-white/[0.07] focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                        Business Industry
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) =>
                          setFormData({ ...formData, businessType: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-[#111116] px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none transition-all"
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
                    <label className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceNeeded: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#111116] px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none transition-all"
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
                    <label className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      What bottleneck is slowing down your business right now?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Our clerks take too long compiling field reports for banks, or we are losing customer inquiries after 8 PM on WhatsApp..."
                      value={formData.bottleneck}
                      onChange={(e) =>
                        setFormData({ ...formData, bottleneck: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-white/40 focus:bg-white/[0.07] focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm uppercase tracking-[0.1em] font-medium text-black hover:bg-white/85 transition-colors duration-200 shadow-xl cursor-pointer"
                  >
                    <span>Request Free 15-Minute Operational Audit</span>
                    <ChevronRight size={15} className="stroke-[2.5]" />
                  </button>

                  <p className="text-[11px] text-white/40 font-mono tracking-wide">
                    * 100% confidential. No spam, no sales pressure. Direct conversation with a lead NIRVYA engineer.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Direct Connect Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <Reveal delay={250}>
            <div className="rounded-2xl border border-white/10 bg-[#0c0c12]/70 backdrop-blur-xl p-5 sm:p-7 shadow-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full inline-block mb-4">
                Instant Direct Connect
              </span>

              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2.5">
                Prefer a quick chat?
              </h3>

              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-5">
                Skip the form entirely. Connect directly with our lead engineering team right on WhatsApp or phone.
              </p>

              <div className="space-y-3.5 mb-5">
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/919876543210?text=Hi%20NIRVYA%20team,%20I'd%20like%20to%20discuss%20tech%20and%20automation%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium">Chat on WhatsApp</div>
                      <div className="text-[11px] text-white/50">Typical reply: &lt; 15 mins</div>
                    </div>
                  </div>
                  <ChevronRight size={15} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>

                {/* Direct Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-white border border-white/15">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium">+91 98765 43210</div>
                      <div className="text-[11px] text-white/50">Direct Engineering Hotline</div>
                    </div>
                  </div>
                  <ChevronRight size={15} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:contact@nirvya.agency"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-white border border-white/15">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium">contact@nirvya.agency</div>
                      <div className="text-[11px] text-white/50">Official Inquiry Desk</div>
                    </div>
                  </div>
                  <ChevronRight size={15} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>
              </div>

              {/* Service coverage */}
              <div className="pt-3.5 border-t border-white/10">
                <div className="flex items-start gap-2 text-xs text-white/55">
                  <MapPin size={13} className="text-white/40 flex-shrink-0 mt-0.5" />
                  <span>
                    Direct on-ground support across Jaipur, Indore, Surat, Nagpur, Lucknow, Coimbatore, Vadodara, and emerging industrial hubs.
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
