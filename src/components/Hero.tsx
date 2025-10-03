import heroPattern from "@/assets/banner-bg.jpg";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[340px] overflow-hidden mx-3 my-6 px-0 rounded-xl">
      {/* Banner background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${heroPattern})`,
          filter: "brightness(0.55)",
        }}
      />

      {/* Navbar bar over image */}
      <nav className="absolute top-6 left-5 right-5 bg-[#487b99] flex items-center justify-between h-[64px] px-7 rounded-lg shadow-xl z-20">
        {/* Left Logo */}
        <div className="flex items-center gap-3">
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
        </div>

        {/* Center navbar links */}
        <div className="hidden md:flex gap-7 items-center pt-1">
          <a href="#business-setup" className="text-base font-medium text-white hover:text-white/80 transition">
            Business Setup
          </a>
          <a href="#services" className="text-base font-medium text-white hover:text-white/80 transition">
            Our Services
          </a>
          <a href="#about" className="text-base font-medium text-white hover:text-white/80 transition">
            About Us
          </a>
          <a href="#contact" className="text-base font-medium text-white hover:text-white/80 transition">
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
        </div>
        {/* Hamburger Icon always at end, matching design */}
        <button className="ml-4 px-2 py-1 rounded hover:bg-white/20 flex items-center justify-center md:hidden">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect y="6" width="28" height="2.5" rx="1.25" fill="#fff" />
            <rect y="13" width="28" height="2.5" rx="1.25" fill="#fff" />
            <rect y="20" width="28" height="2.5" rx="1.25" fill="#fff" />
          </svg>
        </button>
      </nav>

      {/* Right-side floating icons bar */}
      <div className="absolute right-6 top-[120px] flex flex-col gap-4 z-30">
        {/* Phone */}
        <a href="tel:123456789" className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:scale-105 transition">
          <img src="/phone.png" alt="Phone" className="w-7 h-7" />
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/123456789" target="_blank" rel="noopener" className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:scale-105 transition">
          <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
        </a>
        {/* Message */}
        <a href="#contact" className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:scale-105 transition">
          <img src="/message.png" alt="Message" className="w-7 h-7" />
        </a>
      </div>

      {/* Hero Content center left */}
      <div className="absolute z-10 top-[110px] left-8 max-w-2xl flex flex-col items-start">
        <p className="text-white text-[16px] font-semibold mb-2 flex gap-2 items-center">
          Home <span className="opacity-60 text-white text-[14px]"> &gt; Mainland Business Setup</span>
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 drop-shadow">
          Mainland Business Setup
        </h1>
        <p className="text-white text-base font-semibold opacity-95">
          BUSINESS & BEYOND
        </p>
      </div>
    </section>
  );
};

export default Hero;
