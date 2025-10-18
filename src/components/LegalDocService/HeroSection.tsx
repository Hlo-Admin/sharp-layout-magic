import React from "react";
import { Button } from "@/components/ui/button";
import FloatingSocialIcons from "@/components/landing/FloatingSocialIcons";

const HeroSection = () => {
  // Social icons data
  const socialIcons = [
    {
      icon: "/phone.png",
      href: "#contact",
      alt: "Live Chat",
    },
    {
      icon: "/whatsapp.png",
      href: "https://wa.me/971503578847",
      alt: "WhatsApp",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: "/message.png",
      href: "mailto:info@gokitepro.com",
      alt: "Email",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Floating Social Icons */}
      <FloatingSocialIcons icons={socialIcons} />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-24 sm:pb-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-tight uppercase">
              HIGH QUALITY LEGAL CONSULTANCY IN DUBAI
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Take the stress out of legal filings. Trust Go Kite Business Setup
              Services to handle your case registration in Dubai Courts
              professionally and efficiently. Contact us today for a
              consultation or to begin your case filing.
            </p>
            <Button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 text-sm sm:text-base">
              <span>Let's simplify your Legal</span>
              <span>→</span>
            </Button>
          </div>

          {/* Right Content - Lady Justice Statue */}
          <div className="relative">
            {/* Lady Justice Statue */}
            <div className="relative z-10 flex justify-center">
              <div className="w-64 h-[350px] sm:w-80 sm:h-[450px] lg:h-[500px] flex items-center justify-center">
                <img
                  src="/legal/justice.png"
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
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs font-bold">
                A
              </span>
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs font-bold">
                B
              </span>
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs font-bold">
                C
              </span>
            </div>
          </div>
          <div className="text-orange-500 font-semibold text-xs sm:text-sm">
            1,2k+ clients
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-1 sm:mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-orange-500 text-xs sm:text-sm">
              ★
            </span>
          ))}
        </div>

        <p className="text-[10px] sm:text-xs text-gray-600">
          Trusted & give us 4.9 rating star!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
