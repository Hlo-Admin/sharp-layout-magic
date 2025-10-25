interface Service {
  title: string;
  description: string;
  image: string;
  icon?: string;
}

interface ServicesGridTwoProps {
  data: {
    title: string;
    buttonText: string;
    services: Service[];
  };
}

const ServicesGridTwo = ({ data }: ServicesGridTwoProps) => {
  const { title, buttonText, services } = data;
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            {title}
          </h2>
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 flex items-center gap-2 self-start md:self-auto">
            {buttonText}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
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
                {service.icon && (
                  <div className="flex justify-start">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridTwo;
