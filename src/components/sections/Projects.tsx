
import { Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock projects data
const projects = [
  {
    id: 1,
    title: "AI Image Generator",
    description: "A web application that uses machine learning to generate images from text descriptions.",
    image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg",
    tags: ["React", "TypeScript", "Python", "TensorFlow", "FastAPI"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    tags: ["Next.js", "MongoDB", "Node.js", "Stripe", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Sentiment Analysis API",
    description: "REST API that analyzes text input and determines sentiment using natural language processing.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    tags: ["Python", "FastAPI", "NLP", "Docker", "AWS Lambda"],
    github: "https://github.com",
    demo: null,
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates and team collaboration features.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["React", "Firebase", "Material UI", "WebSockets", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Here are some of my recent projects that showcase my skills and experience. Each project reflects my passion for building innovative solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
