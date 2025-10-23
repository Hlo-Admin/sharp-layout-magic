import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface VisaProcessingProps {
  data: {
    sectionIcon: string;
    sectionLabel: string;
    title: string;
    titleLine2: string;
    categories: Array<{
      image: string;
      title: string;
      overlay: boolean;
      description?: string;
      hasButton?: boolean;
    }>;
  };
}

const VisaProcessing: React.FC<VisaProcessingProps> = ({ data }) => {
  return (
    <div className="bg-black min-h-screen py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 ml-0 sm:ml-2 lg:ml-4 rounded-lg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <img src={data.sectionIcon} alt="Golden Visa" className="w-6 h-6" />
            <span>{data.sectionLabel}</span>
          </div>
          <div className="flex items-start justify-between">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              {data.title}
              <br />
              {data.titleLine2}
            </h1>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors">
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <button className="w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-colors">
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
          {data.categories.map((category, index) => (
            <div
              key={index}
              className={`relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer ${
                index === 1 ? "xl:col-span-2" : ""
              }`}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Yellow Overlay Card for Real Estate */}
              {category.overlay && (
                <div className="absolute inset-x-4 bottom-4 bg-yellow-400 rounded-xl p-6 z-10">
                  <h3 className="text-black font-bold text-lg mb-2">
                    {category.title}
                  </h3>
                  <p className="text-black text-sm mb-4">
                    {category.description}
                  </p>
                  <button className="flex items-center gap-2 text-black font-semibold text-sm hover:gap-3 transition-all">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Colored Overlay for specific cards */}
              {category && !category.overlay && (
                <div
                  className={`absolute inset-x-4 bottom-4 rounded-xl p-6 z-10`}
                >
                  <h3 className="text-white font-bold text-lg">
                    {category.title}
                  </h3>
                </div>
              )}

              {/* Default Title Overlay */}
              {!category.overlay && !category && (
                <div className="absolute inset-x-4 bottom-4 z-10">
                  <h3 className="text-white font-bold text-lg">
                    {category.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaProcessing;
