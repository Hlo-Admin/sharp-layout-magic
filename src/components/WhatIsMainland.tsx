import React from "react";
import { ArrowRight } from "lucide-react";

const WhatIsMainland = () => {
  const companyTypes = [
    {
      name: "Taraklness Company Formation",
      description: "Get your UAE Business Registered in 24hrs",
    },
    {
      name: "Freezone Company Formation",
      description: "Get your UAE Business Registered in 24hrs",
    },
    {
      name: "SME Company Formation",
      description: "Get your UAE Business Registered in 24hrs",
    },
    {
      name: "Offshore Company Formation",
      description: "Get your UAE Business Registered in 24hrs",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm">
                WHAT IS MAINLAND COMPANY?
              </h1>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                A mainland company is a company which is licensed by the
                Department of Economic Development (DED) of a particular
                emirate, e.g. Dubai, Abu Dhabi or Sharjah. Mainland businesses
                can be located anywhere within the UAE and are also capable of
                direct trading with the local market without any restrictions as
                opposed to the free zone companies.
              </p>

              <p>
                The mainland in the UAE provides one of the most vibrant and
                business friendly environment in the region. Having a wide
                customer base, little trade barriers, and the chance to
                collaborate with the government and the private sector, the
                establishment of the mainland company is the best option that an
                entrepreneur could choose to have a firm presence in the local
                and international market.
              </p>

              <p>
                Go Kite Business Setup Services is a company formation expert in
                the UAE with extensive experience in mainland company formation,
                end-to-end support to have a smooth and compliant business set
                up experience.
              </p>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {companyTypes.map((type, index) => (
                <div
                  key={index}
                  className="group p-6 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-base">
                        {type.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMainland;
