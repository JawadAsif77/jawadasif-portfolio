import { 
  Layout, 
  Code, 
  Server, 
  GitBranch, 
  Cloud, 
  Blocks,
  TrendingUp,
  Brain
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Full-Stack Web Development",
    description: "End-to-end web application development from concept to deployment, using modern frameworks and best practices.",
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Machine learning model development, data analysis, and AI integration for intelligent applications using Python, TensorFlow, and scikit-learn.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Beautiful, responsive user interfaces built with React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Robust server-side solutions with Node.js, Express, and database integration for scalable applications.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD Setup",
    description: "Automated deployment pipelines with Docker, GitLab CI/CD, and infrastructure as code.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment (AWS)",
    description: "Cloud infrastructure setup and management on AWS including EC2, S3, and other services.",
  },
  {
    icon: Blocks,
    title: "Blockchain Development",
    description: "Web3 applications and smart contract integration for decentralized platforms.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Lead generation and digital marketing campaigns for real estate and business growth.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="glow-blob glow-blob-secondary absolute bottom-0 right-1/4 opacity-20" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            What I can help you build
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
