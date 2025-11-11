import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServicesDropdownProps {
  onClose?: () => void;
}

interface ServiceItem {
  to: string;
  icon: string;
  title: string;
  description: string;
}

interface LinkItem {
  to: string;
  label: string;
}

interface PromotionalCard {
  bgColor: string;
  bgImage: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  textColor: string;
}

const ServicesDropdown = ({ onClose }: ServicesDropdownProps) => {
  const promotionalCards: PromotionalCard[] = [
    {
      bgColor: "bg-[#f7c332]",
      bgImage: "/service-card/top.png",
      title: "Branding & Company Registration - Legal Licence",
      description:
        "We are keen on making processes easier, decreasing setup time, and making sure that they are fully compliant - and you can concentrate on growth.",
      buttonText: "TALK TO AGENT",
      buttonLink: "/brand-register",
      textColor: "text-black",
    },
    {
      bgColor: "bg-[#0f766e]",
      bgImage: "/service-card/bottom.png",
      title: "Shaping the Next Era of UAE Business",
      description:
        "We are keen on making processes easier, decreasing setup time, and making sure that they are fully compliant - and you can concentrate on growth.",
      buttonText: "ABOUT US",
      buttonLink: "/about",
      textColor: "text-white",
    },
  ];

  const businessSetupServices: ServiceItem[] = [
    {
      to: "/brand-register",
      icon: "/landingpage/service-icon-1.png",
      title: "Brand Registration",
      description: "Logo, Tradename, Real Estate, Domain",
    },
    {
      to: "/document-legal-service",
      icon: "/landingpage/service-icon-2.png",
      title: "Government Approval",
      description:
        "SIRA, TDRA, Civil Defense, UAE Municipality Services, Paper Work",
    },
    {
      to: "/document-legal-service",
      icon: "/landingpage/service-icon-3.png",
      title: "Business Legal Attestation",
      description: "Personal, Education, Commercial, Apostille Certification",
    },
    {
      to: "/tax",
      icon: "/landingpage/service-icon-4.png",
      title: "Tax Registration",
      description: "FTA, Corporate Tax, VAT Registration, Application",
    },
  ];

  const visaApplicationServices: ServiceItem[] = [
    {
      to: "/document-legal-service",
      icon: "/landingpage/service-icon-5.png",
      title: "Typing & Translation",
      description:
        "MOA, POA, Legal Translation, Official Translation, Normal Translation",
    },
    {
      to: "/visa-immigration",
      icon: "/landingpage/service-icon-6.png",
      title: "Visa Services",
      description: "Golden VISA, Investor VISA, Family VISA, Employment",
    },
    {
      to: "/legal-document-services",
      icon: "/landingpage/service-icon-7.png",
      title: "Legal Support",
      description:
        "Case Registration, Complainant Filing, Rental Dispute, Court Memo",
    },
    {
      to: "/office-space",
      icon: "/landingpage/service-icon-8.png",
      title: "Office Space & Real Estate",
      description: "Commercial, Business, professional",
    },
  ];

  const businessSetupLinks: LinkItem[] = [
    {
      to: "/tax",
      label: "Startup, MSME Business Paperwork",
    },
    { to: "/document-legal-service", label: "Attestation Services" },
  ];

  const otherServicesLinks: LinkItem[] = [
    { to: "/document-legal-service", label: "Share & Business Documentation" },
    { to: "/additional-service", label: "Additional Services" },
  ];

  const renderServiceItem = (service: ServiceItem) => (
    <Link
      key={service.title}
      to={service.to}
      onClick={() => onClose?.()}
      className="flex items-start gap-2 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-50 p-1 md:p-0.5 rounded transition-colors"
    >
      <div className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
        <img
          src={service.icon}
          alt={service.title}
          className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
        />
      </div>
      <div>
        <h5
          className="font-bold text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-0.5"
          style={{ color: "#212f70" }}
        >
          {service.title}
        </h5>
        <p
          className="text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs"
          style={{ color: "#546196" }}
        >
          {service.description}
        </p>
      </div>
    </Link>
  );

  const renderLinkSection = (title: string, links: LinkItem[]) => (
    <div className="mt-3 md:mt-2 lg:mt-3 xl:mt-4">
      <h4
        className="font-bold text-xs md:text-[9px] lg:text-[10px] xl:text-xs mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2"
        style={{ color: "#212f70" }}
      >
        {title}
      </h4>
      <div className="space-y-1 md:space-y-0.5">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={() => onClose?.()}
            className="block text-blue-600 text-[10px] md:text-[8px] lg:text-[9px] xl:text-xs hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  const renderPromotionalCard = (card: PromotionalCard) => (
    <div
      key={card.title}
      className={`${card.bgColor} p-3 md:p-1.5 lg:p-2 xl:p-3 flex-1 relative bg-cover bg-center bg-no-repeat min-h-[120px] md:min-h-0`}
      style={{ backgroundImage: `url('${card.bgImage}')` }}
    >
      <div className="relative z-10 max-w-full md:max-w-[60%]">
        <h3
          className={`text-sm md:text-sm lg:text-base xl:text-lg font-bold ${card.textColor} mb-1.5 md:mb-1 lg:mb-1.5 xl:mb-2 leading-tight`}
        >
          {card.title}
        </h3>
        <p
          className={`text-xs md:text-[9px] lg:text-[10px] xl:text-xs ${card.textColor} mb-2 md:mb-1.5 lg:mb-2 xl:mb-3 leading-relaxed`}
        >
          {card.description}
        </p>
        <Link
          to={card.buttonLink}
          onClick={() => onClose?.()}
          className="bg-black text-white w-fit px-2.5 md:px-2 lg:px-2.5 xl:px-3 py-1 md:py-0.5 lg:py-1 xl:py-1.5 rounded-md text-xs md:text-[9px] lg:text-[10px] xl:text-xs font-medium flex items-center gap-1.5 md:gap-1 lg:gap-1.5 xl:gap-2 hover:bg-gray-800 transition-colors"
        >
          {card.buttonText}
          <ArrowRight className="w-3 h-3 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="static md:absolute top-full left-1/2 md:transform md:-translate-x-1/2 mt-2 w-full md:w-[95%] lg:w-[800px] xl:w-[900px] 2xl:w-[1100px] bg-white rounded-lg shadow-2xl border border-gray-300 z-[9999] overflow-hidden max-h-[70vh] md:max-h-[85vh] overflow-y-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Promotional Cards */}
        <div className="w-full md:w-1/2 flex flex-col">
          {promotionalCards.map(renderPromotionalCard)}
        </div>

        {/* Right Column - Services List with Two Sub-columns */}
        <div className="w-full md:w-1/2 bg-white p-3 md:p-1.5 lg:p-2 xl:p-3">
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4 xl:gap-6">
            {/* Sub-column 1: Business Setup & Legal Services */}
            <div className="flex-1">
              <h4
                className="text-xs md:text-[10px] lg:text-xs xl:text-sm font-bold mb-2 md:mb-1.5 lg:mb-2 xl:mb-3 uppercase tracking-wide leading-tight"
                style={{ color: "#212f70" }}
              >
                BUSINESS SETUP & <br />
                LEGAL SERVICES PAPERWORK
              </h4>
              <div className="space-y-2 md:space-y-1 lg:space-y-1.5 xl:space-y-2">
                {businessSetupServices.map(renderServiceItem)}
              </div>
              {renderLinkSection("Business Setup Guide", businessSetupLinks)}
            </div>

            {/* Sub-column 2: Visa, Application, Court */}
            <div className="flex-1">
              <h4
                className="text-xs md:text-[10px] lg:text-xs xl:text-sm font-bold mb-2 md:mb-1.5 lg:mb-2 xl:mb-3 uppercase tracking-wide leading-tight"
                style={{ color: "#212f70" }}
              >
                VISA, APPLICATION, <br /> COURT
              </h4>
              <div className="space-y-2 md:space-y-1 lg:space-y-1.5 xl:space-y-2">
                {visaApplicationServices.map(renderServiceItem)}
              </div>
              {renderLinkSection("Other Services", otherServicesLinks)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
