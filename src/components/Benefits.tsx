import { Shield, Ban, FileText, Globe2, Scale, Building2, Zap, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "UAE Market Access",
      description: "Be able to operate within the UAE without any restrictions.",
    },
    {
      icon: Ban,
      title: "No Trading Restrictions",
      description: "Do business with the government and the private customers in the UAE.",
    },
    {
      icon: FileText,
      title: "Office Setup Flexibility",
      description: "Select between flex offices in various emirates.",
    },
    {
      icon: Globe2,
      title: "Unlimited Visa Quota",
      description: "Mainland companies are allowed to apply for an unlimited amount of visa.",
    },
    {
      icon: Scale,
      title: "100% Foreign Ownership",
      description: "Ownership is allowed depending on office and operations.",
    },
    {
      icon: Building2,
      title: "Freedom of Trade",
      description: "The right to trade locally and internationally.",
    },
    {
      icon: Zap,
      title: "Flexible Business",
      description: "Carry out commercial or commercial or professional or industrial operations.",
    },
    {
      icon: Users,
      title: "Eligibility to Government Contracts",
      description: "Get involved in profitable government tenders and contracts.",
    },
  ];

  return (
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-heading mb-4">
          BENEFITS OF MAINLAND COMPANY FORMATION IN DUBAI
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-heading mb-2">{benefit.title}</h3>
              <p className="text-sm text-text-body leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-8 space-y-2 text-text-body">
          <p className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Negotiation of Profits: Capital and profits may be fully repatriated.</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Eligibility to Government Contracts: Get involved in profitable government tenders and contracts.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
