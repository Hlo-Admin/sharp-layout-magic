import React from "react";

interface SemicircleSectionProps {
  data: {
    headline: string;
    subHeadline: string;
    buttonText: string;
    image: string;
  };
}

const SemicircleSection: React.FC<SemicircleSectionProps> = ({ data }) => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4">
            {data.headline}
          </h2>
          <p className="text-lg text-gray-700 mb-8">{data.subHeadline}</p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center mx-auto">
            {data.buttonText}
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
          </button>
        </div>

        {/* Semicircle Image */}
        <div className="flex justify-center">
          <img
            src={data.image}
            alt="Brand Registration Process"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SemicircleSection;
