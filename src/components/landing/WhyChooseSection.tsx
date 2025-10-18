import { ArrowUpRight } from "lucide-react";

type WhyChooseSectionData = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

type Props = {
  data: WhyChooseSectionData;
};

export default function WhyChooseSection({ data }: Props) {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {data.description}
            </p>
            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors">
              {data.buttonText}
              <ArrowUpRight className="w-5 h-5 text-[yellow]" />
            </button>
          </div>

          {/* Right Image - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div className="relative">
              <img
                src={data.image}
                alt="Why Choose Go Kite PRO"
                className="w-[300px] h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
