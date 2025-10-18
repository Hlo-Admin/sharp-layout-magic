import { FileText, Shield, FileSignature, Rocket, Building, Languages } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Documentation Support",
    description: "Complete assistance with all business documentation, including drafting, reviewing, and filing of legal documents. We ensure accuracy and compliance with UAE regulations.",
    image: "/legal/1.jpg"
  },
  {
    icon: Shield,
    title: "Trademark/Copyright/Patent Protection",
    description: "Protect your intellectual property rights with our trademark registration and patent protection services. We safeguard your brand identity and innovations in the UAE market.",
    image: "/legal/2.jpg"
  },
  {
    icon: FileSignature,
    title: "Share Sale / Purchase Agreements",
    description: "Complete assistance in drafting or reviewing shareholder agreements, share transfer agreements, and ensuring compliance with corporate regulations and legal requirements.",
    image: "/legal/3.jpg"
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Helping you get off fast. Comprehensive startup support including entity formation, licensing, legal documentation, and regulatory compliance to launch your business successfully.",
    image: "/legal/4.jpg"
  },
  {
    icon: Building,
    title: "Government Drafting & Related",
    description: "Expert assistance with government-related documentation, including proposals, contracts, tender documents, and official correspondence. We ensure compliance with UAE government standards.",
    image: "/landingpage/service-5.jpg"
  },
  {
    icon: Languages,
    title: "Legal Translation Services",
    description: "Certified translation services in multiple languages including Arabic, English, Hindi, Urdu, and more. All translations are legally recognized and accepted by UAE authorities.",
    image: "/landingpage/service-6.jpg"
  }
];

const ServicesGridTwo = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <service.icon className="w-10 h-10 mb-4 text-yellow-400" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridTwo;
