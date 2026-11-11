import { ScrollVideo } from "@/components/ScrollVideo";
import { Navbar } from "@/components/Navbar";
import { SectionOne } from "@/components/SectionOne";
import { ImpactSection } from "@/components/ImpactSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TrustSection } from "@/components/TrustSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-white/20 selection:text-white">
      {/* Scroll-scrubbed background video */}
      <ScrollVideo />

      {/* Foreground Content Stack */}
      <div className="relative z-10">
        <Navbar />

        <main>
          {/* Hero Section */}
          <SectionOne />

          {/* 1. Real-Life Impact / Daily Solutions */}
          <ImpactSection />

          {/* 2. Outcome-Focused Services */}
          <ServicesSection />

          {/* 3. How We Work (4-Step Timeline) */}
          <ProcessSection />

          {/* 4. Client Feedback & Trust Stats */}
          <TrustSection />

          {/* 5. Common Concerns & FAQ */}
          <FaqSection />

          {/* 6. Contact & Direct Connect */}
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </div>
  );
}
