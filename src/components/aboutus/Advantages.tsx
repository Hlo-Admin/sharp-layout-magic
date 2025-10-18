import { ArrowUpRight } from "lucide-react";

type CostSectionData = {
  mainTitle: string;
  mainContent: string[];
  subTitle: string;
  points: string[];
  buttonText: string;
  image: string;
};

type Props = {
  data: CostSectionData;
};

export default function CostSection({ data }: Props) {
  const { mainTitle, mainContent, subTitle, points, buttonText, image } = data;

  return (
    <>
      {/* First div: Left - main title + content */}
      <div className="container mx-auto px-6 mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-black mb-6">
          {mainTitle}
        </h1>
        <div className="text-black text-base lg:text-lg space-y-4">
          {mainContent.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* Second div: left side (title + points) and right side (image + button) */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="">
          <h2 className="text-xl lg:text-2xl font-semibold text-black mb-6">
            {subTitle}
          </h2>
          <ul className="list-disc list-inside space-y-3  text-base lg:text-lg max-w-xl">
            {points.map((point, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>

        {/* Right side */}
        {/* Right side */}
        <div className="flex flex-col lg:w-[250px] rounded-xl shadow-sm overflow-hidden justify-end self-start ml-auto">
        <img
            src={image}
            alt="Business consultant in meeting"
            className="w-full h-auto object-cover"
        />

        <button className="inline-flex items-center w-full gap-2 bg-black text-white px-6 py-3 rounded-md  hover:bg-gray-800 transition-colors  justify-center">
            {buttonText}
            <ArrowUpRight className="w-5 h-5 text-yellow-400" />
        </button>
        </div>

      </div>
    </>
  );
}
