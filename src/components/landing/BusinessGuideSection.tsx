import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface BusinessGuideCard {
  title: string;
  description: string;
  buttonText: string;
  priceLabel?: string;
  price?: string;
  additionalText?: string;
  additionalButtons?: string[];
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
}

interface BusinessGuideSectionProps {
  cards: BusinessGuideCard[];
}

export default function BusinessGuideSection({
  cards,
}: BusinessGuideSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-carousel effect - change card every 2 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // 2 seconds

    return () => clearInterval(interval);
  }, [cards.length, isHovered]);

  // Scroll to the current card
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / cards.length;
    const targetScrollLeft = currentIndex * cardWidth;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  }, [currentIndex, cards.length]);

  return (
    <div className="pt-6 sm:pt-12 px-2 sm:px-4 pb-20">
      <div className="max-w-full mx-auto">
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: "smooth", maxWidth: "100vw" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${
                  index === 0 ? "" : card.backgroundColor
                } rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden shadow-2xl flex-shrink-0`}
                style={{
                  minHeight: index === 0 ? "450px" : "400px",
                  width: "90vw",
                  maxWidth: "85vw",
                  backgroundColor: index === 0 ? "#3690AD" : undefined,
                }}
              >
                {/* Business Guide Image - On all cards */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20rem] h-[20rem] sm:w-[35rem] sm:h-[35rem] md:w-[50rem] md:h-[50rem] pointer-events-none opacity-30 sm:opacity-50 md:opacity-100">
                  <img
                    src="/landingpage/business-guide.png"
                    alt="Business Guide"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Price Box - Positioned on right for first card (Desktop only) */}
                {card.price && index === 0 && (
                  <div className="hidden md:block absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-xl z-20 w-52 sm:w-60 md:w-60">
                    {card.priceLabel && (
                      <div className="text-black text-[0.65rem] sm:text-xs font-bold mb-1.5 sm:mb-2 uppercase tracking-wide leading-tight">
                        {card.priceLabel}
                      </div>
                    )}
                    <div className="text-cyan-600 font-bold text-sm sm:text-base md:text-lg">
                      {card.price}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 max-w-full sm:max-w-md">
                  {/* Title */}
                  <h2
                    className={`${card.textColor} font-bold mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
                    style={{
                      lineHeight: "1.2",
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {card.title}
                  </h2>

                  {/* Description */}
                  <p
                    className={`${card.textColor} mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base`}
                    style={{
                      opacity: index === 0 ? 0.95 : 0.85,
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Main Button */}
                  <button
                    className={`${card.buttonColor} ${card.buttonTextColor} px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg mb-4 sm:mb-6 flex items-center gap-2 hover:scale-105 transition-transform shadow-lg`}
                  >
                    <span className="truncate">{card.buttonText}</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[yellow] flex-shrink-0" />
                  </button>

                  {/* Price Box - Mobile Only (after button) */}
                  {card.price && index === 0 && (
                    <div className="block md:hidden bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl mb-4 w-full max-w-xs">
                      {card.priceLabel && (
                        <div className="text-gray-800 text-[0.65rem] font-bold mb-1.5 uppercase tracking-wide leading-tight">
                          {card.priceLabel}
                        </div>
                      )}
                      <div className="text-cyan-600 font-bold text-base">
                        {card.price}
                      </div>
                    </div>
                  )}

                  {/* Additional Text */}
                  {card.additionalText && (
                    <p
                      className={`${card.textColor} text-xs sm:text-sm mb-3 sm:mb-4`}
                      style={{ opacity: index === 0 ? 0.9 : 0.8 }}
                    >
                      {card.additionalText}
                    </p>
                  )}

                  {/* Additional Buttons */}
                  {card.additionalButtons && (
                    <div className="flex gap-2 sm:gap-3">
                      {card.additionalButtons.map((buttonText, buttonIndex) => (
                        <button
                          key={buttonIndex}
                          className={`${card.buttonColor} ${card.buttonTextColor} px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[0.65rem] sm:text-xs font-semibold flex items-center gap-1 hover:scale-105 transition-transform shadow-md whitespace-nowrap flex-shrink-0`}
                        >
                          <span>{buttonText}</span>
                          <ArrowUpRight className="w-2.5 h-2.5 text-[yellow] flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
