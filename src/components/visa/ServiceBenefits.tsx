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

const ServiceBenefits = ({ data }: ServiceBenefitsProps) => {
  const { benefits } = data;

  return (
    <section className="py-20 px-4 bg-[hsl(var(--section-alt))]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            return (
              <div key={index} className="text-left">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[hsl(var(--golden))] rounded-full mb-6 shadow-lg">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
