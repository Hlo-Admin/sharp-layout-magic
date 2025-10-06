import { ArrowUpRight } from "lucide-react";

export default function CostSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full lg:pr-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Costs of Mainland Company Formation in the UAE
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
              Mainland company setup costs vary depending on the emirate,
              business activity, visa quota, and office space. On average,
              prices range between{" "}
              <span className="font-semibold text-gray-900">
                AED 15,000 to AED 35,000
              </span>
              , including license fees, local service agent fees, and
              documentation.
            </p>
            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors w-fit mt-1">
              Get Quote for your business Setup
              <ArrowUpRight className="w-5 text-[yellow] h-5" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex lg:justify-end justify-center mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-xl w-80 h-80 md:w-96 md:h-96 bg-gray-100 flex items-center justify-center">
              <img
                src="/Cost.png"
                alt="Business consultant in meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
