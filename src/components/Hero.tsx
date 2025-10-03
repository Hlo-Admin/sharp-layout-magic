import heroPattern from "@/assets/hero-pattern.jpg";

const Hero = () => {
  return (
    <section className="relative h-64 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPattern})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <div className="text-primary-foreground">
            <p className="text-sm mb-2 opacity-90">
              Home » MAINLAND COMPANY FORMATION
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Mainland Business Setup
            </h1>
            <p className="text-sm opacity-90">
              CUSTOMIZED & AFFORDABLE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
