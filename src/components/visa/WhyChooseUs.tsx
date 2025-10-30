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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 whitespace-pre-line">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {subtitle}
              </p>
            )}

            <ul className="space-y-4 list-disc pl-6">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="text-foreground font-medium leading-relaxed"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Side */}
          <div className="relative order-2 flex justify-center lg:justify-end">
            <img
              src={image}
              alt="Why choose Go Kite PRO"
              className="w-[320px] md:w-[360px] lg:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
