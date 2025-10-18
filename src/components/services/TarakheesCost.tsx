import { ArrowUpRight } from "lucide-react";

type CostSectionData = {
  title: string;
  paragraphs: string[]; // Use "__LIST__" to indicate where the list appears
  listItems?: string[];
  highlightedText?: string;
  buttonText: string;
  image: string;
};

type Props = {
  data: CostSectionData;
};

export default function CostSection({ data }: Props) {
  const { title, paragraphs, listItems = [], highlightedText, buttonText, image } = data;

  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full lg:pr-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {title}
            </h2>

            <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-3xl space-y-4">
              {paragraphs.map((para, idx) =>
                para === "__LIST__" ? (
                  <ul
                    key={idx}
                    className="list-disc pl-8 space-y-2 text-gray-800"
                    style={{ color: "#197B7D" }}
                  >
                    {listItems.map((item, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} className="text-gray-800" />
                       
                    ))}
                  </ul>
                ) : (
                  <p key={idx}>
                    {highlightedText
                      ? para.split(highlightedText).map((part, partIdx, arr) => (
                          <span key={partIdx}>
                            {part}
                            {partIdx < arr.length - 1 && (
                              <span className="font-semibold text-gray-900">
                                {highlightedText}
                              </span>
                            )}
                          </span>
                        ))
                      : para}
                  </p>
                )
              )}
            </div>

            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors w-fit mt-1">
              {buttonText}
              <ArrowUpRight className="w-5 h-5 text-yellow-400" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex lg:justify-end justify-center mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-xl w-80 h-80 md:w-96 md:h-96 bg-gray-100 flex items-center justify-center">
              <img
                src={image}
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
