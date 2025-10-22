import React from "react";
import { Button } from "@/components/ui/button";
import FloatingSocialIcons from "@/components/landing/FloatingSocialIcons";

interface HeroSectionProps {
  data: {
    title: string;
    description: string;
    buttonText: string;
    image: string;
    socialIcons: Array<{
      icon: string;
      href: string;
      alt: string;
      target?: string;
      rel?: string;
    }>;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Floating Social Icons */}
      <FloatingSocialIcons icons={data.socialIcons} />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-tight uppercase">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {data.description}
            </p>
            <Button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 text-sm sm:text-base">
              <span>{data.buttonText}</span>
              <span>→</span>
            </Button>
          </div>

          {/* Right Content - Lady Justice Statue */}
          <div className="relative">
            {/* Lady Justice Statue */}
            <div className="relative z-10 flex justify-center">
              <div className="w-96 h-[500px] sm:w-[450px] sm:h-[600px] lg:w-[600px] lg:h-[750px] flex items-center justify-center">
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
