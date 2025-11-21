import React from "react";

const BusinessSetupSection = ({ data }) => {
  const { title,title2, description, bulletPoints, image, features } = data;

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        {/* Title */}
        

        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
          {title2}
        </h1>
        <h2 className="text-xl lg:text-2xl font-semibold text-black mb-4">
          {title}
        </h2>
            <p className="text-lg text-black leading-relaxed">{description}</p>

            {/* Bullet Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-black list-disc list-inside">
              {bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 lg:w-[500px] w-full bg-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <img
              src={image}
              alt="Business Setup"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((item, index) => (
    <div
      key={index}
      className="flex justify-between items-center bg-white border border-gray-200 p-6 rounded-2xl shadow-sm"
    >
      {/* Left Content */}
      <div className="flex-1 pr-4">
        <h3 className="text-black text-xl font-semibold mb-1">
          {item.title}
        </h3>
        <p className="text-black text-md leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Right Icon (Centered Vertically) */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <img
          src={item.icon}
          alt={item.title}
          className="w-24 h-24 object-contain"
        />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default BusinessSetupSection;
