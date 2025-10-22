import { Check } from "lucide-react";

interface VisaProcessingProps {
  data: {
    title: string;
    subtitle: string;
    images: string[];
    features: string[];
    stats: { label: string; value: string }[];
  };
}

const VisaProcessing = ({ data }: VisaProcessingProps) => {
  const { title, subtitle, images, features, stats } = data;

  return (
    <section className="bg-[hsl(216,24%,12%)] py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/70 text-lg">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-center">
          {/* Image Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Visa processing ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Yellow Feature Card */}
          <div className="lg:col-span-4 bg-[hsl(var(--golden))] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[hsl(var(--golden-foreground))] mb-6">
              Our Services
            </h3>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[hsl(var(--golden-foreground))] flex-shrink-0 mt-0.5" />
                  <span className="text-[hsl(var(--golden-foreground))] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--golden-foreground))]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[hsl(var(--golden-foreground))]/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcessing;
