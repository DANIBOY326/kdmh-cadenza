import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyJoinSection } from "@/components/sections/WhyJoinSection";
import { CompetitionSection } from "@/components/sections/CompetitionSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ParticipateSection } from "@/components/sections/ParticipateSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { RegisterSection } from "@/components/sections/RegisterSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <CompetitionSection />
      <BenefitsSection />
      <ParticipateSection />
      <TestimonialsSection />
      <FaqSection />
      <RegisterSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
