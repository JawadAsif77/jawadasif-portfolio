import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI/ML & Blockchain Developer - Final Year Project",
    company: "FundChain (Academic Project)",
    location: "Air University, Islamabad",
    period: "January 2026 – Present",
    description: [
      "Developing blockchain-based micro-investment platform using Solana and Web3 technologies",
      "Implementing ML models for risk assessment and investment predictions using Python and TensorFlow",
      "Building full-stack application with React, Node.js, and MongoDB for user management",
      "Integrating smart contracts for transparent and secure fund management",
    ],
  },
  {
    title: "Digital Marketing & Lead Generation",
    company: "MGC Developments",
    location: "Islamabad",
    period: "April 2025",
    description: [
      "Generated qualified leads via Meta Ads, Google Ads, and LinkedIn outreach",
      "Designed real estate investment campaigns targeting potential investors",
      "Optimized ads through keyword research and social media analysis to improve ROI",
    ],
  },
  {
    title: "MERN Stack Intern",
    company: "Algoryte",
    location: "Remote",
    period: "June 2024 – August 2024",
    description: [
      "Developed and maintained MERN-based web application features",
      "Integrated MongoDB databases with Express.js backend services",
      "Fixed bugs and implemented Git-based workflows in Agile environment",
    ],
  },
  {
    title: "Web Development Volunteer",
    company: "Air University",
    location: "Islamabad",
    period: "May 2023 – September 2023",
    description: [
      "Built responsive web applications using HTML, CSS, JavaScript, and React",
      "Collaborated with team members on project planning and implementation",
      "Gained hands-on experience in modern web development practices",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="glow-blob glow-blob-secondary absolute top-1/2 right-0 opacity-20" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My professional journey and contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
