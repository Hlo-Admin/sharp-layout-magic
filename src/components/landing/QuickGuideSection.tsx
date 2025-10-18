import React, { useRef, useState, useEffect } from "react";

interface Card {
  image: string;
  title: string;
}

interface QuickGuideSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  cards: Card[];
}

export default function UAEBusinessGuide({
  title,
  subtitle,
  description,
  cards,
}: QuickGuideSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // Pixels per frame

    const scroll = () => {
      if (!isHovered && !isDragging && scrollContainer) {
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
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-white py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3">
          <span className="font-normal text-gray-800">{title}</span>
        </h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
          {subtitle}
        </h1>
        <p className="text-sm sm:text-base text-black max-w-full lg:max-w-4xl">
          {description}
        </p>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-5 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none pb-4 -ml-40 pr-40"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "auto",
          }}
        >
          <div className="flex gap-5" style={{ width: "max-content" }}>
            {/* Duplicate cards for seamless infinite loop */}
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group flex-shrink-0 w-72 h-96"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  draggable="false"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-semibold text-lg leading-snug">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
