import { GraduationCap, Code, Cloud, Rocket, Brain } from "lucide-react";

const stats = [
  { value: "3.5+", label: "CGPA" },
  { value: "10+", label: "Research Projects" },
  { value: "20+", label: "Technical Skills" },
  { value: "3+", label: "Industry Internships" },
];

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Development",
    description: "Building intelligent applications with machine learning, data analysis, and predictive modeling using Python and TensorFlow.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React, Node.js, and modern frameworks.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on AWS with CI/CD pipelines and Docker.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Passionate about solving complex problems with elegant, scalable solutions combining AI and web technologies.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="glow-blob glow-blob-secondary absolute top-0 right-0 opacity-30" />
      
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Research-oriented student with strong foundation in artificial intelligence and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Education</h3>
                  <p className="text-sm text-muted-foreground">Air University Islamabad</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Bachelor of Science in Information Technology</strong>
                <br />
                2022 – 2026
                <br />
                <span className="text-xs">Relevant Coursework: Web Technologies, Virtual Systems and Services, DSA, Operating Systems, DevOps</span>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm Jawad Asif, a final-year Computer Science undergraduate at Air University Islamabad with a strong 
              academic foundation in artificial intelligence and machine learning. My research interests include 
              natural language processing, data mining, blockchain technology, and their applications in solving 
              real-world problems. I am passionate about advancing the field through rigorous research and innovative 
              system design.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Research Interests:</strong> Machine Learning, Natural Language Processing, 
              Data Mining & Feature Selection, Blockchain Technology, Sentiment Analysis, Predictive Analytics, and Intelligent Systems Design.
              <br /><br />
              My capstone project, <strong className="text-foreground">FundChain</strong>, demonstrates interdisciplinary research 
              integrating blockchain technology with ML-powered risk assessment models. I have developed multiple academic projects 
              in sentiment analysis, attribute reduction, and predictive modeling, showcasing both theoretical understanding and 
              practical implementation skills essential for advanced research.
            </p>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
