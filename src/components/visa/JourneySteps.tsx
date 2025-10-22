import { Clock, Award, FileCheck } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface JourneyStepsProps {
  data: {
    badge: string;
    title: string;
    image: string;
    features: Feature[];
  };
}

const iconMap: Record<string, any> = {
  clock: Clock,
  award: Award,
  fileCheck: FileCheck,
};

const JourneySteps = ({ data }: JourneyStepsProps) => {
  const { badge, title, image, features } = data;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Journey"
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Badge Overlay */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center shadow-xl">
              <span className="text-3xl font-bold text-white">{badge}</span>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              {title}
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div
                    key={index}
                    className="bg-[hsl(var(--golden))]/10 rounded-xl p-6 border border-[hsl(var(--golden))]/20 hover:border-[hsl(var(--golden))]/40 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
