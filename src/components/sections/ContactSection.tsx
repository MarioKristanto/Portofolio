import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const email = "mariokriss99@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "The email address has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        {/* Email */}
        <div className="mb-12 flex flex-col items-center gap-4">
          <p className="text-xl text-foreground font-medium">{email}</p>
          <Button
            variant="outline"
            size="lg"
            onClick={copyEmail}
            className="group border-border hover:border-primary hover:text-primary"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-5 w-5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Copy Email
              </>
            )}
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="group border-border hover:border-primary hover:text-primary"
            asChild
          >
            <a href="https://www.linkedin.com/in/mario-kristanto" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group border-border hover:border-primary hover:text-primary"
            asChild
          >
            <a href="https://github.com/MarioKristanto" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </Button>


        </div>
      </div>
    </section>
  );
};

export default ContactSection;
