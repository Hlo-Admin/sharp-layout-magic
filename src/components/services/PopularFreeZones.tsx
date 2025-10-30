import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

type Zone = {
  title: string;
  links: string[];
  button: string;
};

type FreeZonesData = {
  title: string;
  zones: Zone[];
};

type Props = {
  data: FreeZonesData;
};

const FreeZones: React.FC<Props> = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        {/* Section Title */}
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          {data.title}
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.zones.map((zone, i) => (
            <div
              key={i}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Title */}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {zone.title}
                </h3>

                {/* Separator line with arrow on the right */}
                <div className="relative mt-2 w-full h-0.5 bg-[#197B7D]">
                  {/* Left dot */}
                  <span className="absolute -top-[3px] left-0 w-1.5 h-1.5 rounded-full bg-[#197B7D]"></span>
                  {/* Right arrow */}
                  <ArrowRight className="absolute -top-2 right-0 w-4 h-4 text-[#197B7D]" />
                </div>
              </div>

              {/* Links */}
              <ul className="space-y-2 text-gray-600 text-sm mb-5">
                {zone.links.map((link, j) => (
                  <li key={j} className="flex items-start gap-1">
                    <span className="text-sky-500 font-bold">→</span>
                    <span>{link}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="flex justify-start mt-auto relative">
                <button className="flex items-center justify-center gap-2 w-52 bg-white-50 text-gray-800 border border-[#F0BA1A] px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-100 transition">
                  {zone.button}
                  <ArrowUpRight size={16} className="text-[#F0BA1A]" />
                </button>
              </div>

              {/* Image positioned bottom-right corner */}
              <img
                src="/services/popular-freezone.png"
                alt="Freezone Logo"
                className="absolute bottom-0 right-0 h-24  object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeZones;
