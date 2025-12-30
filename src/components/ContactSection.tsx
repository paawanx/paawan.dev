import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-section">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Open to discussing new opportunities, interesting projects, or collaborations.
          </p>
        </div>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button size="lg" className="gap-3 px-8 h-14 text-base font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-shadow" asChild>
            <a href="mailto:paawan@paawan.dev">
              <Mail className="w-5 h-5" />
              paawan@paawan.dev
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-3 px-6 h-14 text-base font-medium hover:bg-accent transition-colors" asChild>
            <a
              href="https://linkedin.com/in/paawansrivastava"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-3 px-6 h-14 text-base font-medium" asChild>
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

        {/* Location */}
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-base font-medium">Canada · India · Remote</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
