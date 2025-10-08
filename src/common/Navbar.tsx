import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 bg-primary/95 backdrop-blur-sm flex items-center justify-between h-[70px] px-8 z-50 shadow-lg">
      {/* Left Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/footer-logo.png"
          alt="Go Kite Pro"
          className="w-[38px] h-[48px]"
        />
        <div>
          <div className="text-lg font-extrabold tracking-wide leading-tight text-white">
            GO KITE PRO
          </div>
          <div className="text-xs font-semibold text-white/80 tracking-wider">
            BUSINESS & BEYOND
          </div>
        </div>
      </Link>

      {/* Center navbar links */}
      <div className="hidden lg:flex gap-8 items-center">
        <Link
          to="/"
          className="text-[15px] font-medium text-white hover:text-white/80 transition"
        >
          Home
        </Link>
        <a
          href="#services"
          className="text-[15px] font-medium text-white hover:text-white/80 transition"
        >
          Our Services
        </a>
        <a
          href="#guide"
          className="text-[15px] font-medium text-white hover:text-white/80 transition"
        >
          Guide
        </a>
        <Link
          to="/free-zone"
          className="text-[15px] font-medium text-white hover:text-white/80 transition"
        >
          Free Zone
        </Link>
        <a
          href="#contact"
          className="text-[15px] font-medium text-white hover:text-white/80 transition"
        >
          Contact
        </a>
      </div>

      {/* Right buttons */}
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="sm"
          className="bg-secondary text-foreground font-bold px-6 py-2.5 rounded-lg hover:bg-secondary/90 shadow-md hidden md:flex"
        >
          GET A QUOTE
        </Button>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-white px-3 py-2 rounded hover:bg-white/10 transition">
          <Globe className="w-4 h-4" />
          ENG
        </button>
        <button className="lg:hidden px-2 py-1 rounded hover:bg-white/10 transition">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
