import React from "react";

type ProcessCard = {
  icon: string;
  title: string;
  description: string;
};

interface BenefitsProps {
  data?: any;
}

const processCards: ProcessCard[] = [
  {
    icon: "📝",
    title: "Operational Streamlining",
    description:
      "We find areas of inefficiency and introduce more intelligent work processes to save costs and increase the productivity of departments.",
  },
  {
    icon: "🔍",
    title: "Strategic Market Analysis",
    description:
      "Qualitative market analysis and competitor benchmarking to assist you in making fact-based decisions and discover new growth opportunities.",
  },
  {
    icon: "📈",
    title: "Sales Acceleration Strategy",
    description:
      "Our custom sales funnels and conversion optimization processes will help to generate more revenue and acquire more customers.",
  },
];

const WorkingProcess: React.FC<BenefitsProps> = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        {/* Section Title */}
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          OUR STANDARD WORKING PROCESS
        </h1>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {processCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 text-center space-y-4"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-lg text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Performance Efficiency Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-12 space-y-4">
          <h3 className="text-lg font-semibold">Performance Efficiency</h3>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>
              <strong>Optimized Operations</strong> – Fast bookings, instant
              confirmations, and minimal wait times
            </li>
            <li>
              <strong>Smart Resource Use</strong> – Leveraging technology to
              deliver maximum value with fewer hassles.
            </li>
            <li>
              <strong>Consistent Reliability</strong> – High uptime, smooth
              experiences, and zero compromise on speed.
            </li>
          </ul>
        </div>

        {/* Mission and Vision */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Mission */}
          <div className="flex-1 space-y-4">
            <div className="text-4xl">🎯</div>
            <h3 className="text-xl font-bold">Mission</h3>
            <p className="text-lg font-medium text-gray-700">
              Empowering Businesses Beyond Borders
            </p>
            <p className="text-lg text-gray-700">
              At GoKite Pro, our mission is to simplify business on a global
              scale. We provide holistic, professional, and end-to-end services
              that span Mainland, Free Zone, and Offshore company formation,
              trade licenses, office solutions, visa and immigration assistance,
              document attestation, legal translation, trademark registration,
              banking advisory, accounting, and bookkeeping. By combining
              decades of industry experience with modern technology and a
              client-first approach, we reduce complexity, enhance efficiency,
              and ensure compliance — wherever our clients choose to grow.
            </p>
          </div>

          {/* Vision */}
          <div className="flex-1 space-y-4">
            <div className="text-4xl">👁️</div>
            <h3 className="text-xl font-bold">Vision</h3>
            <p className="text-lg font-medium text-gray-700">
              Simplicity in Success, Globally
            </p>
            <p className="text-lg text-gray-700">
              Our vision is to become the world’s most trusted partner for
              business setup and growth — a one-stop global hub that transforms
              complex processes into simple, actionable solutions. We aspire to
              empower entrepreneurs, startups, and enterprises across borders by
              helping them focus on their goals, while we handle the rest — from
              compliance and licensing to visas, finance, and operational
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
