import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-6 left-5 right-5 bg-[#487b99] flex items-center justify-between h-[64px] px-7 rounded-lg shadow-xl z-20">
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
          <div className="text-xs font-semibold text-white/[0.7]">
            BUSINESS & BEYOND
          </div>
        </div>
      </Link>

      {/* Center navbar links */}
      <div className="hidden md:flex gap-7 items-center pt-1">
        <Link
          to="/"
          className="text-base font-medium text-white hover:text-white/80 transition"
        >
          Mainland Setup
        </Link>
        <Link
          to="/free-zone"
          className="text-base font-medium text-white hover:text-white/80 transition"
        >
          Free Zone Setup
        </Link>
        <a
          href="#services"
          className="text-base font-medium text-white hover:text-white/80 transition"
        >
          Our Services
        </a>
        <a
          href="#about"
          className="text-base font-medium text-white hover:text-white/80 transition"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="text-base font-medium text-white hover:text-white/80 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Right buttons */}
      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          size="sm"
          className="bg-[#f7c332] text-[#193954] font-bold px-5 py-2 rounded shadow hover:opacity-90"
          style={{ boxShadow: "0 2px 8px #0002" }}
        >
          COST CALCULATOR
        </Button>
        <button className="flex items-center gap-1 text-sm font-semibold text-white px-3 py-2 rounded hover:bg-white/20">
          <Globe className="w-4 h-4" />
          ENG
        </button>
        {/* Hamburger Icon always at end, visible on all screen sizes */}
        <button className="ml-4 px-2 py-1 rounded hover:bg-white/20 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect y="6" width="28" height="2.5" rx="1.25" fill="#fff" />
            <rect y="13" width="28" height="2.5" rx="1.25" fill="#fff" />
            <rect y="20" width="28" height="2.5" rx="1.25" fill="#fff" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
