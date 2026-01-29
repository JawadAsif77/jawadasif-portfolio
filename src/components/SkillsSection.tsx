import { Code, Server, Cloud, Wrench, Users, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "Responsive UI", "REST APIs"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT Authentication", "GraphQL"],
  },
  {
    icon: Brain,
    title: "AI/ML & Data Science",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Data Analysis", "Machine Learning"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: ["Docker", "GitLab CI/CD", "AWS EC2", "AWS S3", "Kubernetes", "Linux"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "Visual Studio", "GitHub", "GitLab", "AWS CLI", "Postman", "Figma", "Jupyter"],
  },
  {
    icon: Users,
    title: "Other",
    skills: ["Blockchain (Solana)", "Microservices", "Agile/Scrum", "REST Architecture", "Web3"],
  },
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Adaptability",
  "Leadership",
  "Problem Solving",
  "Time Management",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="glow-blob glow-blob-primary absolute bottom-0 left-1/4 opacity-30" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-foreground hover:border-primary/50 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
