// src/components/Hero.tsx
import Navbar from "@/components/common/Navigation";

const Hero = ({ data }) => {
  const { breadcrumbs, title, subtitle, contactIcons, image } = data;

  return (
    <section
      className="relative h-[340px] mx-3 my-6 px-0 rounded-xl"
      style={{ zIndex: 1 }}
    >
      {/* Banner background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(1)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Right-side icon bar */}
      <div className="absolute z-30 right-0 top-[120px] flex flex-col items-end gap-4">
        {contactIcons.map((icon, index) => (
          <div
            key={index}
            className="group bg-white/95 shadow-xl rounded-l-2xl px-2 py-2 transition-all duration-300 hover:shadow-2xl hover:px-4 overflow-hidden"
            style={{
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
            }}
          >
            <a
              href={icon.href}
              target={icon.target}
              rel={icon.rel}
              className="flex items-center justify-start gap-3 whitespace-nowrap"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-10 h-10 flex-shrink-0 transition-transform duration-300"
              />
              <span className="text-black font-bold text-sm opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[150px] transition-all duration-300 overflow-hidden">
                {icon.label}
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div className="absolute z-10 top-[110px] left-8 flex flex-col items-start">
        <p className="text-white text-[16px] font-semibold mb-2 flex gap-2 items-center">
          {breadcrumbs.home}{" "}
          <span className="opacity-60 text-white text-[14px]">
            &gt; {breadcrumbs.current}
          </span>
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 drop-shadow">
          {title}
        </h1>
        <p className="text-white text-base font-semibold opacity-95">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
