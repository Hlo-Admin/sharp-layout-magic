import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const BusinessGuide = () => {
  const steps = [
    "Choose your business activity",
    "Select the right jurisdiction",
    "Reserve your trade name",
    "Prepare required documents",
    "Submit application & approvals",
    "Receive your trade license"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Business Setup Guide
            </h2>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Follow our streamlined process to establish your business in the UAE. 
              We guide you through every step to ensure a smooth and efficient setup.
            </p>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <p className="text-white text-lg">{step}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-secondary text-foreground hover:bg-secondary/90 font-bold px-8 py-6 text-lg rounded-lg"
            >
              START YOUR BUSINESS →
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/30 to-white/30 flex items-center justify-center">
                <div className="text-white text-9xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGuide;
