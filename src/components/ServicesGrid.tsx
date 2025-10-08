import { Building2, FileText, Users, Briefcase, Globe2, ShieldCheck } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Building2,
      title: "Company Formation",
      description: "Complete business setup solutions for mainland, free zone, and offshore companies"
    },
    {
      icon: FileText,
      title: "Business Licensing",
      description: "Professional, commercial, and industrial license processing"
    },
    {
      icon: Users,
      title: "Visa Services",
      description: "Employee visa, investor visa, and residency permit assistance"
    },
    {
      icon: Briefcase,
      title: "PRO Services",
      description: "Government relations and documentation support"
    },
    {
      icon: Globe2,
      title: "Office Solutions",
      description: "Flexible office spaces and virtual office options"
    },
    {
      icon: ShieldCheck,
      title: "Legal Support",
      description: "Contract drafting, attestation, and legal consultancy"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What can we do for you to setup business in UAE?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive business setup solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
