import { Check, Globe } from "lucide-react";

interface KeyAspectsProps {
  data: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    aspects: string[];
    stats: { label: string; value: string }[];
  };
}

const KeyAspects = ({ data }: KeyAspectsProps) => {
  const { title, subtitle, backgroundImage, aspects, stats } = data;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Golden Visa Card Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
              <img
                src={backgroundImage}
                alt="Golden Visa Card"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <img src="/visa/service-icon-1.png" alt="" className="w-8 h-8 text-white"  />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-[#3790ad] mb-6">
              {title}
            </h2>

            {/* Aspects List */}
            <ul className="space-y-4 mb-10">
              {aspects.map((aspect, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{aspect}</span>
                </li>
              ))}
            </ul>

            {/* Statistics Section */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAspects;
