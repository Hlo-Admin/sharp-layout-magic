import React from "react";
import { ArrowUpRight } from "lucide-react";

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

type CTAButton = {
  text: string;
  href: string;
};

type Props = {
  services: ServiceItem[];
  ctaButtons: CTAButton[];
};

export default function ServicesGridSection({ services, ctaButtons }: Props) {
  return (
    <section className="bg-white py-8 md:py-12 px-4 md:px-8 border-l-4 md:border-l-8 border-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid - Responsive: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-12 md:gap-y-10 mb-8 md:mb-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Service Icon Column */}
              <div className="flex-shrink-0">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 md:w-6 md:h-6 object-contain"
                />
              </div>

              {/* Title and Description Column */}
              <div className="flex flex-col">
                <h3 className="text-sm md:text-base font-semibold text-[#213070] mb-1 md:mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#546197] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className="bg-black text-white px-4 md:px-5 py-2.5 md:py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-300 text-sm font-normal"
            >
              <span>{button.text}</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[yellow]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
