import React from "react";
import { Button } from "@/components/ui/button";

const LegalComplaintService = () => {
  return (
    <>
      {/* Main Container with Black Background */}
      <section className="bg-black py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 ml-0 sm:ml-2 lg:ml-4 rounded-lg">
        <div className="max-w-7xl mx-auto">
          {/* First Card - Our Legal Services */}
          <div className="bg-black mb-6 sm:mb-8">
            <div className="text-left mb-8 sm:mb-10 lg:mb-12">
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">
                WHY CHOOSE US LEGAL SERVICE IN DUBAI
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                Our Legal Services in Dubai
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {/* Card 1 - Complaint Filing Services */}
              <div className="relative overflow-hidden rounded-lg h-[450px] sm:h-96">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-500">
                  <img
                    src="/legal/1.jpg"
                    alt="Lady Justice statue"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-yellow-500 rounded-t-lg">
                  <h3 className="text-black text-base sm:text-lg font-bold mb-2 sm:mb-3">
                    Complaint Filing Services
                  </h3>
                  <p className="text-black text-xs mb-3 sm:mb-4 leading-relaxed">
                    The process of filing a complaint with police or prosecution
                    authorities in Dubai is a legal process that needs proper
                    documentation, legal knowledge, and following the official
                    procedures to the end.
                  </p>
                  <Button className="bg-[#3790ad] text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full w-full text-center">
                    Apply Now →
                  </Button>
                </div>
              </div>

              {/* Card 2 - Expert Case Registration */}
              <div className="relative overflow-hidden rounded-lg h-[300px] sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400">
                  <img
                    src="/legal/2.jpg"
                    alt="Justice scales"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-base sm:text-lg font-bold">
                    Expert Case Registration Support & Advice
                  </h3>
                </div>
              </div>

              {/* Card 3 - Court Home Drafting */}
              <div className="relative overflow-hidden rounded-lg h-[300px] sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-900 to-amber-950">
                  <img
                    src="/legal/3.jpg"
                    alt="Legal documents and gavel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-base sm:text-lg font-bold">
                    Court Home Drafting Services
                  </h3>
                </div>
              </div>

              {/* Card 4 - Assist Dispute Center */}
              <div className="relative overflow-hidden rounded-lg h-[300px] sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-600 to-yellow-700">
                  <img
                    src="/legal/4.jpg"
                    alt="Police tape"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-base sm:text-lg font-bold">
                    Assist Dispute Center Services
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card - Complaint Filing Services Details */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-left mb-6 sm:mb-8 lg:mb-12">
              Complaint Filing Services
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              {/* Legal Complaint */}
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 border border-gray-200 rounded-lg bg-white">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/legal/icon-1.png"
                    alt="Complaint Filing"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <div>
                  <h3 className="text-[#3790ad] text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    Legal Complaint
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>
                        Lodging a complaint in the right legal channels.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>
                        Be it personal, commercial, or criminal issues.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Our Complaint Filing Services */}
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 border border-gray-200 rounded-lg bg-white">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/legal/icon-2.png"
                    alt="Complaint Filing"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <div>
                  <h3 className="text-[#3790ad] text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    Our Complaint Filing Services
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>
                        Assistance for individuals, companies, and legal
                        representatives in criminal, civil, or commercial
                        complaints.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>
                        Whether you are a resident, visitor, or corporate
                        entity, GoKite has you covered.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Process */}
            <div className="bg-white border-t-2 border-gray-200 pt-6 sm:pt-8">
              <p className="text-gray-700 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                We provide complete assistance in filing complaints to the Dubai
                Police and the Public Prosecution without any legal issues or
                inconvenience.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                    1. Drafting Complaints
                  </h4>
                  <ul className="space-y-2 ml-3 sm:ml-4 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Write formal complaints according to UAE laws.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Translate content into Arabic for official submission.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                    2. Reporting to Police/Prosecution Authorities
                  </h4>
                  <ul className="space-y-2 ml-3 sm:ml-4 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Report grievance to the appropriate legal authority.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Ensure all supporting documents are legal and
                        procedural.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                    3. Follow Up and Coordination
                  </h4>
                  <ul className="space-y-2 ml-3 sm:ml-4 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Track the complaint and report regularly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Assist with documents, clarifications, or additional
                        information.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">
                  Advantages of Our Complaint Filing in Dubai
                </h4>
                <ul className="space-y-2 ml-3 sm:ml-4 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Legal Compliance: All complaints filed as per UAE laws.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Fast & Correct Filing: Documents submitted on time.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      End to End Support: Complete assistance from drafting to
                      follow-up.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalComplaintService;
