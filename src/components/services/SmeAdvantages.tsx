import React from "react";

type Benefit = {
  title: string;
  description: string;
};

type BenefitsData = {
  title: string;
  benefits: Benefit[];
  image: string;
};

type Props = {
  data: BenefitsData;
};

const Benefits: React.FC<Props> = ({ data }) => {
  const { title, benefits, image } = data;

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        <h1 className="inline-block bg-white border border-gray-100 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          {title}
        </h1>

        {/* Responsive layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Benefits list */}
          <div className="flex-1 space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-black mt-2"></div>
                <div>
                  <span className="text-black font-medium">
                    {benefit.title}
                  </span>
                  <span className="text-black"> {benefit.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="flex-shrink-0 lg:w-[300px] w-full bg-gray-100 rounded-2xl">
            <img
              src={image}
              alt="Benefits of Mainland Company Formation"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
