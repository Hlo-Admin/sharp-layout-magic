import { Building2, Briefcase, Calculator, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Bank Account Opening Assistance",
    description: "We assist you in opening a business or corporate bank account in the UAE. Our experts ensure a hassle-free banking setup, helping you navigate the requirements and complete paperwork for quick account approval.",
    image: "/landingpage/service-1.jpg"
  },
  {
    icon: Briefcase,
    title: "Corporate Banking Advisory",
    description: "Get expert guidance on managing business finances, including cash flow, bank loans, line of credit, merchant services, and corporate credit cards. We help you make informed financial decisions to grow your business.",
    image: "/landingpage/service-2.jpg"
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping Services",
    description: "Keep your books up-to-date with our professional accounting and bookkeeping services. We ensure accurate financial records, timely tax filings, and compliance with UAE accounting standards and regulations.",
    image: "/landingpage/service-3.jpg"
  },
  {
    icon: TrendingUp,
    title: "Business Consulting & Market Entry Advisory",
    description: "Planning to enter the UAE market? Our consultants provide strategic advice on market research, industry analysis, business model validation, and expansion strategy to ensure a successful market entry.",
    image: "/landingpage/service-4.jpg"
  }
];

const ServicesGridOne = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
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

export default ServicesGridOne;
