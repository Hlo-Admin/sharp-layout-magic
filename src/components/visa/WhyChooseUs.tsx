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
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-60 items-center">
          {/* Content Side */}
          <div className="order-1 lg:col-span-2">
            {/* <p className="text-[hsl(var(--golden-foreground))] font-semibold mb-2">
              {subtitle}
            </p> */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {title}
            </h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[black] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
          <div className="relative order-2">
            <div className="">
              <img
                src={image}
                alt="Professional"
                className="w-[300px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
