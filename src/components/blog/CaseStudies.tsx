import React from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Body = () => {
  // Static case studies data
  const caseStudies = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      title: "Nurturing the Youngest Entrepreneur – The Al Saleh Family",
      client: "Mr. Laith Al Saleh & Family",
      businessType: "E-Commerce – LEGO-inspired Products",
      description:
        "Mr. Laith Al Saleh envisioned turning his 13-year-old son's creativity into a business. The young entrepreneur wanted to sell LEGO-style brick cars, bikes, and keychains, and his family fully supported this venture — one son handled marketing, another focused on product research, and the third built the website.",
      services: [
        "Trade License",
        "Website Setup",
        "Product & Marketing Guidance",
      ],
      outcome:
        "The family successfully launched their online business, showcasing how youth entrepreneurship combined with expert guidance can create meaningful ventures.",
      testimonial:
        "With Go Kite Pro's guidance, our family was able to turn a dream into a thriving e-commerce business. Their support at every step made the process seamless.",
      author: "Laith Al Saleh",
      initials: "LA",
      date: "Jan 15",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      title: "From Struggle to Success – Hajara Pathan's Journey",
      client: "Ms. Hajara Pathan",
      businessType: "Business Setup Consulting",
      description:
        "Ms. Hajara Pathan faced severe obstacles when her employer stopped her visa process and demanded money, leaving her stranded and searching for a job. The Go Kite Pro experts, Ms. Fasna and Ms. Aroosia, stepped in, recovering her documents, canceling the previous visa and labor card, and guiding her through legal and administrative hurdles.",
      services: [
        "Visa Recovery",
        "Labor Card Cancellation",
        "Employment Placement",
      ],
      outcome:
        "Hajara transformed her struggle into success, becoming a valuable member of the Go Kite Pro team.",
      testimonial:
        "I came to Go Kite Pro as a client in distress, and today I'm proud to be part of the team that helped others achieve their dreams.",
      author: "Hajara Pathan",
      initials: "HP",
      date: "Feb 08",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      title: "Turning Setbacks into Success – The Story of Ms. Alima",
      client: "Ms. Alima",
      businessType: "Trade License Business",
      description:
        "Ms. Alima's visa had expired due to medical reasons, leading to repeated rejections for starting her business. The Go Kite Pro team took personal interest in her case, securing her trade license and residence visa, and successfully reducing her overstay penalties with proper claims.",
      services: ["Trade License & Visa Setup", "Penalty Reduction Assistance"],
      outcome:
        "Ms. Alima now runs her business legally and compliantly, relieved and grateful for the guidance she received.",
      testimonial:
        "Go Kite Pro didn't just handle my paperwork — they restored my hope and helped me rebuild my life.",
      author: "Alima",
      initials: "AL",
      date: "Mar 22",
    },
  ];

  // Create extended array for infinite loop effect
  const extendedCaseStudies = [
    caseStudies[caseStudies.length - 1], // Last item at the beginning
    ...caseStudies,
    caseStudies[0], // First item at the end
  ];

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (first real item)
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToIndex = (index, smooth = true) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth;
    el.scrollTo({
      left: cardWidth * index,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  // Handle infinite loop logic
  const handleTransitionEnd = () => {
    const el = scrollRef.current;
    if (!el) return;

    setIsTransitioning(false);

    // If we're at the clone at the end, jump to the real first item
    if (currentIndex === extendedCaseStudies.length - 1) {
      setCurrentIndex(1);
      scrollToIndex(1, false);
    }
    // If we're at the clone at the beginning, jump to the real last item
    else if (currentIndex === 0) {
      setCurrentIndex(caseStudies.length);
      scrollToIndex(caseStudies.length, false);
    }
  };

  // Auto-scroll effect with loop
  useEffect(() => {
    if (isPaused || isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        scrollToIndex(nextIndex, true);
        return nextIndex;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, isTransitioning]);

  // Listen for scroll end to handle infinite loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        handleTransitionEnd();
      }, 150);
    };

    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentIndex]);

  const handleManualScroll = (direction) => {
    setIsTransitioning(true);
    const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex, true);
  };

  // Initialize scroll position
  useEffect(() => {
    scrollToIndex(1, false);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Case Studies Section */}
      <section className="mb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-text-heading mb-2">
              Case Studies
            </h2>
            <p className="text-lg text-text-body">
              Here's what we've been up to recently.
            </p>
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors cursor-pointer"
          >
            View all
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Featured Article Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          {/* Buttons (absolute, visible on desktop but also usable mobile) */}
          <button
            onClick={() => handleManualScroll("left")}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:scale-105 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={() => handleManualScroll("right")}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:scale-105 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Horizontal scroll container with snapping */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto scrollbar-hide gap-6 snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {extendedCaseStudies.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="snap-start flex-shrink-0 w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-shadow"
                // add an aria role for accessibility
                role="group"
                aria-label={item.title}
              >
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[550px] flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                  <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
                    SUCCESS STORY
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-text-heading mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-text-body mb-1">
                    <span className="font-semibold">Client:</span> {item.client}
                  </p>
                  <p className="text-sm text-text-body mb-4">
                    <span className="font-semibold">Business Type:</span>{" "}
                    {item.businessType}
                  </p>

                  <p className="text-text-body text-sm lg:text-base leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <p className="font-semibold text-text-heading text-sm mb-2">
                      Services Provided:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-primary p-4 mb-4 rounded">
                    <p className="text-sm text-text-body italic">
                      "{item.testimonial}"
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">
                          {item.initials}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-text-heading text-sm">
                            {item.author}
                          </span>
                          <div className="flex items-center gap-1 text-green-600">
                            <Check className="w-4 h-4" />
                            <span className="text-xs">Verified Client</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-text-body font-medium text-sm">
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small-screen nav (optional) */}
          <div className="flex gap-2 justify-center mt-4 sm:hidden">
            <button
              onClick={() => handleManualScroll("left")}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-2 justify-center mt-6">
            {caseStudies.map((_, index) => {
              // Calculate the real index (accounting for the cloned items)
              const realIndex =
                (currentIndex - 1 + caseStudies.length) % caseStudies.length;
              const isActive = index === realIndex;

              return (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(index + 1); // +1 because of the cloned item at the start
                    scrollToIndex(index + 1);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    isActive
                      ? "w-8 bg-primary"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

          {/* Inline CSS to hide scrollbar cross-browser (put in global CSS if you prefer) */}
          <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
      </section>
    </div>
  );
};

export default Body;
