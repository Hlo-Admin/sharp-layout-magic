import { FileText } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ApplicationProcessProps {
  data: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
}

const ApplicationProcess = ({ data }: ApplicationProcessProps) => {
  const { title, subtitle, steps } = data;

  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-2">
            <FileText className="w-5 h-5 text-gray-400 mr-2" />
            <p className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
              {subtitle}
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="text-6xl font-bold text-transparent bg-clip-text  mb-6"
                style={{
                  WebkitTextStroke: "2px #F0D9A6",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
