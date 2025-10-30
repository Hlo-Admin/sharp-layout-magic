import React from "react";

const EmpoweringBusinessesSection = () => {
  return (
    <div className="w-full bg-[#E1EFF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div>
          {/* Left Content Section */}
          <div className="space-y-4">
            {/* Main Heading Box */}
            <div className="mb-6">
              <h2 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-xl font-bold text-black uppercase tracking-wide shadow-sm">
                Empowering Businesses Igniting Growth
              </h2>
            </div>

            {/* Main Content Box with image inside */}
            <div className="bg-white rounded-2xl p-6 shadow-lg w-full overflow-hidden grid lg:grid-cols-3 gap-6 items-stretch">
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  What makes Go Kite PRO Business Services different from
                  others?
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  We provide tailor-made, full-service assistance with extensive
                  knowledge of the UAE business laws, making the process of
                  establishing business in the country smooth and compliant to
                  each of our clients.
                </p>

                {/* Additional Questions with Arrows */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-lg mt-0.5">→</span>
                    <p className="text-base text-blue-600 font-medium">
                      Do you help with both individual and corporate setups?
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-lg mt-0.5">→</span>
                    <p className="text-base text-blue-600 font-medium">
                      Can you handle documentation and government approvals?
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-lg mt-0.5">→</span>
                    <p className="text-base text-blue-600 font-medium">
                      Is a consultation available before starting the setup
                      process?
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Inside Container */}
              <div className="lg:col-span-1 h-full">
                <img
                  src="/aboutus/business-growth.jpg"
                  alt="Professional business consultation"
                  className="w-full h-full object-cover rounded-xl lg:rounded-none lg:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringBusinessesSection;
