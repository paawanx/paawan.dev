import { Briefcase, FileStack, Users, Zap, GitBranch } from "lucide-react";

const AboutSection = () => {
  const quickStats = [
    {
      icon: Briefcase,
      value: "9+",
      label: "Years",
      description: "Experience",
    },
    {
      icon: FileStack,
      value: "200K+",
      label: "Files",
      description: "Managed",
    },
    {
      icon: Users,
      value: "~15K",
      label: "Concurrent",
      description: "Users",
    },
    {
      icon: Zap,
      value: "40%",
      label: "Performance",
      description: "Gain",
    },
    {
      icon: GitBranch,
      value: "5",
      label: "CI/CD Pipelines",
      description: "Automated",
    },
  ];

  return (
    <section id="about" className="section-padding bg-section">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">About</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Engineering Excellence
          </h2>
        </div>

        {/* About content */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground/90">
              Senior Software Engineer with <span className="text-primary font-semibold">9+ years</span> of experience building 
              enterprise-grade applications across education, engineering, and document management domains.
            </p>
            <p>
              I specialize in <span className="text-foreground font-medium">Clean Architecture, CQRS, and modular system design</span> with 
              deep expertise in <span className="text-foreground font-medium">SQL performance engineering</span> and full-stack development 
              using <span className="text-foreground font-medium">.NET Core + Angular</span>.
            </p>
            <p>
              From architecting BIM systems processing <span className="text-foreground font-medium">200K+ engineering drawings</span> to 
              building admission portals serving <span className="text-foreground font-medium">10K–15K concurrent users</span>, I deliver scalable, 
              maintainable solutions that perform under pressure.
            </p>
            <p>
              Key achievements include <span className="text-foreground font-medium">40% SQL performance improvements</span>, optimizing 
              backend jobs from <span className="text-foreground font-medium">~10 minutes to under 1 minute</span>, and building 
              <span className="text-foreground font-medium"> 5 CI/CD pipelines</span> for automated deployments.
            </p>
            <p>
              Experienced in global collaboration across <span className="text-foreground font-medium">India, Ireland, UK, Romania, and the US</span>, 
              working with distributed teams to deliver reliable, production-grade software.
            </p>
          </div>
        </div>

        {/* Section divider */}
        <div className="section-divider mb-14" />

        {/* Quick Stats */}
        <div>
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {quickStats.map((stat) => (
              <div key={stat.label} className="stat-card text-center group">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-4 transition-transform group-hover:scale-110" />
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
