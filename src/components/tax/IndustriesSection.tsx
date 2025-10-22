import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Statistic {
  value: string;
  label: string;
}

interface IndustriesSectionProps {
  data: {
    tag: string;
    title: string;
    description: string;
    buttonText: string;
    introText: string;
    statistics: Statistic[];
  };
}

const IndustriesSection = ({ data }: IndustriesSectionProps) => {
  const { tag, title, description, buttonText, introText, statistics } = data;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Tag */}
            <div className="inline-block">
              <span className="bg-purple-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {tag}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>

            {/* Call to Action Button */}
            <Button className="bg-[#487b99] hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 w-fit">
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">{introText}</p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#487b99]"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
