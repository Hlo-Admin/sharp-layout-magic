import React from "react";

type LogoData = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  logos: LogoData[];
};

export default function LogoMarquee({ title, logos }: Props) {
  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Layout with title on left and logos on right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Title Section - Left Side */}
          <div className="flex-shrink-0 lg:w-1/4">
            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-tight">
              <span className="font-light">UAE Government Bodies</span>
              <br />
              <span className="font-bold">We work with</span>
            </h2>
          </div>

          {/* Logos Section - Right Side */}
          <div className="flex-1 w-full">
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-4 md:mx-6 flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
