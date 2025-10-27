import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesDropdown = () => {
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1100px] bg-white rounded-lg shadow-2xl border border-gray-300 z-[9999] overflow-hidden">
      <div className="flex">
        {/* Left Column - Two Sections */}
        <div className="w-1/2 flex flex-col">
          {/* Top Section - Branding & Company Registration */}
          <div
            className="bg-[#f7c332] p-3 flex-1 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/service-card/top.png')" }}
          >
            <div className="relative z-10 max-w-[60%]">
              <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                Branding & Company Registration - Legal Licence
              </h3>
              <p className="text-xs text-black mb-3 leading-relaxed">
                We are keen on making processes easier, decreasing setup time,
                and making sure that they are fully compliant - and you can
                concentrate on growth.
              </p>
              <Link
                to="/brand-register"
                className="bg-black text-white w-fit px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                TALK TO AGENT
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Bottom Section - Shaping the Next Era */}
          <div
            className="bg-[#0f766e] p-3 flex-1 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/service-card/bottom.png')" }}
          >
            <div className="relative z-10 max-w-[60%]">
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                Shaping the Next Era of UAE Business
              </h3>
              <p className="text-xs text-white mb-3 leading-relaxed">
                We are keen on making processes easier, decreasing setup time,
                and making sure that they are fully compliant - and you can
                concentrate on growth.
              </p>
              <Link
                to="/about"
                className="bg-black w-fit text-white px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                ABOUT US
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Services List with Two Sub-columns */}
        <div className="w-1/2 bg-white p-3">
          <div className="flex gap-6">
            {/* Sub-column 1: Business Setup & Legal Services */}
            <div className="flex-1">
              <h4 className="text-sm font-bold text-black mb-3 uppercase tracking-wide">
                BUSINESS SETUP & <br />LEGAL SERVICES PAPERWORK
              </h4>
              <div className="space-y-2">
                {/* Brand Registration */}
                <Link
                  to="/brand-register"
                  className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/landingpage/service-icon-1.png"
                      alt="Brand Registration"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs mb-1">
                      Brand Registration
                    </h5>
                    <p className="text-xs text-gray-600">
                      Logo, Tradename, <br /> Real Estate, Domain
                    </p>
                  </div>
                </Link>

                {/* Government Approval */}
                <Link
                  to="/document-legal-service"
                  className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/landingpage/service-icon-2.png"
                      alt="Government Approval"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs mb-1">
                      Government Approval
                    </h5>
                    <p className="text-xs text-gray-600">
                      SIRA, TDRA, Civil Defense, UAE Municipality Services,
                      Paper Work
                    </p>
                  </div>
                </Link>

                {/* Business Legal Attestation */}
                <Link
                  to="/document-legal-service"
                  className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/landingpage/service-icon-3.png"
                      alt="Business Legal Attestation"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs mb-1">
                      Business Legal Attestation
                    </h5>
                    <p className="text-xs text-gray-600">
                      Personal, Education, Commercial, Apostille Certification
                    </p>
                  </div>
                </Link>

                {/* Tax Registration */}
                <Link
                  to="/tax"
                  className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/landingpage/service-icon-4.png"
                      alt="Tax Registration"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs mb-1">
                      Tax Registration
                    </h5>
                    <p className="text-xs text-gray-600">
                      FTA, Corporate Tax, VAT Registration, Application
                    </p>
                  </div>
                </Link>
              </div>

              {/* Business Setup Guide */}
              <div className="mt-4">
                <h4 className="font-bold text-black text-xs mb-2">
                  Business Setup Guide
                </h4>
                <div className="space-y-1">
                  <Link
                    to="/document-legal-service"
                    className="block text-blue-600 text-xs hover:underline"
                  >
                    Startup, MSME Business Paperwork
                  </Link>
                  <Link
                    to="/document-legal-service"
                    className="block text-blue-600 text-xs hover:underline"
                  >
                    Attestation Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Sub-column 2: Visa, Application, Court */}
            <div className="flex-1">
              <h4 className="text-sm font-bold text-black mb-3 uppercase tracking-wide">
                VISA, APPLICATION, <br /> COURT
              </h4>
              <div className="space-y-2">
                {/* Typing & Translation */}
                <Link
                  to="/document-legal-service"
                  className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/landingpage/service-icon-5.png"
                      alt="Typing & Translation"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs mb-1">
                      Typing & Translation
                    </h5>
                    <p className="text-xs text-gray-600">
                      MOA, POA, Legal Translation, Official Translation, Normal
                      Translation
                    </p>
                  </div>
                </Link>

                {/* Visa Services */}
                <Link
                  to="/visa-immigration"
                  className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/landingpage/service-icon-6.png"
                      alt="Visa Services"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs mb-1">
                      Visa Services
                    </h5>
                    <p className="text-xs text-gray-600">
                      Golden VISA, Investor VISA, Family VISA, Employment
                    </p>
                  </div>
                </Link>

                {/* Legal Support */}
                <Link
                  to="/legal-document-services"
                  className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/landingpage/service-icon-7.png"
                      alt="Legal Support"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs mb-1">
                      Legal Support
                    </h5>
                    <p className="text-xs text-gray-600">
                      Case Registration, Complainant Filing, Rental Dispute,
                      Court Memo
                    </p>
                  </div>
                </Link>

                {/* Office Space & Real Estate */}
                <Link
                  to="/office-space"
                  className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/landingpage/service-icon-8.png"
                      alt="Office Space & Real Estate"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs mb-1">
                      Office Space & Real Estate
                    </h5>
                    <p className="text-xs text-gray-600">
                      Commercial, Business, <br /> professional
                    </p>
                  </div>
                </Link>
              </div>

              {/* Other Services */}
              <div className="mt-4">
                <h4 className="font-bold text-black text-xs mb-2">
                  Other Services
                </h4>
                <div className="space-y-1">
                  <Link
                    to="/document-legal-service"
                    className="block text-blue-600 text-xs hover:underline"
                  >
                    Share & Business Documentation
                  </Link>
                  <Link
                    to="/additional-service"
                    className="block text-blue-600 text-xs hover:underline"
                  >
                    Additional Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
