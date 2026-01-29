import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/jawad-profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-40" />
      
      {/* Gradient Blobs */}
      <div className="glow-blob glow-blob-primary absolute top-1/4 left-1/4 animate-float" />
      <div className="glow-blob glow-blob-secondary absolute bottom-1/4 right-1/4 animate-float delay-300" />
      
      {/* Content */}
      <div className="relative z-10 section-container text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img
                src={profileImage}
                alt="Jawad Asif"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up delay-100">
          Hello, I'm <span className="gradient-text">Jawad Asif</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in-up delay-200">
          Full-Stack Web Developer | React & DevOps | Building scalable, user-centric web applications with modern technologies
        </p>

        {/* Role Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up delay-300">
          <span className="skill-tag">React & Next.js</span>
          <span className="skill-tag">Node.js & Express</span>
          <span className="skill-tag">DevOps & CI/CD</span>
          <span className="skill-tag">AWS Cloud</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up delay-400">
          <Button variant="glow" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 animate-fade-in-up delay-500">
          <a
            href="https://github.com/JawadAsif77"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jawadasif77"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:asifjawad793@gmail.com"
            className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
