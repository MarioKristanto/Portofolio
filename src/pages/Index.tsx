import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";

import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
