
import { Download, Briefcase, School, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock experience data
const experiences = [
  {
    title: "Senior Full-stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading the development of web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
  },
  {
    title: "Machine Learning Engineer",
    company: "AI Solutions",
    period: "2020 - 2022",
    description:
      "Developed and deployed machine learning models for various business applications. Worked with TensorFlow and PyTorch to create computer vision solutions.",
  },
  {
    title: "Front-end Developer",
    company: "WebCraft Studios",
    period: "2018 - 2020",
    description:
      "Built responsive websites and web applications using React and Vue.js. Collaborated with designers to implement pixel-perfect UIs.",
  },
];

// Mock education data
const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "Tech University",
    period: "2016 - 2018",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Neural Networks for Natural Language Processing'.",
  },
  {
    degree: "B.S. in Computer Science",
    institution: "State University",
    period: "2012 - 2016",
    description:
      "Graduated with honors. Completed coursework in data structures, algorithms, web development, and database systems.",
  },
];

export function Resume() {
  return (
    <section id="resume" className="bg-secondary section-spacing">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="section-title mb-4 md:mb-0">Resume</h2>
          <Button size="lg" className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-border"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary transform -translate-x-[5px]"></div>
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-primary font-medium">{exp.company}</p>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <School className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-border"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary transform -translate-x-[5px]"></div>
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
