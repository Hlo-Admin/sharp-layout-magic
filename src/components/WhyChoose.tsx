import { CheckCircle2 } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    "10+ years of experience in UAE business setup",
    "500+ successful company formations",
    "Expert team of PRO specialists and legal advisors",
    "Fast processing - setup in 3-5 business days",
    "Transparent pricing with no hidden costs",
    "End-to-end support from setup to operations",
    "Multilingual customer service",
    "Free consultation and business advisory"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose<br />
              Go Kite PRO Business Setup Services?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are your trusted partner for business setup in the UAE. With our 
              expertise and dedication, we make the entire process seamless and hassle-free.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 flex items-center justify-center h-[500px]">
              {/* Businessman illustration placeholder */}
              <div className="text-8xl">👨‍💼</div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8 font-semibold">
            Trusted by leading brands and organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-400">LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
