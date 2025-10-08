import { Button } from "@/components/ui/button";

const WorkingProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Contact & Discuss",
      description: "Reach out to our team for a free consultation. We'll understand your business needs and goals.",
      image: "📞"
    },
    {
      number: "02",
      title: "Choose Structure",
      description: "Select the right business structure - Mainland, Free Zone, or Offshore based on your requirements.",
      image: "📋"
    },
    {
      number: "03",
      title: "Documentation",
      description: "Our team handles all paperwork and ensures compliance with UAE regulations.",
      image: "📄"
    },
    {
      number: "04",
      title: "Get Your License",
      description: "Receive your trade license and start operating your business in the UAE.",
      image: "✅"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Standard Working Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined approach ensures you get your business up and running quickly and efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-6xl mb-6 text-center">{step.image}</div>
                <div className="absolute -top-4 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary text-foreground hover:bg-secondary/90 font-bold px-10 py-6 text-lg rounded-lg shadow-lg"
          >
            START YOUR JOURNEY →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
