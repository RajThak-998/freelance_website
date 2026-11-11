import { TechBackground } from "@/components/TechBackground";
import { Navbar } from "@/components/Navbar";
import { SectionOne } from "@/components/SectionOne";
import { ServicesSection } from "@/components/ServicesSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TrustSection } from "@/components/TrustSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-white selection:bg-white/20 selection:text-white">
      {/* Background layer with scroll-activated metallic NIRVYA brand transition */}
      <TechBackground />

      {/* Foreground Content Stack */}
      <div className="relative z-10">
        <Navbar />

        <main>
          {/* 1. Hero Section */}
          <SectionOne />

          {/* 2. Services Section (Moved before Demos as requested) */}
          <ServicesSection />

          {/* 3. Live Demos & Real-Life Impact */}
          <ImpactSection />

          {/* 4. How We Work (4-Step Timeline) */}
          <ProcessSection />

          {/* 5. Client Feedback & Trust Stats */}
          <TrustSection />

          {/* 6. Common Concerns & FAQ */}
          <FaqSection />

          {/* 7. Contact & Direct Connect */}
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </div>
  );
}
