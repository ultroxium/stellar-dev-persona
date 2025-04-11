
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-20"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">Full-Stack Developer</span> & AI Enthusiast
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              I build powerful, user-friendly web applications and leverage machine learning to solve complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
                alt="Developer profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
