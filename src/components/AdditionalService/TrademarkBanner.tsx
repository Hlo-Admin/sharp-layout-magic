import React from "react";
import { Button } from "@/components/ui/button";

interface TrademarkBannerProps {
  data: {
    backgroundImage: string;
    icon: string; // kept for backward compatibility
    icons?: string[]; // array of left-side icons (C, R, TM, IP)
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
  };
}

const TrademarkBanner: React.FC<TrademarkBannerProps> = ({ data }) => {
  return (
    <section className="relative w-full min-h-[200px] sm:min-h-[220px] flex items-center justify-center py-6 sm:py-8 lg:py-10 pr-3 sm:pr-6 lg:pr-10 pl-6 sm:pl-8 lg:pl-12 mb-6 sm:mb-10 mx-auto">
      {/* Background */}
      <img
        src={data.backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl -z-10"
        style={{ minHeight: 200 }}
      />
      <div className="absolute inset-0 bg-black/25 rounded-lg sm:rounded-xl -z-10" />

      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
        {/* Left: Four Icons */}
        <div className="flex-1 flex items-center justify-start gap-8 sm:gap-12 lg:gap-16 z-10">
          {(data.icons && data.icons.length > 0 ? data.icons : [data.icon]).map(
            (iconSrc, idx) => (
              <img
                key={idx}
                src={iconSrc}
                alt={`icon-${idx}`}
                className="h-10 sm:h-12 lg:h-16 w-auto object-contain drop-shadow-md"
              />
            )
          )}
        </div>

        {/* Right: Info Card */}
        <div className="bg-white rounded-xl shadow-lg px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7 max-w-2xl w-full z-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
            {data.title}
          </h2>
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="flex-1 h-0.5 bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
          </div>
          <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
            {data.description}
          </p>
          <Button
            className={`${data.buttonColor} mt-4 text-black hover:bg-yellow-500 font-semibold px-5 py-2 rounded-full shadow text-sm`}
          >
            {data.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrademarkBanner;
