import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LegalTranslationProps {
  data: {
    title: string;
    subtitle: string;
    buttonText: string;
    image: string;
    services: string[];
  };
}

const LegalTranslation = ({ data }: LegalTranslationProps) => {
  const { title, subtitle, buttonText, image, services } = data;
  return (
    <section className="py-16 bg-white">
      {/* Card Container with left margin, full width on right */}
      <div className="ml-4 md:ml-8 lg:ml-16 bg-white rounded-l-2xl shadow-lg p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left - Image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src={image}
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
          <div className="text-3xl font-normal text-[#487b99] leading-none">
              01
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-black">
              {title}
            </h2>
            <p className="text-lg text-black font-bold">{subtitle}</p>

            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-[#487b99] hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-2xl mt-8">
              {buttonText} <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalTranslation;
