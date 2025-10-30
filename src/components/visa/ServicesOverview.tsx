import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServicesOverviewProps {
  data: {
    title: string;
    description: string;
    features: string[];
    buttonText: string;
  };
}

const ServicesOverview = ({ data }: ServicesOverviewProps) => {
  const { title, description, features, buttonText } = data;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-left">
            {title}
          </h2>

          <p className="text-gray-700 text-lg mb-1  text-left">
            {description}
          </p>

          <ul className=" mb-1 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-3"></div>
                <span className="text-gray-700 text-lg leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed text-left">
            Start your Dubai Golden Visa application today with GoKite Business
            Setup Services.
          </p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed text-left">
            Our expert consultants will guide you through every step, ensuring a
            quick and hassle-free approval.
          </p>

          <Button
            size="lg"
            className="bg-black hover:bg-black/90 text-white font-normal px-8 py-4 text-lg rounded-lg shadow-lg flex items-center gap-2"
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
