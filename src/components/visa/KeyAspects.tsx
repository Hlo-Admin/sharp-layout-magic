import { Check } from "lucide-react";

interface KeyAspectsProps {
  data: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    aspects: string[];
    stats: { label: string; value: string }[];
  };
}

const KeyAspects = ({ data }: KeyAspectsProps) => {
  const { title, subtitle, backgroundImage, aspects, stats } = data;

  return (
    <section className="py-20 px-4 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Yellow Card */}
          <div className="bg-[hsl(var(--golden))] rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--golden-foreground))] mb-2">
                {title}
              </h2>
              <p className="text-[hsl(var(--golden-foreground))]/80">{subtitle}</p>
            </div>

            {/* Aspects List */}
            <ul className="space-y-4 mb-10">
              {aspects.map((aspect, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[hsl(var(--golden-foreground))] flex-shrink-0 mt-0.5" />
                  <span className="text-[hsl(var(--golden-foreground))] font-medium">
                    {aspect}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[hsl(var(--golden-foreground))]/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--golden-foreground))] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[hsl(var(--golden-foreground))]/80">
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

export default KeyAspects;
