import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BookingPopup from "../common/Booking";

type ServiceCard = {
  title: string;
  description: string;
  linkText: string;
  image: string;
};

type ServicesSectionData = {
  title: string;
  description: string;
  buttonText: string;
  services: ServiceCard[];
};

type Props = {
  data: ServicesSectionData;
};

export default function ServicesSection({ data }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // Pixels per frame

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        // Increment scroll position
        scrollContainer.scrollLeft += scrollSpeed;

        // Get the inner content width
        const innerContent = scrollContainer.firstElementChild as HTMLElement;
        if (innerContent) {
          const contentWidth = innerContent.offsetWidth;
          const halfWidth = contentWidth / 2;

          // Reset to beginning when we've scrolled past the first set
          if (scrollContainer.scrollLeft >= halfWidth) {
            scrollContainer.scrollLeft = scrollContainer.scrollLeft - halfWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  return (
    <section className="bg-[#f2f2f2] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              {data.title}
            </h2>
            <p className="text-base text-gray-700 max-w-4xl">
              {data.description}
            </p>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block ml-8">
            <button
              onClick={() => setShowBooking(true)}
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl text-xl font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              {data.buttonText}
              <ArrowUpRight className="w-4 h-4 text-[yellow]" />
            </button>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setShowBooking(true)}
            className="w-full inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            {data.buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Services Slider */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12"
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
            {/* Duplicate services for seamless infinite loop */}
            {[...data.services, ...data.services].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 hover:shadow-lg transition-shadow cursor-pointer flex flex-col min-w-[220px] max-w-[220px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Image Container with rounded background */}
                <div className="bg-[#f2f2f2] rounded-2xl overflow-hidden mb-3 shadow-sm">
                  <div className="h-32">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-base font-bold text-black mb-2 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4 flex-1">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[#3790ad] text-sm font-medium hover:text-blue-700 transition-colors"
                  >
                    {service.linkText}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
            >
              ✕
            </button>
            <BookingPopup onClose={() => setShowBooking(false)} />
          </div>
        </div>
      )}
    </section>
  );
}
