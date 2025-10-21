const services = [
  {
    icon: "/finance/icon-1.png",
    title: "Documentation Support",
    description:
      "Complete assistance with all business documentation, including drafting, reviewing, and filing of legal documents. We ensure accuracy and compliance with UAE regulations.",
    image: "finance/service-1.jpg",
  },
  {
    icon: "/finance/icon-2.png",
    title: "Trademark/Copyright/Patent Protection",
    description:
      "Protect your intellectual property rights with our trademark registration and patent protection services. We safeguard your brand identity and innovations in the UAE market.",
    image: "finance/service-2.jpg",
  },
  {
    icon: "/finance/icon-3.png",
    title: "Share Sale / Purchase Agreements",
    description:
      "Complete assistance in drafting or reviewing shareholder agreements, share transfer agreements, and ensuring compliance with corporate regulations and legal requirements.",
    image: "finance/service-3.jpg",
  },
  {
    icon: "/finance/icon-4.png",
    title: "Startups",
    description:
      "Helping you get off fast. Comprehensive startup support including entity formation, licensing, legal documentation, and regulatory compliance to launch your business successfully.",
    image: "finance/service-4.jpg",
  },
  {
    icon: "/finance/icon-5.png",
    title: "Government Drafting & Related",
    description:
      "Expert assistance with government-related documentation, including proposals, contracts, tender documents, and official correspondence. We ensure compliance with UAE government standards.",
    image: "finance/service-5.jpg",
  },
  {
    icon: "/finance/icon-6.png",
    title: "Legal Translation Services",
    description:
      "Certified translation services in multiple languages including Arabic, English, Hindi, Urdu, and more. All translations are legally recognized and accepted by UAE authorities.",
    image: "finance/service-6.jpg",
  },
];

const ServicesGridTwo = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                  {service.description}
                </p>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 mb-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridTwo;
