import React from "react";
import { Button } from "@/components/ui/button";

interface LegalComplaintServiceProps {
  data: {
    sectionTitle: string;
    mainTitle: string;
    mainCards: Array<{
      title: string;
      description?: string;
      image: string;
      buttonText?: string;
      buttonColor?: string;
      bgColor?: string;
      height: string;
      isFeatured: boolean;
    }>;
    detailsSection: {
      title: string;
      mainCards: Array<{
        icon: string;
        title: string;
        color: string;
        points: string[];
      }>;
      description: string;
      processes: Array<{
        title: string;
        items: string[];
      }>;
      advantages: {
        title: string;
        items: string[];
      };
    };
  };
}

const LegalComplaintService: React.FC<LegalComplaintServiceProps> = ({
  data,
}) => {
  return (
    <>
      {/* Main Container with Black Background */}
      <section className="bg-black py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 ml-0 sm:ml-2 lg:ml-4 rounded-lg">
        <div className="max-w-7xl mx-auto">
          {/* First Card - Our Legal Services */}
          <div className="bg-black mb-6 sm:mb-8">
            <div className="text-left mb-8 sm:mb-10 lg:mb-12">
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">
                {data.sectionTitle}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                {data.mainTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {data.mainCards.map((card, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg ${card.height}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-500">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {card.isFeatured ? (
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-yellow-500 rounded-t-lg`}
                    >
                      <h3 className="text-black text-base sm:text-lg font-bold mb-2 sm:mb-3">
                        {card.title}
                      </h3>
                      <p className="text-black text-xs mb-3 sm:mb-4 leading-relaxed">
                        {card.description}
                      </p>
                      <Button
                        className={`${card.buttonColor} text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full w-full text-center`}
                      >
                        {card.buttonText}
                      </Button>
                    </div>
                  ) : (
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-white text-base sm:text-lg font-bold">
                        {card.title}
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Second Card - Complaint Filing Services Details */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-left mb-6 sm:mb-8 lg:mb-12">
              {data.detailsSection.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              {data.detailsSection.mainCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 border border-gray-200 rounded-lg bg-white"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div>
                    <h3
                      className={`${card.color} text-lg sm:text-xl font-bold mb-2 sm:mb-3`}
                    >
                      {card.title}
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                      {card.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-yellow-500 mt-0.5">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Process */}
            <div className="bg-white border-t-2 border-gray-200 pt-6 sm:pt-8">
              <p className="text-gray-700 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                {data.detailsSection.description}
              </p>

              <div className="space-y-4 sm:space-y-6">
                {data.detailsSection.processes.map((process, index) => (
                  <div key={index}>
                    <h4 className="text-sm sm:text-base font-normal text-black mb-2 sm:mb-3">
                      {process.title}
                    </h4>
                    <ul className="space-y-2 ml-3 sm:ml-4 text-xs sm:text-sm text-gray-700">
                      {process.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                  {data.detailsSection.advantages.title}
                </h4>
                <ul className="space-y-2 ml-3 sm:ml-4 text-xs sm:text-sm text-gray-700">
                  {data.detailsSection.advantages.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalComplaintService;
