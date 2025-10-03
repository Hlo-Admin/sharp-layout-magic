import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "UAE Market Access",
      description:
        "Be able to operate within the UAE without any restrictions.",
    },
    {
      title: "No Trading Restrictions",
      description:
        "Do business with the government and the private customers in the UAE.",
    },
    {
      title: "Several Office Locations",
      description: "Select between flexible offices in various emirates.",
    },
    {
      title: "Unlimited Visa Quota",
      description:
        "Mainland companies are allowed to apply to an unlimited amount of employee visas (depending on office space).",
    },
    {
      title: "Freedom of Trade",
      description: "the right to trade locally and internationally.",
    },
    {
      title: "Flexible Business",
      description:
        "Carry on a broad variety of commercial, professional or industrial operations.",
    },
    {
      title: "Eligibility to Government Contracts",
      description:
        "Get involved in profitable government tenders and contracts.",
    },
    {
      title: "Repatriation of Profits",
      description: "Capital and profits may be fully repatriated.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          BENEFITS OF MAINLAND COMPANY FORMATION IN DUBAI
        </h1>

        <div className="flex gap-12 items-start">
          {/* Left side - Benefits list */}
          <div className="flex-1 space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">
                    {benefit.title}
                  </span>
                  <span className="text-gray-700">: {benefit.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="flex-shrink-0 w-96 bg-gray-100 rounded-2xl p-6">
            <img
              src="/Benefits.png"
              alt="Benefits of Mainland Company Formation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
