import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Code,
  Palette,
  Globe,
  Database,
  Star
} from "lucide-react";
import WorkExperience from "@/components/sections/WorkExperience";

import logo from '../../public/logo.png';

const skills = [
  { name: "Frontend Development", icon: <Code className="h-6 w-6" />, description: "React, TypeScript, Tailwind CSS" },
  { name: "UI/UX Design", icon: <Palette className="h-6 w-6" />, description: "Figma, Adobe XD" },
  { name: "Backend Development", icon: <Database className="h-6 w-6" />, description: "Node.js, Python, MongoDB, Golang" },
  { name: "Core Web Technologies", icon: <Globe className="h-6 w-6" />, description: "WebGL, Docker, AWS" }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Tech Lead at Google",
    content: "One of the most talented developers I've worked with. Their attention to detail is remarkable.",
    rating: 5
  },
  {
    name: "Sarah Smith",
    role: "Senior Designer at Apple",
    content: "Exceptional problem-solving skills and a great eye for design. A true professional.",
    rating: 5
  },
  {
    name: "Mike Johnson",
    role: "CTO at Startup",
    content: "Delivers high-quality work consistently. Would highly recommend for any project.",
    rating: 5
  }
];

const Index = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center section-padding relative">
        <Badge className="mb-4 animate-fade-in" variant="secondary">
          Available for hire
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
          Fullstack Developer With
        </h1>
        <h1 className="my-4 text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
          Creative Thinking
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 max-w-2xl animate-fade-in">
          Optimize Life & Code Both | Not Money But Dream
        </p>
        <div className="flex gap-4 mb-12 animate-fade-in">
          <Button asChild variant="default">
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#projects" onClick={scrollToProjects}>
              View Work
            </a>
          </Button>
        </div>
        <div className="flex gap-4 animate-fade-in">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce h-6 w-6" />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Seeking For Opportunity</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I have worked as a Full Stack Developer <span className="text-2xl">7+</span> years of experience building
            scalable web applications and RESTful APIs.
            Skilled in React.js, Node.js, TypeScript, and SQL/NoSQL databases. Passionate
            about clean code, performance optimization, and delivering exceptional user
            experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="glass p-6 text-left animate-card-enter [animation-delay:200ms]">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-muted-foreground">B.S. in Computer Science<br />NEW YORK UNIVERCITY</p>
            </Card>
            <Card className="glass p-6 text-left animate-card-enter [animation-delay:400ms]">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <p className="text-muted-foreground">Senior Fullstack Developer<br />NationWide.com</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <WorkExperience />

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-4">Skills</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="glass p-6 hover:scale-105 transition-transform duration-300 animate-card-enter"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="mb-4 text-primary">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-4">Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project, index) => (
              <Card
                key={project}
                className="glass group overflow-hidden hover:scale-105 transition-transform duration-300 animate-card-enter"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="p-6">
                  <Badge className="mb-4" variant="secondary">Featured Project</Badge>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Project Title {project}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass p-6 hover:scale-105 transition-transform duration-300 animate-card-enter flex flex-col"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">{testimonial.content}</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Get in Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <Button asChild size="lg">
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Send me an email
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding bg-background border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-muted-foreground mt-2">
            Made by Voyager.dev
          </p>
          <section className="flex justify-center pt-8">
            <img className="w-20 h-20 animate-bounce" src='/logo.png' />
          </section>
        </div>
      </footer>
    </main>
  );
};

export default Index;
