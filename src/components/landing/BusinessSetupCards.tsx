import { Link } from "react-router-dom";

interface BusinessSetupOption {
  title: string;
  description?: string;
  features?: string[];
  href: string;
}

interface BusinessSetupCardsProps {
  options: BusinessSetupOption[];
}

const BusinessSetupCards = ({ options }: BusinessSetupCardsProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop Layout: 3-column grid with Mainland spanning 2 rows */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        {/* Mainland Business Setup - Left column, spans 2 rows */}
        <div className="row-span-2">
          <Link
            to={options[0]?.href || "/mainland"}
            className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border border-gray-100 flex flex-col"
          >
            <h3 className="text-xl font-bold text-black mb-4">
              {options[0]?.title || "Mainland Business Setup"}
            </h3>
            {options[0]?.features && (
              <ul className="list-none space-y-2">
                {options[0].features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#546196] uppercase tracking-wide"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </Link>
        </div>

        {/* Right side: 2x2 grid for other options */}
        <div className="col-span-2 grid grid-cols-2 gap-6">
          {/* Top row: Freezone Company and SME Company */}
          <div>
            <Link
              to={options[1]?.href || "/freezone"}
              className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border border-gray-100"
            >
              <h3 className="text-lg font-bold text-black mb-2">
                {options[1]?.title || "Freezone Company"}
              </h3>
              {options[1]?.description && (
                <p className="text-sm text-[#546196]">
                  {options[1].description}
                </p>
              )}
            </Link>
          </div>

          <div>
            <Link
              to={options[3]?.href || "/smecompany"}
              className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border border-gray-100"
            >
              <h3 className="text-lg font-bold text-black mb-2">
                {options[3]?.title || "SME Company"}
              </h3>
              {options[3]?.description && (
                <p className="text-sm text-[#546196]">
                  {options[3].description}
                </p>
              )}
            </Link>
          </div>

          {/* Bottom row: Offshore Company and Tarakhees */}
          <div>
            <Link
              to={options[2]?.href || "/offshore"}
              className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border border-gray-100"
            >
              <h3 className="text-lg font-bold text-black mb-2">
                {options[2]?.title || "Offshore Company"}
              </h3>
              {options[2]?.description && (
                <p className="text-sm text-[#546196]">
                  {options[2].description}
                </p>
              )}
            </Link>
          </div>

          <div>
            <Link
              to={options[4]?.href || "#tarakhees"}
              className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border border-gray-100"
            >
              <h3 className="text-lg font-bold text-black mb-2">
                {options[4]?.title || "Tarakhees"}
              </h3>
              {options[4]?.description && (
                <p className="text-sm text-[#546196]">
                  {options[4].description}
                </p>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout: Stacked cards */}
      <div className="lg:hidden space-y-6">
        {/* Mainland Business Setup */}
        <div>
          <Link
            to={options[0]?.href || "/mainland"}
            className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-black mb-4">
              {options[0]?.title || "Mainland Business Setup"}
            </h3>
            {options[0]?.features && (
              <ul className="space-y-2">
                {options[0].features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-500 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </Link>
        </div>

        {/* Other options in 2-column grid for tablet, single column for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.slice(1).map((option, index) => (
            <div key={index}>
              <Link
                to={option.href}
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full border border-gray-100"
              >
                <h3 className="text-lg font-bold text-black mb-3">
                  {option.title}
                </h3>
                {option.description && (
                  <p className="text-sm text-gray-500">{option.description}</p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSetupCards;