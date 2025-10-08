import { Button } from "@/components/ui/button";
import { Building, FileCheck, Wallet, Users } from "lucide-react";

const ProServices = () => {
  const services = [
    {
      icon: Building,
      title: "Mainland Setup",
      description: "Establish your business in Dubai mainland with 100% foreign ownership. Access the entire UAE market without restrictions.",
      features: ["Full ownership", "No local sponsor needed", "Unlimited business scope"]
    },
    {
      icon: FileCheck,
      title: "Free Zone Setup",
      description: "Set up in one of 40+ free zones with tax benefits and streamlined processes. Perfect for international business.",
      features: ["0% corporate tax", "100% repatriation", "Fast setup process"]
    },
    {
      icon: Wallet,
      title: "Company Cost",
      description: "Transparent pricing with no hidden fees. Get detailed cost breakdown for your business setup requirements.",
      features: ["Clear pricing", "Payment plans", "All-inclusive packages"]
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Expert guidance from business setup specialists. We help you choose the right structure for your goals.",
      features: ["Free consultation", "Expert advisors", "Personalized solutions"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Pro Service of Business Setup & Consultations
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end business setup solutions with expert guidance at every step. 
            Choose from our comprehensive service packages designed for your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-5 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProServices;
