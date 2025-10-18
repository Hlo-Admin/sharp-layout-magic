import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Court Documents, Contracts and Agreements, Corporate Documents",
  "Certified Translations",
  "Legal Accuracy Guarantee",
  "24hr Turnaround times",
  "Timely Delivery",
  "Secure File of Ladin",
  "Support through till case is count"
];

const LegalTranslation = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src="/assets/consultant.jpg" 
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Legal Translation & Tax Filing
            </h2>
            <p className="text-lg text-gray-600 font-semibold">
              Court Documents, Contracts and Agreements, Corporate Documents
            </p>
            
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-lg mt-8">
              Book my free consultation <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalTranslation;
