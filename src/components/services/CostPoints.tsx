import { ArrowUpRight } from "lucide-react";

type CostSectionData = {
  title: string;
  description: string | string[]; // Either a string paragraph or array of points
  highlightedText?: string;
  buttonText: string;
  image: string;
};

type Props = {
  data: CostSectionData;
};

export default function CostSection({ data }: Props) {
  return (
    <section className="bg-white py-16  ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full lg:pr-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {data.title}
            </h2>

            {/* Description */}
            {Array.isArray(data.description) ? (
              <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg space-y-2 mb-6 max-w-3xl">
                {data.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
                {data.highlightedText
                  ? data.description.split(data.highlightedText).map((part, idx, arr) => (
                      <span key={idx}>
                        {part}
                        {idx < arr.length - 1 && (
                          <span className="font-semibold text-gray-900">
                            {data.highlightedText}
                          </span>
                        )}
                      </span>
                    ))
                  : data.description}
              </p>
            )}

            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors w-fit mt-1">
              {data.buttonText}
              <ArrowUpRight className="w-5 text-[yellow] h-5" />
            </button>
          </div>

          {/* Right Image */}
          {/* <div className="flex lg:justify-end justify-center mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-xl w-80 h-80 md:w-96 md:h-96 bg-gray-100 flex items-center justify-center">
              <img
                src={data.image}
                alt="Business consultant in meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

