const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">
            About Me
          </h2>
        </div>

        {/* About Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground/90">
            I am a fifth-semester Information Technology student at Bina Nusantara University with a
            strong passion for Data Analysis. Through my academic projects and active participation
            in campus organizations, I have cultivated essential skills in collaboration, problem-solving,
            and time management. I am currently seeking an internship opportunity where I can apply
            my analytical skills and contribute to real-world projects in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
