import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "FundChain",
    description:
      "A blockchain-based micro-investment platform built on Solana, featuring wallet integration, referral systems, and transparent fund management.",
    technologies: ["Solana", "React", "Web3.js", "Node.js", "MongoDB"],
    highlights: ["Blockchain integration", "Wallet connectivity", "Referral rewards"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "MERN Real-Time Scheduling App",
    description:
      "A comprehensive scheduling application with secure authentication, role-based access control, and real-time updates.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    highlights: ["40% booking efficiency improvement", "Role-based access", "Real-time sync"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Web with DevOps Pipeline",
    description:
      "Implemented a complete CI/CD pipeline using Docker and GitLab, drastically reducing deployment time and improving release reliability.",
    technologies: ["Docker", "GitLab CI/CD", "AWS EC2", "Nginx", "Shell"],
    highlights: ["<10 min deployments", "Automated testing", "Zero-downtime releases"],
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Tindog",
    description:
      "A fully responsive marketing website built with HTML, CSS, and Bootstrap, achieving perfect mobile performance scores.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    highlights: ["100% Lighthouse score", "Fully responsive", "Optimized assets"],
    color: "from-green-500/20 to-teal-500/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="glow-blob glow-blob-primary absolute top-1/4 left-0 opacity-20" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of projects showcasing my skills and problem-solving approach
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 grid-background opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground/30 group-hover:text-foreground/50 transition-colors">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                    View Details
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/JawadAsif77"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              View All Projects on GitHub
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
