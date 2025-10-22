import { Shield, Users, TrendingUp } from "lucide-react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  data: {
    benefits: Benefit[];
  };
}

const iconMap: Record<string, any> = {
  shield: Shield,
  users: Users,
  trendingUp: TrendingUp,
};

const ServiceBenefits = ({ data }: ServiceBenefitsProps) => {
  const { benefits } = data;

  return (
    <section className="py-20 px-4 bg-[hsl(var(--section-alt))]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[hsl(var(--golden))] rounded-full mb-6 shadow-lg">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
