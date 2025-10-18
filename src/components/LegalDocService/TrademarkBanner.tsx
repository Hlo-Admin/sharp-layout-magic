import React from "react";
import { Button } from "@/components/ui/button";

interface TrademarkBannerProps {
  data: {
    backgroundImage: string;
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
  };
}

const TrademarkBanner: React.FC<TrademarkBannerProps> = ({ data }) => {
  return (
    <section className="relative w-full min-h-[200px] sm:min-h-[220px] flex items-center justify-center py-6 sm:py-10 lg:py-16 px-3 sm:px-6 lg:ml-16 lg:px-10 mb-8 sm:mb-12">
      {/* Background */}
      <img
        src={data.backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl -z-2"
        style={{ minHeight: 200 }}
      />
      <div className="absolute inset-0 bg-black/40 rounded-lg sm:rounded-xl -z-10" />

      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
        {/* Left: Icon */}
        <div className="flex-shrink-0 flex items-center justify-center min-w-[120px] sm:min-w-[150px] lg:min-w-[170px] min-h-[100px] sm:min-h-[150px] lg:min-h-[170px] z-10">
          <span className="block w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-2 sm:border-4 border-white flex items-center justify-center bg-white/10">
            <span className="text-4xl sm:text-5xl font-bold text-black">
              {" "}
              <img
                src={data.icon}
                alt="Icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </span>
          </span>
          <span className="ml-3 sm:ml-5 lg:ml-6 text-6xl sm:text-8xl lg:text-9xl font-bold text-white drop-shadow-md tracking-wide">
            TM
          </span>
        </div>

        {/* Right: Info Card */}
        <div className="bg-[#ffffff] rounded-lg shadow-xl px-4 sm:px-6 lg:px-8 py-5 sm:py-7 lg:py-9 max-w-4xl w-full z-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-2 sm:mb-3">
            {data.title}
          </h2>
          <div className="h-0.5 w-12 sm:w-16 bg-[#00C5C5] rounded-full mb-3 sm:mb-4 lg:mb-5" />
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
            {data.description}
          </p>
          <Button
            className={`${data.buttonColor} text-white hover:bg-yellow-500 font-semibold px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 rounded-lg shadow transition-all text-sm sm:text-base`}
          >
            {data.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrademarkBanner;
