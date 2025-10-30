import { ArrowUpRight, ChevronRight } from "lucide-react";

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
      <div className="container mx-auto px-6 pt-4 pb-16">
        <p className="text-center text-4xl lg:text-6xl font-medium text-black">
          “ Digital where it helps,
          <br className="hidden lg:block" /> human where it matters ”
        </p>
      </div>
      {/* First div: Left - main title + content */}
      <div className="container mx-auto px-6 mb-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-black mb-6">
          {mainTitle}
        </h1>
        <div className="text-black text-sm lg:text-base leading-7 space-y-4 lg:max-w-5xl">
          {mainContent.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* Second div: left side (title + points) and right side (image + button) */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center">
        {/* Left side */}
        <div className="">
          <h2 className="text-lg lg:text-xl font-semibold text-black mb-4">
            {subTitle}
          </h2>
          <div className="space-y-2 text-sm lg:text-base max-w-xl">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 text-black">
                <ChevronRight className="mt-1 h-4 w-4" />
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-end justify-end self-start ml-auto">
          <div className="w-[220px] lg:w-[260px] overflow-hidden">
            <img
              src={image}
              alt="Business consultant in meeting"
              className="w-full h-auto object-cover"
            />
          </div>

          <button className="mt-3 inline-flex items-center gap-3 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition-colors">
            <span className="text-sm font-medium">{buttonText}</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-black">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
