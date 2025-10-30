import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingPopup from "@/components/common/Booking";
import FloatingSocialIcons from "@/components/landing/FloatingSocialIcons";

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

interface VisaCard {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface VisaHeroProps {
  data: {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: string;
    visaCards: VisaCard[];
    socialIcons: Array<{
      icon: string;
      href: string;
      alt: string;
      target?: string;
      rel?: string;
    }>;
  };
}

// Using shared FloatingSocialIcons for consistent design

const VisaHero = ({ data }: VisaHeroProps) => {
  const {
    title,
    subtitle,
    buttonText,
    visaCards,
    socialIcons,
    backgroundImage,
  } = data;
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white min-h-screen">
      {/* Floating Social Icons */}
      <FloatingSocialIcons icons={socialIcons} />

      {/* Background Banner Container */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "calc(100% + 120px)",
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(251, 146, 60, 0.7) 0%, rgba(251, 191, 36, 0.5) 30%, rgba(96, 165, 250, 0.6) 70%, rgba(147, 197, 253, 0.7) 100%)`,
            height: "calc(100% + 120px)",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Hero Content */}
          <div className="pt-24 pb-32 min-h-[450px] flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                {title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
                {subtitle}
              </p>
              <Button
                onClick={() => setShowBookingPopup(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-6 text-base rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {buttonText} <ArrowRightIcon className="ml-2 w-5 h-5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Cards Grid */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl -mt-20 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaCards.map((card, index) => {
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100 min-h-[240px]"
              >
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pr-20">
                    {card.title}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 bg-[#487b99] rounded-full"></div>
                    <div className="flex-1 h-0.5 bg-[#487b99]"></div>
                    <div className="w-2 h-2 bg-[#487b99] rounded-full mr-2"></div>
                  </div>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed pr-20 flex-grow">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    className="inline-flex items-center w-fit text-sm font-semibold text-gray-900 border border-yellow-500 px-3 py-1.5 rounded hover:text-yellow-600 transition-colors duration-300 mt-auto"
                  >
                    Get {card.title.split(" ")[0]} Visa
                    <ArrowRightIcon className="ml-2 w-4 h-4 inline" />
                  </a>
                </div>

                {/* Icon in Bottom Right Corner */}
                <div className="absolute bottom-6 right-6 w-16 h-16 flex items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Popup */}
      {showBookingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setShowBookingPopup(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <BookingPopup onClose={() => setShowBookingPopup(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default VisaHero;
