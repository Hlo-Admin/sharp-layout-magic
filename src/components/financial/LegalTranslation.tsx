import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Court Documents, Contracts and Agreements, Corporate Documents",
  "Certified Translations",
  "Legal Accuracy Guarantee",
  "24hr Turnaround times",
  "Timely Delivery",
  "Secure File of Ladin",
  "Support through till case is count",
];

const LegalTranslation = () => {
  return (
    <section className="py-16 bg-white">
      {/* Card Container with left margin, full width on right */}
      <div className="ml-4 md:ml-8 lg:ml-16 bg-white rounded-l-2xl shadow-lg p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left - Image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="/finance/legal-translation.jpg"
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Legal Translation & Tax Filing
            </h2>
            <p className="text-lg text-black font-semibold">
              Court Documents, Contracts and Agreements, Corporate Documents
            </p>

            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-[#487b99] hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-lg mt-8">
              Book my free consultation <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalTranslation;
