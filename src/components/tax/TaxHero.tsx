import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingSocialIcons from "@/components/landing/FloatingSocialIcons";

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface FinancialHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    bannerImage: string;
    services: Service[];
    socialIcons?: Array<{
      icon: string;
      href: string;
      alt: string;
      target?: string;
      rel?: string;
    }>;
  };
}

const FinancialHero = ({ data }: FinancialHeroProps) => {
  const {
    title,
    subtitle,
    description,
    buttonText,
    bannerImage,
    services,
    socialIcons,
  } = data;
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Floating Social Icons */}
      {socialIcons && socialIcons.length > 0 && (
        <FloatingSocialIcons icons={socialIcons} />
      )}
      {/* Background Image Container - Only covers hero content and half of first row cards */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${bannerImage}')`,
            height: "calc(100% + 150px)", // Extends 150px into the cards section
          }}
        />

        {/* Gradient Overlay - white left (40%) to transparent right (60%) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"
          style={{
            height: "calc(100% + 150px)", // Matches background height
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 25%, rgba(255, 255, 255, 0.4) 40%, transparent 60%)",
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          {/* Hero Content */}
          <div className="py-20 min-h-[500px] flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              {/* Left Content */}
              <div className="text-gray-900 space-y-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {title}
                  <br />
                  {subtitle}
                </h2>
                <p className="text-xl text-gray-700 max-w-2xl">{description}</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-3xl flex items-center gap-2 w-fit">
                  {buttonText} <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - Positioned to overlap with background */}
      <div className="container relative mx-auto px-4 mt-8 pb-16">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/40 to-black/10" />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                  {service.description}
                </p>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 mb-4"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(3, 6).map((service, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/40 to-black/10" />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                  {service.description}
                </p>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 mb-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialHero;
