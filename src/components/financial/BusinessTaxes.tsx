import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Flexible accounts and timely filings",
  "Minimize your tax liabilities",
  "Understand applicable credits and deductions",
  "Get help all year long",
  "Minimize risk of audits",
  "Protect your personal shareholdings",
];

const BusinessTaxes = () => {
  return (
    <section className="py-16 bg-white">
      {/* Card Container with left margin, full width on right */}
      <div className="ml-4 md:ml-8 lg:ml-16 bg-white rounded-l-2xl shadow-lg p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="/finance/business-tax.jpg"
                alt="Modern building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Business taxes
            </h2>
            <p className="text-lg text-black">
              Let us handle the complex tax filings for your corporation
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
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

export default BusinessTaxes;
