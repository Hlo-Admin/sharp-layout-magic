// src/components/Hero.tsx
import Navbar from "@/components/common/Navigation";

const Hero = ({ data }) => {
  const { breadcrumbs, title, subtitle, contactIcons, image } = data;

  return (
    <section className="relative h-[340px] mx-3 my-6 px-0 rounded-xl">
      {/* Banner background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(1)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Right-side icon bar */}
      <div className="absolute z-30 right-0 top-[120px] flex flex-col items-end gap-4">
        {contactIcons && contactIcons.map((icon, index) => (
          <div
            key={index}
            className="group bg-white/95 shadow-xl rounded-l-2xl py-2 transition-all duration-300 hover:shadow-2xl hover:px-4 overflow-hidden"
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
              {icon.label && (
                <span className="text-black font-bold text-sm opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[150px] transition-all duration-300 overflow-hidden">
                  {icon.label}
                </span>
              )}
            </a>
          </div>
        ))}
      </div>

      {/* Hero content - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center pt-5 mt-16 px-4">
        <h1 className="text-white text-4xl md:text-9xl font-bold  mb-2 drop-shadow">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
