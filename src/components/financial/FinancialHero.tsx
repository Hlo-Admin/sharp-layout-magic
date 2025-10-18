import {
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Bank Account Opening Assistance",
    description:
      "We assist you in opening a business or corporate bank account in the UAE. Our experts ensure a hassle-free banking setup, helping you navigate the requirements and complete paperwork for quick account approval.",
    image: "/finance/hero-1.png",
  },
  {
    title: "Corporate Banking Advisory",
    description:
      "Get expert guidance on managing business finances, including cash flow, bank loans, line of credit, merchant services, and corporate credit cards. We help you make informed financial decisions to grow your business.",
    image: "/finance/hero-2.png",
  },
  {
    title: "Accounting & Bookkeeping Services",
    description:
      "Keep your books up-to-date with our professional accounting and bookkeeping services. We ensure accurate financial records, timely tax filings, and compliance with UAE accounting standards and regulations.",
    image: "/finance/hero-3.png",
  },
  {
    title: "Business Consulting & Market Entry Advisory",
    description:
      "Planning to enter the UAE market? Our consultants provide strategic advice on market research, industry analysis, business model validation, and expansion strategy to ensure a successful market entry.",
    image: "/finance/hero-4.png",
  },
  {
    title: "Tax Registration (VAT) & Filing Support",
    description:
      "Our tax experts register your business for VAT, prepare accurate filings, and ensure compliance with Federal Tax Authority guidelines. We also provide advisory to optimize your tax strategy.",
    image: "/finance/hero-5.png",
  },
];

const FinancialHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image Container - Only covers hero content and half of first row cards */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/finance/banner.png')",
            height: "calc(100% + 150px)", // Extends 150px into the cards section
          }}
        />

        {/* Gradient Overlay - dark left to light right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
          style={{
            height: "calc(100% + 150px)", // Matches background height
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          {/* Hero Content */}
          <div className="py-20 min-h-[500px] flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              {/* Left Content */}
              <div className="text-white space-y-6 max-w-xl">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Finance Innovate,
                  <br />
                  Create, Elevate
                </h1>
                <p className="text-xl text-gray-200">
                  Unlocking Possibilities, One Code at a Time
                </p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-lg flex items-center gap-2 w-fit">
                  Contact Business Team <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - Positioned to overlap with background */}
      <div className="container relative mx-auto px-4 -mt-16 pb-16">
        {/* First Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="group relative h-[300px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/60 to-black/30" />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-8xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <div
              key={index + 3}
              className="group relative h-[300px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/60 to-black/30" />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialHero;
