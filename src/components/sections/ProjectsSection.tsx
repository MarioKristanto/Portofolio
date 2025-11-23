import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DeFi Lending Protocol",
    description: "A decentralized lending platform built on Ethereum with automated interest rates and collateralization.",
    technologies: ["Solidity", "Hardhat", "ethers.js", "React", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "NFT Marketplace Backend",
    description: "Scalable backend infrastructure for an NFT marketplace with real-time bidding and IPFS integration.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "WebSockets"],
    github: "#",
    demo: "#",
  },
  {
    title: "Token Staking Platform",
    description: "Smart contract system for token staking with flexible reward mechanisms and governance features.",
    technologies: ["Solidity", "Foundry", "TypeScript", "Subgraph", "GraphQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Cross-Chain Bridge",
    description: "Secure bridge protocol enabling asset transfers between multiple blockchain networks.",
    technologies: ["Solidity", "Rust", "Cosmos SDK", "Go", "PostgreSQL"],
    github: "#",
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
            A selection of my recent work in blockchain development and backend systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
