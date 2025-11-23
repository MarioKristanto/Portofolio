import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project #1: Willyfy",
    description: "Willyfy - Music Streaming App UI/UX Case Study. Willyfy is a conceptual design project for a music streaming application aimed at providing a immersive listening journey. The design prioritizes ease of use, content discovery, and personalization.",
    technologies: ["Figma", "UI/UX", "User Research", "Prototyping"],
    github: "#",
    demo: "https://www.figma.com/proto/PJIHRfOeolXhNMUNCAabkO/willyfy-mario?node-id=3-799&p=f&t=6vTQB32t0iwzZpHp-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A799",
  },
  {
    title: "Team Project #2",
    description: "A web-based car rental information system. Features include user authentication (login & register), car data management (CRUD), and rental transaction processing. Built with native PHP and a MySQL database.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/MarioKristanto/Birent_Project",
    demo: "#",
  },
  {
    title: "Team Project #3",
    description: "A data science project focused on predicting stroke risk through various classification models. The process includes exploratory data analysis (EDA), data preprocessing (handling missing values, encoding), feature scaling, and model performance comparison. Developed with Python in a Jupyter Notebook environment.",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn"],
    github: "https://github.com/MarioKristanto/stroke_prediction",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold glow-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work in database
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group/btn border-border hover:border-primary hover:text-primary"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    GitHub Repo
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group/btn border-border hover:border-primary hover:text-primary"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
