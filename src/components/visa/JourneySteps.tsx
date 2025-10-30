import React from "react";
import { Check } from "lucide-react";

/**
 * Add Tailwind to project. Place the CSS below into your global stylesheet (globals.css).
 * This component expects Tailwind to be configured.
 *
 * Replace /mnt/data/4f0520a6-3b71-4486-b43c-60efa9fee45b.png with your real local image
 * or remote URL if needed.
 */

const JourneySteps = ({ data }) => {
  const journeySteps = data;
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: complex image/card layout */}
          <div className="relative flex items-start justify-center">
            {/* card group wrapper (gives the exact layout proportions from screenshot) */}
            <div className="relative w-full max-w-[460px] h-[520px]">
              {/* Tall building card on the right of the left column */}
              <div className="absolute right-0 top-[90px] w-[230px] h-[360px] rounded-2xl overflow-hidden shadow-md border border-transparent transform translate-x-6">
                <img
                  src={journeySteps.images.main2}
                  alt="building"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top-left small image (rounded with thin inner white border & outer yellow accent) */}
              <div className="absolute left-0 top-0 w-[220px] h-[370px] rounded-2xl overflow-hidden border-[3px] border-white shadow-sm">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={journeySteps.images.main1}
                    alt="business meeting"
                    className="w-full h-full object-cover"
                  />
                  {/* thin rounded yellow accent outline */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-95 mix-blend-normal"></div>
                </div>
              </div>

              {/* Yellow experience badge overlapping top-right of small image */}
              <div className="absolute left-[270px] top-[-6px] translate-x-0 z-20">
                <div className="bg-[#f0ba1a] rounded-2xl px-5 py-4 min-w-[110px] flex flex-col items-center justify-center shadow-md border border-yellow-500">
                  <div className="text-white font-extrabold text-2xl leading-none">
                    {journeySteps.experience.years}
                  </div>
                  <div className="text-xs text-white/95 mt-1">
                    {journeySteps.experience.text}
                  </div>
                </div>
              </div>

              {/* Circular stamp at bottom-left */}
              <div className="absolute left-0 bottom-0 z-10">
                <div className="w-[116px] h-[116px] relative">
                  <img
                    src={journeySteps.images.badge}
                    alt="Immigration Agency Worldwide Access"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* subtle rounded outline behind whole left area (to mimic screenshot subtle frame) */}
              <div className="absolute -inset-3 border rounded-3xl pointer-events-none border-transparent"></div>
            </div>
          </div>

          {/* RIGHT: content (kept your structure and styling, updated slight spacing) */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-[#3aa2d1] text-sm font-medium mb-4">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {journeySteps.sectionLabel}
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
                {journeySteps.title}
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                {journeySteps.subtitle}
              </h2>

              <p className="text-gray-600 text-base max-w-xl">
                {journeySteps.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {journeySteps.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#f0ba1a] rounded-full flex items-center justify-center flex-shrink-0">
                      <img src={card.icon} alt="" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {card.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Check className="w-4 h-4 text-yellow-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-white border-2 border-yellow-400 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-400 hover:text-white transition-colors flex items-center gap-2">
                {journeySteps.buttonText}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <div className="text-sm">
                <div className="text-gray-500 mb-1">
                  {journeySteps.urgentHelp.text}
                </div>
                <div className="font-bold text-gray-900 text-lg">
                  {journeySteps.urgentHelp.phone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
