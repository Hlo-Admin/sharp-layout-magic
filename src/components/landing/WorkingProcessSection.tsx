import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Card {
  image: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
}

interface CTAButton {
  text: string;
  href: string;
}

interface WorkingProcessSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  cards: Card[];
  ctaButton: CTAButton;
}

export default function StandardWorkingProcess({
  title,
  subtitle,
  features,
  cards,
  ctaButton,
}: WorkingProcessSectionProps) {
  return (
    <div className="bg-white pt-8 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-3xl">{subtitle}</p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Feature List */}
          <div className="lg:col-span-4 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#213070] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#546197] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image Cards */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#F5F5F5] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full rounded-xl object-cover aspect-video"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-3 pt-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                      <button className="text-[#53B0F5] font-semibold text-sm hover:text-cyan-600 transition-colors flex items-center gap-1 group self-start">
                        {card.linkText}
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            {ctaButton.text}
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
      </div>
    </div>
  );
}
