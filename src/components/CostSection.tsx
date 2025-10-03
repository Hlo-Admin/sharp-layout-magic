import { ArrowUpRight } from "lucide-react";

export default function CostSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Costs of Mainland Company Formation in the UAE
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Mainland company setup costs vary depending on the emirate,
              business activity, visa quota, and office space. On average,
              prices range between{" "}
              <span className="font-semibold text-gray-900">
                AED 15,000 to AED 35,000
              </span>
              , including license fees, local service agent fees, and
              documentation.
            </p>

            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-md font-medium hover:bg-gray-800 transition-colors mt-4">
              Get Quote for your business Setup
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl w-80 h-80">
                <img
                  src="/Cost.png"
                  alt="Business consultant in meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}