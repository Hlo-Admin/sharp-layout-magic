import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "We have been operating for over an providing top-notch services to our clients and build strong track record in the industry. We have been operating for over a decade providing top-notch We have been operating",
      name: "Albert Flores",
      title: "CEO",
    },
  ];

  return (
    <section className="bg-white min-h-[600px] sm:min-h-[700px] lg:min-h-screen flex items-center py-10 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-16">
          {/* Left Side - Image Card */}
          <div className="relative lg:col-span-2 rounded-2xl sm:rounded-3xl">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] flex items-end">
              {/* Professional in suit image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-b rounded-2xl sm:rounded-3xl from-transparent via-transparent to-black/60"></div>

              {/* Professional testimonials image */}
              <img
                src="/legal/testimonials.jpg"
                alt="Professional Portrait"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl"
              />

              {/* Logo Badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-10">
                <img
                  src="/footer-logo.png"
                  alt="Go Kite Pro"
                  className="w-[26px] h-[33px] sm:w-[30px] sm:h-[38px] md:w-[38px] md:h-[48px]"
                />
                <div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-extrabold tracking-wide leading-tight text-white">
                    GO KITE PRO
                  </div>
                  <div className="text-[0.6rem] sm:text-[0.65rem] md:text-xs font-semibold text-white/[0.7]">
                    BUSINESS & BEYOND
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="flex items-center lg:col-span-3">
            <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 relative w-full">
              {/* Quote Mark */}
              <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-serif leading-none mb-4 sm:mb-6 lg:mb-8">
                "
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light">
                {testimonials[activeSlide].quote}
              </blockquote>

              {/* Divider Line */}
              <div className="border-t border-gray-700 mb-4 sm:mb-6 lg:mb-8"></div>

              {/* Author Info */}
              <div className="mb-6 sm:mb-8">
                <p className="text-white font-semibold text-lg sm:text-xl mb-1">
                  {testimonials[activeSlide].name}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {testimonials[activeSlide].title}
                </p>
              </div>

              {/* Navigation Dots and Arrows */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5 sm:gap-2">
                  <button
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white transition-all"
                    onClick={() => setActiveSlide(0)}
                  ></button>
                  <button
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-white/50 transition-all"
                    onClick={() => setActiveSlide(1)}
                  ></button>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <button
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </button>
                  <button
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
