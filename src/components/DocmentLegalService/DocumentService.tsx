interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface ServicesGridProps {
  data: {
    services: ServiceItem[];
  };
}

const ServicesGridTwo = ({ data }: ServicesGridProps) => {
  const { services } = data;

  return (
    <section className="bg-white pb-16">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[300px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/60 to-black/30" />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridTwo;
