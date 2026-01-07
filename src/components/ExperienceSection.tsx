import { CheckCircle, Building2, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Techbit Solutions",
      period: "2021 – Present",
      tech: ".NET Core, Angular, SQL Server, Azure DevOps, Hangfire, Docker",
      achievements: [
        "Architected BIM drawing management system processing 200K+ engineering drawings with automated DWG→PDF conversion, versioning, and BIM 360 integration",
        "Optimized critical backend job from ~10 minutes to under 1 minute through parallelism and SQL query optimization",
        "Delivered 40% SQL performance improvement across production queries via indexing strategies and query refactoring",
        "Built 5+ CI/CD pipelines using Azure DevOps for automated multi-environment deployments",
        "Designed REST APIs using Clean Architecture and CQRS patterns for maintainability and testability",
        "Integrated secure authentication flows using Azure AD and SSO for enterprise applications",
        "Published reusable Angular SDK for BIM 360 Viewer as NPM package, adopted across multiple internal applications",
        "Modernized legacy applications from .NET Framework to .NET Core 6 and Angular 15",
        "Mentored junior developers on architecture patterns, testing practices, and code review standards",
      ],
    },
    {
      role: "Software Engineer",
      company: "Lovely Infotech",
      period: "2016 – 2021",
      tech: "ASP.NET MVC, jQuery, SQL Server, Angular, Docker, SignalR, AWS S3",
      achievements: [
        "Contributed to admission portal supporting ~15K concurrent users during peak enrollment periods",
        "Built multi-tenant university ERP modules for SMVDCoN and Jaipur University including student management, grievances, and announcements",
        "Developed dynamic form builder with Angular and .NET Core, deployed via Docker for customizable data collection workflows",
        "Implemented travel expense management module with approval workflows and receipt processing",
        "Created event management system for university activities with registration and attendance tracking",
        "Designed and deployed internal URL shortener service for marketing and communications teams",
        "Migrated legacy WebForms applications to modern ASP.NET MVC and Angular stack",
        "Maintained both on-premise and cloud multi-tenant deployments for university clients",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-section" aria-labelledby="experience-heading">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Career</p>
          <h2 id="experience-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="premium-card p-7 md:p-9"
            >
              {/* Role header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <p className="text-sm font-mono text-muted-foreground bg-muted/50 px-4 py-2.5 rounded-lg inline-block">
                  {exp.tech}
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
