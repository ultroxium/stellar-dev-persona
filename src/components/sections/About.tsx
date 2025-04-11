
import {
  Brain,
  Code,
  Database,
  Server,
  PenTool,
  Sparkles,
} from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "FastAPI"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] },
  { category: "Others", items: ["REST APIs", "GraphQL", "Temporal", "WebSockets", "Microservices"] },
];

export function About() {
  return (
    <section id="about" className="bg-secondary section-spacing">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="text-lg mb-6">
              I'm a passionate full-stack developer with expertise in building scalable web applications 
              and exploring the frontiers of artificial intelligence and machine learning.
            </p>
            <p className="text-lg mb-6">
              With over 5 years of experience in software development, I've worked on diverse projects 
              from e-commerce platforms to AI-powered recommendation systems. I believe in writing clean, 
              maintainable code and creating intuitive user experiences.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy sharing my knowledge through technical articles, contributing 
              to open-source projects, and staying updated with the latest technology trends.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Full-Stack Development
              </h3>
              <p className="text-muted-foreground">
                Building responsive web applications with modern tech stacks.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Brain className="mr-2 h-5 w-5 text-primary" />
                AI/ML Engineering
              </h3>
              <p className="text-muted-foreground">
                Creating intelligent systems and models for real-world problems.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Server className="mr-2 h-5 w-5 text-primary" />
                Backend Architecture
              </h3>
              <p className="text-muted-foreground">
                Designing robust, scalable backend services and APIs.
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mt-16 mb-8">Technical Skills</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-4">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
