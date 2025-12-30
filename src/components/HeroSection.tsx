import { FileDown, Linkedin, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from '../assets/images/profile_picture.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col pt-20 relative overflow-hidden">
      {/* Subtle background gradient with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Main content - centered vertically */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container-wide text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Headshot */}
            <div className="opacity-0 animate-fade-in">
              <div className="w-36 h-36 md:w-40 md:h-40 mx-auto rounded-full border-2 border-primary/30 shadow-lg shadow-primary/10 overflow-hidden">
                <img 
                  src={profilePicture} 
                  alt="Paawan Srivastava" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and title */}
            <div className="space-y-5 opacity-0 animate-fade-in animation-delay-100">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                Paawan Srivastava
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-primary">Senior Software Engineer</span>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Full Stack .NET • C# • .NET Core • Angular • Azure Cloud • System Design
              </p>
            </div>

            {/* Tagline */}
            <div className="space-y-3 opacity-0 animate-fade-in animation-delay-200">
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Designing enterprise systems using .NET Core, Angular, SQL Server, and Azure.
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Performance engineering · CI/CD automation · Legacy modernization
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 opacity-0 animate-fade-in animation-delay-300">
              <Button size="lg" className="gap-2 px-6 h-12 text-base font-semibold shadow-lg shadow-primary/20" asChild>
                <a href="/resume/Paawan_Srivastava_Senior_Software_Engineer.pdf" download>
                  <FileDown className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 px-6 h-12 text-base font-medium" asChild>
                <a
                  href="https://linkedin.com/in/paawansrivastava"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 px-6 h-12 text-base font-medium" asChild>
                <a
                  href="https://github.com/paawanx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom with proper spacing */}
      <div className="pb-8 opacity-0 animate-fade-in animation-delay-500">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs font-medium tracking-widest uppercase mb-2">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
