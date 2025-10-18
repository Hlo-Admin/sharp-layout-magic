import React from "react";

type WhyTrustUsData = {
  title: string;
  reasons: string[];
};

type Props = {
  data?: WhyTrustUsData;
};

const WhyTrustUs = ({ data }: Props) => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          {data.title}
        </h1>

        <ul className="space-y-4">
          {data.reasons.map((reason, index) => (
            <li key={index} className="flex gap-3 text-black items-start">
              <span className="font-bold mt-1">•</span>
              <span className="leading-relaxed">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyTrustUs;
