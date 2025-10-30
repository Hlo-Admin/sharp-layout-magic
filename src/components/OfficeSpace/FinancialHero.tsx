import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
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
  };
}

const FinancialHero = ({ data }: FinancialHeroProps) => {
  const { title, subtitle, description, buttonText, bannerImage, services } =
    data;
  return (
    <section className="relative overflow-hidden bg-white">
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

        <div className="container relative z-10 mx-auto px-4">
          {/* Hero Content */}
          <div className="py-20 min-h-[500px] flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              {/* Left Content */}
              <div className="text-gray-900 space-y-6 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  {title}
                  <br />
                  {subtitle}
                </h2>
                <p className="text-xl text-gray-700">{description}</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-3xl flex items-center gap-2 w-fit">
                  {buttonText} <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - Positioned to overlap with background */}
      <div className="container relative mx-auto px-4 -mt-2 pb-16">
        {/* Second Row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-8xl mx-auto">
          {services.slice(0, 2).map((service, index) => (
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
