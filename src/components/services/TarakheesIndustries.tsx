import React from "react";

const TarakheesIndustries = ({ data }) => {
  const { title, subtitle, industries } = data;

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        {/* Title */}
        <h1 className="inline-block bg-white border border-gray-100 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-black mb-10">{subtitle}</p>

        {/* Industry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-center max-w-4xl">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col space-y-1 text-black">
              <img
                src={industry.icon}
                alt={industry.title}
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <p className="text-sm font-medium w-24">{industry.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TarakheesIndustries;
