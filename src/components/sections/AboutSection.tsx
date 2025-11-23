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
            I'm a passionate blockchain developer with over 5 years of experience building secure, 
            scalable smart contracts and backend systems. My journey in tech started with traditional 
            web development, but I found my true calling in the decentralized world of blockchain technology.
          </p>

          <p className="text-muted-foreground">
            I specialize in developing DeFi protocols, NFT platforms, and cross-chain solutions using 
            Solidity, Rust, and modern backend frameworks. My approach combines deep technical expertise 
            with a strong focus on security, gas optimization, and user experience.
          </p>

          <p className="text-muted-foreground">
            When I'm not coding, you'll find me contributing to open-source projects, writing technical 
            articles, or exploring the latest developments in Web3. I believe in the power of 
            decentralized technology to create a more transparent and equitable digital future.
          </p>

          <div className="pt-8 border-t border-border">
            <p className="text-center text-muted-foreground italic">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
