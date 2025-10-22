import { Button } from "@/components/ui/button";
import { Plane, Briefcase, GraduationCap, ArrowRight, BadgeCheck } from "lucide-react";

interface VisaCard {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface VisaHeroProps {
  data: {
    title: string;
    subtitle: string;
    buttonText: string;
    visaCards: VisaCard[];
  };
}

const iconMap: Record<string, any> = {
  plane: Plane,
  briefcase: Briefcase,
  graduationCap: GraduationCap,
};

const VisaHero = ({ data }: VisaHeroProps) => {
  const { title, subtitle, buttonText, visaCards } = data;

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-orange-300 via-orange-200 to-blue-300 overflow-hidden">
      {/* Decorative Badge */}
      <div className="absolute top-32 right-20 animate-float">
        <div className="w-20 h-20 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center shadow-lg">
          <BadgeCheck className="w-12 h-12 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Content */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            {subtitle}
          </p>
          <Button
            size="lg"
            className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden))]/90 text-[hsl(var(--golden-foreground))] font-semibold px-8 py-6 text-lg rounded-lg shadow-lg"
          >
            {buttonText} <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Visa Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {visaCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[hsl(var(--golden-foreground))]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{card.description}</p>
                <a
                  href={card.link}
                  className="text-[hsl(var(--golden-foreground))] font-semibold text-sm hover:underline inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisaHero;
