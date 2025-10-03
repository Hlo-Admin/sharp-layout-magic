import heroPattern from "@/assets/banner-bg.jpg";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-96 overflow-hidden mx-4 my-8 px-4 py-4">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${heroPattern})` }}
      >
        <div className="absolute inset-0" />
      </div>

      <div className="container mx-auto px-6 h-full relative z-10">
        {/* Navigation inside hero */}
        <nav className="bg-[#487b99] text-primary-foreground rounded-lg shadow-lg backdrop-blur-sm mb-8">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between h-12">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-foreground rounded-sm flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">GK</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-sm">GO KITE PRO</span>
                  <span className="text-xs opacity-80">BUSINESS & SETUP</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:flex items-center gap-8">
                <a
                  href="#business-setup"
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  Business Setup
                </a>
                <a
                  href="#services"
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  Our Services
                </a>
                <a
                  href="#about"
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  Contact Us
                </a>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4">
                <Button variant="secondary" size="sm" className="font-semibold">
                  COST CALCULATOR
                </Button>
                <button className="flex items-center gap-1 text-sm hover:opacity-80">
                  <Globe className="w-4 h-4" />
                  <span>EN</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col justify-start pt-8 max-w-2xl">
          <div className="text-primary-foreground">
            <p className="text-sm mb-2 opacity-90">
              Home » MAINLAND COMPANY FORMATION
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Mainland Business Setup
            </h1>
            <p className="text-sm opacity-90">CUSTOMIZED & AFFORDABLE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
