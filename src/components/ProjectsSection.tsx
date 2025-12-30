import { Star, ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  details: string;
  tech: string[];
  featured: boolean;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "BIM Drawing Management System",
      description:
        "Enterprise platform managing 200K+ engineering drawings with automated DWG→PDF conversion, versioning, and BIM 360 integration.",
      details:
        "Architected a comprehensive document management system handling 200K+ engineering drawings with real-time DWG→PDF conversion, multi-file stitching, metadata extraction, and version control. Integrated with Autodesk BIM 360 for seamless model viewing. Built custom dashboards for project managers and implemented CI/CD pipelines for reliable deployments. Optimized backend processing from ~10 minutes to under 1 minute.",
      tech: [".NET Core", "Angular", "Hangfire", "SQL Server", "Azure"],
      featured: true,
    },
    {
      title: "Multi-Tenant Student ERP",
      description:
        "Enterprise ERP system for universities including admissions, student management, grievances, and announcements with multi-tenant architecture.",
      details:
        "Designed and implemented multi-tenant architecture supporting both on-premise and shared cloud deployments for SMVDCoN and Jaipur University. Built comprehensive modules handling student lifecycle management, real-time notifications via SignalR, and role-based dashboards. System supports complex workflows for admissions, grievances, access control, and campus-wide announcements.",
      tech: ["ASP.NET MVC", "SQL Server", "SignalR", "Angular"],
      featured: true,
    },
    {
      title: "Admission Portal",
      description:
        "High-load university admission system supporting ~15K concurrent users during peak enrollment with real-time form submission and payment processing.",
      details:
        "Built scalable admission portal handling ~15K concurrent users during peak enrollment periods. Implemented robust form validation, document uploads, payment gateway integration, and real-time application status tracking. Optimized SQL queries and implemented caching strategies to maintain performance under heavy load. Deployed with load balancing for high availability.",
      tech: ["ASP.NET MVC", "SQL Server", "AWS S3", "SignalR"],
      featured: true,
    },
    {
      title: "Angular BIM 360 Viewer SDK",
      description:
        "Reusable Angular SDK for Autodesk BIM 360 model viewing, published as NPM package and adopted across internal applications.",
      details:
        "Developed a plug-and-play Angular wrapper for Autodesk's BIM 360 Viewer, abstracting complex API integrations into simple, reusable components. Published to internal NPM registry and adopted by multiple teams for consistent BIM visualization across projects. Includes custom toolbar extensions, markup tools, and model navigation controls.",
      tech: ["Angular", "TypeScript", "NPM", "Autodesk API"],
      featured: true,
    },
    {
      title: "Dynamic Form Builder & Renderer",
      description:
        "Internal platform for creating custom forms with drag-and-drop interface, role-based access, validation rules, and workflow automation.",
      details:
        "Built a Google Forms-style application enabling non-technical users to create complex forms with conditional logic, file uploads, and approval workflows. Features include drag-and-drop form designer, real-time preview, custom validation rules, and data export capabilities. Deployed via Docker containers with .NET Core backend and Angular frontend.",
      tech: ["Angular", ".NET Core", "SQL Server", "Docker"],
      featured: true,
    },
    {
      title: "Travel Expense Management Module",
      description:
        "Comprehensive expense tracking system with approval workflows, receipt processing, reimbursement calculations, and reporting.",
      details:
        "Developed end-to-end travel expense management module for university staff with multi-level approval workflows. Features include expense categorization, receipt upload and validation, automatic reimbursement calculations based on policy rules, and comprehensive reporting for finance teams. Integrated with existing ERP system for seamless data flow.",
      tech: ["ASP.NET MVC", "SQL Server", "jQuery", "Crystal Reports"],
      featured: false,
    },
    {
      title: "URL Shortener Service",
      description:
        "Internal URL shortening service for marketing and communications with analytics, custom aliases, and QR code generation.",
      details:
        "Designed and deployed internal URL shortener service for university marketing and communications teams. Features include custom short aliases, click analytics with geographic data, QR code generation, link expiration, and campaign tracking. Built with high-performance caching for fast redirects and detailed usage statistics.",
      tech: [".NET Core", "SQL Server", "Redis", "Angular"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group premium-card p-7 md:p-8 flex flex-col text-left h-full hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="flex items-center gap-2 mb-5">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Featured</span>
                </div>
              )}

              {/* Title with hover icon */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Project details modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Featured Project</span>
              </div>
              <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed pt-4">
                {selectedProject?.details}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-4">
              {selectedProject?.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium bg-badge text-badge-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
