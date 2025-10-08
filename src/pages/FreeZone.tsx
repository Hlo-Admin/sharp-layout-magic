import heroPattern from "@/assets/banner-bg.jpg";
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import { Link } from "react-router-dom";

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
        <Navbar />

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
            Detailed information about our Free Zone business setup services
            will be available here.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeZone;
