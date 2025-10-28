import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServicesDropdownProps {
  onClose?: () => void;
}

const ServicesDropdown = ({ onClose }: ServicesDropdownProps) => {
  return (
    <div className="static md:absolute top-full left-1/2 md:transform md:-translate-x-1/2 mt-2 w-full md:w-[95%] lg:w-[800px] xl:w-[900px] 2xl:w-[1100px] bg-white rounded-lg shadow-2xl border border-gray-300 z-[9999] overflow-hidden max-h-[70vh] md:max-h-[85vh] overflow-y-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Two Sections */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Top Section - Branding & Company Registration */}
          <div
            className="bg-[#f7c332] p-3 md:p-1.5 lg:p-2 xl:p-3 flex-1 relative bg-cover bg-center bg-no-repeat min-h-[120px] md:min-h-0"
            style={{ backgroundImage: "url('/service-card/top.png')" }}
          >
            <div className="relative z-10 max-w-full md:max-w-[60%]">
              <h3 className="text-sm md:text-sm lg:text-base xl:text-lg font-bold text-black mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2 leading-tight">
                Branding & Company Registration - Legal Licence
              </h3>
              <p className="text-xs md:text-[9px] lg:text-[10px] xl:text-xs text-black mb-2 md:mb-1.5 lg:mb-2 xl:mb-3 leading-relaxed">
                We are keen on making processes easier, decreasing setup time,
                and making sure that they are fully compliant - and you can
                concentrate on growth.
              </p>
              <Link
                to="/brand-register"
                onClick={() => onClose?.()}
                className="bg-black text-white w-fit px-2.5 md:px-2 lg:px-2.5 xl:px-3 py-1 md:py-0.5 lg:py-1 xl:py-1.5 rounded-md text-xs md:text-[9px] lg:text-[10px] xl:text-xs font-medium flex items-center gap-1.5 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-800 transition-colors"
              >
                TALK TO AGENT
                <ArrowRight className="w-3 h-3 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3" />
              </Link>
            </div>
          </div>

          {/* Bottom Section - Shaping the Next Era */}
          <div
            className="bg-[#0f766e] p-3 md:p-1.5 lg:p-2 xl:p-3 flex-1 relative bg-cover bg-center bg-no-repeat min-h-[120px] md:min-h-0"
            style={{ backgroundImage: "url('/service-card/bottom.png')" }}
          >
            <div className="relative z-10 max-w-full md:max-w-[60%]">
              <h3 className="text-sm md:text-sm lg:text-base xl:text-lg font-bold text-white mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2 leading-tight">
                Shaping the Next Era of UAE Business
              </h3>
              <p className="text-xs md:text-[9px] lg:text-[10px] xl:text-xs text-white mb-2 md:mb-1.5 lg:mb-2 xl:mb-3 leading-relaxed">
                We are keen on making processes easier, decreasing setup time,
                and making sure that they are fully compliant - and you can
                concentrate on growth.
              </p>
              <Link
                to="/about"
                onClick={() => onClose?.()}
                className="bg-black w-fit text-white px-2.5 md:px-2 lg:px-2.5 xl:px-3 py-1 md:py-0.5 lg:py-1 xl:py-1.5 rounded-md text-xs md:text-[9px] lg:text-[10px] xl:text-xs font-medium flex items-center gap-1.5 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-800 transition-colors"
              >
                ABOUT US
                <ArrowRight className="w-3 h-3 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Services List with Two Sub-columns */}
        <div className="w-full md:w-1/2 bg-white p-3 md:p-1.5 lg:p-2 xl:p-3">
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4 xl:gap-6">
            {/* Sub-column 1: Business Setup & Legal Services */}
            <div className="flex-1">
              <h4 className="text-xs md:text-[10px] lg:text-xs xl:text-sm font-bold text-black mb-2 md:mb-1.5 lg:mb-2 xl:mb-3 uppercase tracking-wide leading-tight">
                BUSINESS SETUP & <br />
                LEGAL SERVICES PAPERWORK
              </h4>
              <div className="space-y-2 md:space-y-1 lg:space-y-1.5 xl:space-y-2">
                {/* Brand Registration */}
                <Link
                  to="/brand-register"
                  onClick={() => onClose?.()}
                  className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="/landingpage/service-icon-1.png"
                      alt="Brand Registration"
                      className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5">
                      Brand Registration
                    </h5>
                    <p className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-600">
                      Logo, Tradename, Real Estate, Domain
                    </p>
                  </div>
                </Link>

                {/* Government Approval */}
                <Link
                  to="/document-legal-service"
                  onClick={() => onClose?.()}
                  className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="/landingpage/service-icon-2.png"
                      alt="Government Approval"
                      className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5">
                      Government Approval
                    </h5>
                    <p className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-600">
                      SIRA, TDRA, Civil Defense, UAE Municipality Services,
                      Paper Work
                    </p>
                  </div>
                </Link>

                {/* Business Legal Attestation */}
                <Link
                  to="/document-legal-service"
                  onClick={() => onClose?.()}
                  className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="/landingpage/service-icon-3.png"
                      alt="Business Legal Attestation"
                      className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5">
                      Business Legal Attestation
                    </h5>
                    <p className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-600">
                      Personal, Education, Commercial, Apostille Certification
                    </p>
                  </div>
                </Link>

                {/* Tax Registration */}
                <Link
                  to="/tax"
                  onClick={() => onClose?.()}
                  className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="/landingpage/service-icon-4.png"
                      alt="Tax Registration"
                      className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5">
                      Tax Registration
                    </h5>
                    <p className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-600">
                      FTA, Corporate Tax, VAT Registration, Application
                    </p>
                  </div>
                </Link>
              </div>

              {/* Business Setup Guide */}
              <div className="mt-3 md:mt-2 lg:mt-3 xl:mt-4">
                <h4 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2">
                  Business Setup Guide
                </h4>
                <div className="space-y-1 md:space-y-0.5">
                  <Link
                    to="/document-legal-service"
                    onClick={() => onClose?.()}
                    className="block text-blue-600 text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs hover:underline"
                  >
                    Startup, MSME Business Paperwork
                  </Link>
                  <Link
                    to="/document-legal-service"
                    onClick={() => onClose?.()}
                    className="block text-blue-600 text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs hover:underline"
                  >
                    Attestation Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Sub-column 2: Visa, Application, Court */}
            <div className="flex-1">
              <h4 className="text-xs md:text-[10px] lg:text-xs xl:text-sm font-bold text-black mb-2 md:mb-1.5 lg:mb-2 xl:mb-3 uppercase tracking-wide leading-tight">
                VISA, APPLICATION, <br /> COURT
              </h4>
              <div className="space-y-2 md:space-y-1 lg:space-y-1.5 xl:space-y-2">
                {/* Typing & Translation */}
                <Link
                  to="/document-legal-service"
                  onClick={() => onClose?.()}
                  className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="/landingpage/service-icon-5.png"
                      alt="Typing & Translation"
                      className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5">
                      Typing & Translation
                    </h5>
                    <p className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-600">
                      MOA, POA, Legal Translation, Official Translation, Normal
                      Translation
                    </p>
                  </div>
                </Link>

                {/* Visa Services */}
                <Link
                  to="/visa-immigration"
                  onClick={() => onClose?.()}
                  className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="/landingpage/service-icon-6.png"
                      alt="Visa Services"
                      className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5">
                      Visa Services
                    </h5>
                    <p className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-600">
                      Golden VISA, Investor VISA, Family VISA, Employment
                    </p>
                  </div>
                </Link>

                {/* Legal Support */}
                <Link
                  to="/legal-document-services"
                  onClick={() => onClose?.()}
                  className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="/landingpage/service-icon-7.png"
                      alt="Legal Support"
                      className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5">
                      Legal Support
                    </h5>
                    <p className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-600">
                      Case Registration, Complainant Filing, Rental Dispute,
                      Court Memo
                    </p>
                  </div>
                </Link>

                {/* Office Space & Real Estate */}
                <Link
                  to="/office-space"
                  onClick={() => onClose?.()}
                  className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="/landingpage/service-icon-8.png"
                      alt="Office Space & Real Estate"
                      className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5">
                      Office Space & Real Estate
                    </h5>
                    <p className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs text-gray-600">
                      Commercial, Business, professional
                    </p>
                  </div>
                </Link>
              </div>

              {/* Other Services */}
              <div className="mt-3 md:mt-2 lg:mt-3 xl:mt-4">
                <h4 className="font-bold text-black text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2">
                  Other Services
                </h4>
                <div className="space-y-1 md:space-y-0.5">
                  <Link
                    to="/document-legal-service"
                    onClick={() => onClose?.()}
                    className="block text-blue-600 text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs hover:underline"
                  >
                    Share & Business Documentation
                  </Link>
                  <Link
                    to="/additional-service"
                    onClick={() => onClose?.()}
                    className="block text-blue-600 text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs hover:underline"
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
