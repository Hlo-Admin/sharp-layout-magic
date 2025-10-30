interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface ServicesGridTwoProps {
  data: {
    services: Service[];
  };
}

const ServicesGridTwo = ({ data }: ServicesGridTwoProps) => {
  const { services } = data;
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-black/10" />

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
