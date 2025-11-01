import React from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

// Helper function to create URL-friendly slug from title
const createSlug = (title: string, id: number) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${id}-${slug}`;
};

const Body = () => {
  // Get blog posts with id from 5 to 10
  const caseStudies = blogPosts
    .filter((post) => post.id >= 5 && post.id <= 10)
    .map((post) => ({
      id: post.id,
      image: post.cardImage || post.mainImage,
      title: post.title,
      description: post.description,
      author: post.author,
      initials: post.author
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2),
      date: new Date(post.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      }),
    }));
  const scrollRef = useRef(null);

  const scrollByCard = (direction = "right") => {
    const el = scrollRef.current;
    if (!el) return;
    // width of the visible scroll area (one card width because cards are w-full)
    const cardWidth = el.clientWidth;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

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
          <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
            View all
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Featured Article Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          {/* Buttons (absolute, visible on desktop but also usable mobile) */}
          <button
            onClick={() => scrollByCard("left")}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:scale-105 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={() => scrollByCard("right")}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:scale-105 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Horizontal scroll container with snapping */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {caseStudies.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${createSlug(item.title, item.id)}`}
                className="snap-start flex-shrink-0 w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-shadow cursor-pointer"
                // add an aria role for accessibility
                role="group"
                aria-label={item.title}
              >
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-[350px] flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 lg:p-8">
                  <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    FEATURED
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-text-heading mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-text-body text-sm lg:text-base leading-relaxed mb-5 line-clamp-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">
                          {item.initials}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-text-heading">
                            {item.author}
                          </span>
                          <div className="flex items-center gap-1 text-green-600">
                            <Check className="w-4 h-4" />
                            <span className="text-xs">Verified writer</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-text-body font-medium text-sm">
                      {item.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Small-screen nav (optional) */}
          <div className="flex gap-2 justify-center mt-4 sm:hidden">
            <button
              onClick={() => scrollByCard("left")}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
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
