import React from "react";

interface Logo {
  name: string;
  image: string;
}

interface WhyChooseUsProps {
  data: {
    icon: string;
    title: string;
    image: string;
    services: Array<{
      title: string;
      description: string;
    }>;
    governmentBodies: {
      title: string;
      subtitle: string;
      logos: Logo[];
    };
  };
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ data }) => {
  // Duplicate logos for seamless marquee scrolling
  const duplicatedLogos = [
    ...data.governmentBodies.logos,
    ...data.governmentBodies.logos,
  ];

  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
      <div className="max-w-[86rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
            <img src={data.icon} alt="Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#487b99] uppercase tracking-wide leading-tight">
            {data.title}
          </h2>
        </div>

        {/* Main White Container */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16">
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12">
            {data.services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 border border-gray-400 rounded-xl"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-[#487b99] rounded-full"></div>
                  <div className="flex-1 h-0.5 bg-[#487b99]"></div>
                  <div className="w-2 h-2 bg-[#487b99] rounded-full mr-2"></div>
                </div>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Government Bodies Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            {/* Title Section */}
            <div className="flex-shrink-0 lg:w-1/4">
              <h3 className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-tight">
                <span className="font-light">
                  {data.governmentBodies.title}
                </span>
                <br />
                <span className="font-bold">
                  {data.governmentBodies.subtitle}
                </span>
              </h3>
            </div>

            {/* Logos Section */}
            <div className="flex-1 w-full">
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                  {duplicatedLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 mx-4 md:mx-6 flex items-center justify-center"
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
