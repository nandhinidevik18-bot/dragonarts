import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CategoriesSection } from "@/components/categories-section";
import { CoursesSection } from "@/components/courses-section";
import { FounderSection } from "@/components/founder-section";
import { TrialSection } from "@/components/trial-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <CoursesSection />
      <FounderSection />
      <TrialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
