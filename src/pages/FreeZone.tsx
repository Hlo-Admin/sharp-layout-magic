import heroPattern from "@/assets/banner-bg.jpg";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const FreeZone = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navigation */}
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

        {/* Right-side icon bar with individual containers */}
        <div
          className="absolute z-30 right-0 top-[120px] flex flex-col items-end gap-4"
          style={{ height: "fit-content" }}
        >
          {/* Phone Icon */}
          <div
            className="bg-white/95 shadow-xl rounded-l-2xl px-2 py-2"
            style={{
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          >
            <a
              href="tel:123456789"
              className="flex items-center justify-center w-10 h-10 "
            >
              <img src="/phone.png" alt="Phone" className="w-10 h-10" />
            </a>
          </div>

          {/* WhatsApp Icon */}
          <div
            className="bg-white/95 shadow-xl rounded-l-2xl px-2 py-2"
            style={{
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          >
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center w-10 h-10"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
            </a>
          </div>

          {/* Message Icon */}
          <div
            className="bg-white/95 shadow-xl rounded-l-2xl px-2 py-2"
            style={{
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          >
            <a
              href="#contact"
              className="flex items-center justify-center w-10 h-10"
            >
              <img src="/message.png" alt="Message" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Hero Content center left */}
        <div className="absolute z-10 top-[110px] left-8 max-w-2xl flex flex-col items-start">
          <p className="text-white text-[16px] font-semibold mb-2 flex gap-2 items-center">
            Home{" "}
            <span className="opacity-60 text-white text-[14px]">
              {" "}
              &gt; Free Zone Business Setup
            </span>
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 drop-shadow">
            Free Zone Business Setup
          </h1>
          <p className="text-white text-base font-semibold opacity-95">
            BUSINESS & BEYOND
          </p>
        </div>
      </section>

      {/* Content sections will go here */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-6">
            Coming Soon: Free Zone Setup Services
          </h2>
          <p className="text-lg text-black">
            Detailed information about our Free Zone business setup services will be available here.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeZone;
