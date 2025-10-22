import { Check } from "lucide-react";

interface WhyChooseUsProps {
  data: {
    title: string;
    subtitle: string;
    image: string;
    benefits: string[];
  };
}

const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  const { title, subtitle, image, benefits } = data;

  return (
    <section className="py-20 px-4 bg-[hsl(var(--section-alt))]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <p className="text-[hsl(var(--golden-foreground))] font-semibold mb-2">{subtitle}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {title}
            </h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Professional"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
