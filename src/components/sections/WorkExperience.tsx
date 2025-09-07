import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Fullstack Developer",
    company: "NationWide",
    period: "2023 - FEB.2025",
    location: "Columbus | OH | United States",
    description: [
      "Built and maintained React + Node.js applications serving 100k+ monthly users.",
      "Migrated legacy frontend to React 19 + TypeScript, improving performance by 30%.",
      "Deployed apps using Docker + AWS ECS, reducing infrastructure costs by 20%."
    ],
    technologies: ["AWS", "Docker", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Fullstack Developer",
    company: "NationWide",
    period: "2021 - 2023",
    location: "Columbus | OH | United States",
    description: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Next", "Tailwindcss", "Vue"]
  },
  {
    title: "Backend Developer",
    company: "NationWide",
    period: "2018 - 2021",
    location: "Columbus | OH | United States",
    description: [
      "Designed and implemented REST APIs with JWT-based authentication.",
      "Constructed Rest API with Gin and Integrated it with React"
    ],
    technologies: ["Nest", "Django", "Gin/Fiber", "MongoDB", "Python", "Golang"]
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <Badge className="mb-4">Experience</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass p-6 hover:scale-105 transition-transform duration-300 animate-card-enter"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-sm text-primary">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;