import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  data: {
    title: string;
    description: string;
    buttonText: string;
    image: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Main Hero Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 sm:pb-16 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 lg:pl-16 sm:pl-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight uppercase">
              {data.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {data.description}
            </p>
            <Button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 text-sm sm:text-base">
              <span>{data.buttonText}</span>
              <span>→</span>
            </Button>
          </div>

          {/* Right Content - Lady Justice Statue */}
          <div className="relative flex justify-end">
            {/* Lady Justice Statue */}
            <div className="relative z-10">
              <div className="w-72 h-[460px] sm:w-96 sm:h-[560px] lg:w-[28rem] lg:h-[680px] flex items-center justify-center">
                <img
                  src={data.image}
                  alt="Lady Justice Statue"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
