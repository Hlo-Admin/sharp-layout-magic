import React from "react";

type Benefit = {
  title: string;
  description: string;
};

type MainlandBenefitsData = {
  title: string;
  benefits: Benefit[];
  image: string;
};

type Props = {
  data: MainlandBenefitsData;
};

const MainlandBenefits: React.FC<Props> = ({ data }) => {
  const { title, benefits, image } = data;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          {title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: bullet list */}
          <div className="flex-1 space-y-4">
            {benefits?.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-black mt-2"></div>
                <p className="text-base text-gray-900">
                  <span className="font-semibold">{benefit.title}</span>
                  <span> {benefit.description}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Right: image */}
          <div className="flex-shrink-0 w-full lg:w-[360px]">
            <div className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <img
                src={image}
                alt="Mainland benefits illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainlandBenefits;
