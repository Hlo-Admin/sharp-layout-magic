import { ArrowUpRight } from "lucide-react";

type LandingInfoSectionData = {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
};

type Props = {
  data: LandingInfoSectionData;
};

export default function LandingInfoSection({ data }: Props) {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full lg:pr-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-2">
              {data.title}
            </h1>
            <p className="text-2xl md:text-3xl text-black font-light mb-6">
              {data.subtitle}
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {data.description}
            </p>
            <button className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors w-fit">
              {data.buttonText}
              <ArrowUpRight className="w-5 h-5 text-[yellow]" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex lg:justify-end justify-center mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-xl w-80 h-80 md:w-96 md:h-96 bg-gray-100 flex items-center justify-center">
              <img
                src={data.image}
                alt="Business professionals in meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
