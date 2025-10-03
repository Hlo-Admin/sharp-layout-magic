import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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
            <a href="#business-setup" className="text-sm hover:opacity-80 transition-opacity">
              Business Setup
            </a>
            <a href="#services" className="text-sm hover:opacity-80 transition-opacity">
              Our Services
            </a>
            <a href="#about" className="text-sm hover:opacity-80 transition-opacity">
              About Us
            </a>
            <a href="#contact" className="text-sm hover:opacity-80 transition-opacity">
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
  );
};

export default Navigation;
