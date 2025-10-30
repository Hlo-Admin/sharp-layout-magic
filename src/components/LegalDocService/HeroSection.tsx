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
    trustIndicator: {
      clients: string;
      rating: number;
      ratingText: string;
    };
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Floating Social Icons */}
      <FloatingSocialIcons icons={data.socialIcons} />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-24 sm:pb-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black uppercase">
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
              <div className="w-72 h-[400px] sm:w-80 sm:h-[500px] lg:w-96 lg:h-[650px] xl:w-[28rem] xl:h-[720px] flex items-center justify-center">
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

      {/* Trust Indicator - Bottom Right Corner */}
      <div className="absolute bottom-4 right-2 sm:bottom-8 sm:right-4 lg:bottom-16 lg:right-2 bg-gray-100 rounded-lg p-3 sm:p-4 shadow-lg z-20 max-w-[200px] sm:max-w-[240px] lg:max-w-64">
        <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
          {/* Client Avatars */}
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80"
              alt="Client avatar 1"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80"
              alt="Client avatar 2"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80"
              alt="Client avatar 3"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
            />
          </div>
          <div className="text-orange-500 font-semibold text-xs sm:text-sm">
            {data.trustIndicator.clients}
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-1 sm:mb-2">
          {[...Array(data.trustIndicator.rating)].map((_, i) => (
            <span key={i} className="text-orange-500 text-xs sm:text-sm">
              ★
            </span>
          ))}
        </div>

        <p className="text-[10px] sm:text-xs text-gray-600">
          {data.trustIndicator.ratingText}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
