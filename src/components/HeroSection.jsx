import { ChevronDown } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <StarBackground />

      <div className="container max-w-4xl mx-auto text-center z-10 space-y-6">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="block opacity-0 animate-fade-in">
            Hi, I'm{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Akhil V
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-muted-foreground font-medium opacity-0 animate-fade-in-delay-2">
          React.js & Frontend Developer
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I specialize in building elegant, responsive web interfaces using
          React, JavaScript, and modern UI frameworks. With a passion for clean
          code and smooth user experiences, I transform complex problems into
          intuitive digital solutions.
        </p>

        {/* CTA */}
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button text-forground font-medium">
            View My Work
          </a>
        </div>
      </div>

      {/* Modern Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center group">
        <span className="text-xs text-muted-foreground mb-1 opacity-70">
          Scroll
        </span>
        <ChevronDown
          className="h-6 w-6 text-primary transition-transform group-hover:translate-y-1 animate-bounce"
          strokeWidth={2}
        />
      </div>
    </section>
  );
};
