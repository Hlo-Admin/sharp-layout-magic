import React from "react";

interface TrustedSectionProps {
  data: {
    sectionTitle: string;
    mainTitle: string;
    description: string;
    links: Array<{
      text: string;
      href: string;
    }>;
    stats: Array<{
      icon: string; // Should be a path to an SVG/icon
      title: string;
      description: string;
    }>;
  };
}

const TrustedSection: React.FC<TrustedSectionProps> = ({ data }) => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <p className="text-[#487b99] text-sm font-semibold uppercase tracking-wide">
              {data.sectionTitle}
            </p>
            <h2 className="text-[2.3rem] sm:text-[2.7rem] lg:text-[2.8rem] font-bold text-gray-900 leading-snug">
              {data.mainTitle}
            </h2>
            <p className="text-gray-600 text-base lg:text-[1.15rem] leading-relaxed">
              {data.description}
            </p>
            <div className="space-y-3 mt-8">
              {data.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center text-[#487b99] hover:text-blue-700 font-medium text-[1rem] leading-tight transition-colors"
                >
                  {link.text}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start bg-white p-6">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <img src={stat.icon} alt={stat.title} className="w-12 h-12" />
                </div>
                <h3 className="text-[1.15rem] font-bold text-gray-900 mb-1">
                  {stat.title}
                </h3>
                <p className="text-[0.95rem] text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
