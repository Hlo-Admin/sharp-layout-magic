import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

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
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[hsl(var(--golden-foreground))] flex-shrink-0 mt-1" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-[hsl(216,24%,12%)] hover:bg-[hsl(216,24%,12%)]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg"
        >
          {buttonText} <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default ServicesOverview;
