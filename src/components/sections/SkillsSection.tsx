import { Badge } from "@/components/ui/badge";
import { Code2, Database, Blocks, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Blockchain",
    icon: Blocks,
    skills: ["Solidity", "Rust", "Hardhat", "Foundry", "ethers.js", "web3.js", "Subgraph", "IPFS"],
  },
  {
    title: "Database Services",
    icon: Code2,
    skills: ["Node.js", "Express", "TypeScript", "Python", "Go", "GraphQL", "REST APIs", "WebSockets"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Docker", "Git", "GitHub Actions", "AWS", "Vercel", "Jest", "Mocha"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">
            My Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="space-y-4 p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1.5 px-3 bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
