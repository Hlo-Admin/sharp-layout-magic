const ExploreDubai = () => {
  const locations = [
    {
      title: "Dubai Marina",
      description: "Premium waterfront location with modern infrastructure",
      image: "🏙️"
    },
    {
      title: "Downtown Dubai",
      description: "Heart of the city with iconic landmarks",
      image: "🌆"
    },
    {
      title: "Business Bay",
      description: "Central business district with excellent connectivity",
      image: "🏢"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Dubai's
            <br />
            Ever-Evolving Dubai Economy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover prime business locations across Dubai's thriving economic landscape
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-[350px] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center text-9xl">
                {location.image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{location.title}</h3>
                <p className="text-white/90">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreDubai;
