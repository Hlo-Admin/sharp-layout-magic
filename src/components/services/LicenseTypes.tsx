import React from "react";

type License = {
  icon: string;
  title: string;
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

        <div className="w-1/2 space-y-6">
          {licenses.map((license, index) => (
            <div key={index} className="flex items-start gap-4 p-5">
              <div className="flex-shrink-0">
                <img src={license.icon} alt={license.title} className="w-16 h-20" />
              </div>
              <div className="flex-1 pt-5">
                <h3 className="font-bold text-gray-900 mb-1 text-base">
                  {license.title}
                </h3>
                <p className="text-sm text-gray-600">{license.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseTypes;
