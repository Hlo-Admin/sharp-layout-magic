import React from "react";

const Steps = ({ data  }) => {
  return (
    <section className="py-16 bg-[#dfedf2]">
      <div className="container mx-auto px-4">
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          {data.title}
        </h1>

        <ol className="space-y-4">
          {data.steps.map((step, index) => (
            <li key={index} className="flex gap-4 text-text-body">
              <span className="font-semibold text-black min-w-[24px]">
                {index + 1}.
              </span>
              <span className="leading-relaxed text-black">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Steps;
