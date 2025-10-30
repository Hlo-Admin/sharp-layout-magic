import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  data: {
    title: string;
    subtitle: string;
    buttonText: string;
    image: string;
    steps: Step[];
  };
}

const ProcessSteps = ({ data }: ProcessStepsProps) => {
  const { title, subtitle, buttonText, image, steps } = data;
  return (
    <section className="py-16 bg-gray-50">
      {/* Card Container with left margin, full width on right */}
      <div className="ml-4 md:ml-8 lg:ml-16 bg-white rounded-l-2xl shadow-lg p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
            <div className="text-3xl font-normal mb-4 text-[#487b99] leading-none">
                02
              </div>
              <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4">
                {title}
              </h2>
              <p className="text-lg font-bold text-gray-600">{subtitle}</p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#487b99] hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-2xl">
              {buttonText} <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Right - Image */}
          <div className="order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <img
                src={image}
                alt="UAE building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
