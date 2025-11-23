import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid-bg">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Name with glow effect */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight glow-text">
            John Doe
          </h1>

          {/* Title */}
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Backend & Smart Contract Developer
            </p>
            
            {/* Bio */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building robust blockchain solutions and scalable backend systems. 
              Passionate about decentralized technologies and clean, efficient code.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Decorative line */}
          <div className="pt-16 flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
