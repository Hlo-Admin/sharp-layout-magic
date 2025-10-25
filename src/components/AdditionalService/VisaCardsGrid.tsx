const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

interface VisaCard {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface VisaCardsGridProps {
  data: {
    title: string;
    visaCards: VisaCard[];
  };
}

const VisaCardsGrid = ({ data }: VisaCardsGridProps) => {
  const { title, visaCards } = data;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-0">
            {title}
          </h2>
        </div>

        {/* Visa Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100 min-h-[240px]"
            >
              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pr-20">
                  {card.title}
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-[#487b99] rounded-full"></div>
                  <div className="flex-1 h-0.5 bg-[#487b99]"></div>
                  <div className="w-2 h-2 bg-[#487b99] rounded-full mr-2"></div>
                </div>
                <p className="text-gray-600 mb-6 text-base leading-relaxed pr-20 flex-grow">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="inline-flex items-center w-fit text-sm font-semibold text-gray-900 border border-yellow-500 px-3 py-1.5 rounded hover:text-yellow-600 transition-colors duration-300 mt-auto"
                >
                  Get {card.title.split(" ")[0]} Visa
                  <ArrowRightIcon className="ml-2 w-4 h-4 inline" />
                </a>
              </div>

              {/* Icon in Bottom Right Corner */}
              <div className="absolute bottom-6 right-6 w-16 h-16 flex items-center justify-center">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCardsGrid;
