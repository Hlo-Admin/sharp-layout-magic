const logos = [
  { name: "Ministry of Interior", image: "/landingpage/logos/logo-1.png" },
  { name: "Dubai Courts", image: "/landingpage/logos/logo-2.png" },
  { name: "Abu Dhabi Judicial", image: "/landingpage/logos/logo-3.png" },
  { name: "Dubai Municipality", image: "/landingpage/logos/logo-4.png" },
  { name: "Ministry of Justice", image: "/landingpage/logos/logo-5.png" },
  { name: "Federal Authority", image: "/landingpage/logos/logo-1.png" },
  { name: "Dubai Economic", image: "/landingpage/logos/logo-2.png" }
];

const GovernmentBodies = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UAE Government Bodies
          </h2>
          <p className="text-xl text-gray-600">We work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="w-32 h-32 flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <img 
                src={logo.image} 
                alt={logo.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentBodies;
