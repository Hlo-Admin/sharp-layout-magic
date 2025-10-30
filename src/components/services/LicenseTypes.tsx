import React from "react";

type License = {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
};

type LicenseTypesData = {
  title: string;
  licenses: License[];
};

type Props = {
  data: LicenseTypesData;
};

const LicenseTypes: React.FC<Props> = ({ data }) => {
  const { title, licenses } = data;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-8">
          {title}
        </h1>

        <div className="space-y-2">
          {licenses.map((license, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 py-6 border-b last:border-b-0 border-gray-200"
            >
              {/* Left: icon + title + subtitle */}
              <div className="flex items-start gap-4 md:w-1/2 w-full">
                <div className="flex-shrink-0">
                  <img
                    src={license.icon}
                    alt={license.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {license.title}
                  </h3>
                  {license.subtitle && (
                    <p className="text-sm text-gray-600">{license.subtitle}</p>
                  )}
                </div>
              </div>

              {/* Right: description */}
              <div className="md:w-1/2 w-full">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {license.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseTypes;
