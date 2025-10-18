import React from "react";

interface WhyChooseUsProps {
  data: {
    icon: string;
    title: string;
    image: string;
    services: Array<{
      title: string;
      description: string;
    }>;
    badge: {
      icon: string;
      text: string;
    };
  };
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ data }) => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
            <img src={data.icon} alt="Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#3790ad] uppercase tracking-wide leading-tight">
            {data.title}
          </h2>
        </div>

        <div className="w-full relative">
          {/* Right Side Image - Positioned beside cards on large screens */}
          <div className="hidden lg:block absolute -right-8 xl:-right-16 -top-5 w-60 xl:w-64 h-full z-0 pointer-events-none">
            <img
              src={data.image}
              alt="Legal Services"
              className="w-full h-auto object-contain sticky top-8"
            />
          </div>

          {/* Service Cards Grid - Full Width */}
          <div className="relative z-10 max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-4">
              {/* Service Boxes */}
              {data.services.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-black mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <div className="w-full border-t-2 border-teal-500 mb-2 sm:mb-2.5"></div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="mt-6 sm:mt-8 lg:mt-0 inline-flex lg:absolute lg:-right-8 xl:-right-16 lg:bottom-0 bg-white text-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg items-center gap-2 sm:gap-3 shadow-lg max-w-[180px] sm:max-w-[200px] lg:max-w-[210px] relative z-20">
            <div className="w-8 sm:w-10 h-6 flex items-center justify-center flex-shrink-0">
              <img
                src={data.badge.icon}
                alt="Badge"
                className="w-10 sm:w-12 h-6 sm:h-8"
              />
            </div>
            <span className="text-xs sm:text-sm font-medium leading-tight">
              {data.badge.text}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
