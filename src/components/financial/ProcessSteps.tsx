import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Consultation - where you consult and understand",
  },
  {
    number: "02",
    title: "Document Review",
    description: "Document Review - We carefully review submitted documents",
  },
  {
    number: "03",
    title: "Certified Translation",
    description:
      "Certified Translation - Meticulous and legal-bound translation",
  },
  {
    number: "04",
    title: "Proofreading & Quality Control",
    description:
      "Proofreading & Quality control - ensuring accuracy and consistency",
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "Final delivery in ideal and agreed upon time frame; the final & certified copy to you legally or via courier as per your desired format",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Card Container with left margin, full width on right */}
      <div className="ml-4 md:ml-8 lg:ml-16 bg-white rounded-l-2xl shadow-lg p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our 5-Step Legal Translation Process
              </h2>
              <p className="text-lg text-gray-600">
                Court Documents, Contracts and Agreements, Corporate Documents
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    <Check className="w-6 h-6" />
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

            <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-lg">
              Book my free consultation <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Right - Image */}
          <div className="order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <img
                src="/finance/steps.jpg"
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
