import React from "react";
import { Button } from "@/components/ui/button";

interface TrademarkBannerProps {
  data: {
    backgroundImage: string;
    icon: string; // kept for backward compatibility, not used in new layout
    leftText?: string; // large text on the left (e.g., RERA)
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
  };
}

const TrademarkBanner: React.FC<TrademarkBannerProps> = ({ data }) => {
  return (
    <section className="relative w-full min-h-[200px] sm:min-h-[220px] py-6 sm:py-8 lg:py-10 mb-6 sm:mb-10 mx-auto">
      {/* Background */}
      <img
        src={data.backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl -z-10"
        style={{ minHeight: 200 }}
      />
      <div className="absolute inset-0 bg-black/20 rounded-lg sm:rounded-xl -z-10" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* Left: Large Text */}
          <div className="hidden lg:flex items-center min-h-[160px]">
            <span className="text-white font-extrabold tracking-tight drop-shadow-md text-6xl xl:text-7xl">
              {data.leftText || "RERA"}
            </span>
          </div>

          {/* Right: Info Card */}
          <div className="bg-white rounded-xl shadow-lg px-5 sm:px-6 lg:px-7 py-5 sm:py-6 lg:py-7 max-w-2xl ml-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
              {data.title}
            </h2>
            <div className="mt-2 h-[2px] w-full bg-gray-200" />
            <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              {data.description}
            </p>
            <Button
              className={`${data.buttonColor} mt-4 text-black hover:bg-yellow-500 font-semibold px-4 sm:px-5 py-2 rounded-full transition-all text-sm`}
            >
              {data.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkBanner;
