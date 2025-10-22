import { MapPin, Star } from "lucide-react";

interface Destination {
  image: string;
  location: string;
  price: string;
  rating: number;
  title: string;
  description: string;
}

interface DestinationsProps {
  data: {
    title: string;
    subtitle: string;
    destinations: Destination[];
  };
}

const Destinations = ({ data }: DestinationsProps) => {
  const { title, subtitle, destinations } = data;

  return (
    <section className="py-20 px-4 bg-[hsl(var(--section-alt))]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg mt-2">{subtitle}</p>
          </div>
          <div className="w-16 h-16 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center">
            <MapPin className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[hsl(var(--golden-foreground))]" />
                  <span className="text-sm font-semibold">{destination.location}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-[hsl(var(--golden-foreground))]">
                    {destination.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[hsl(var(--golden))] text-[hsl(var(--golden))]" />
                    <span className="font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {destination.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
