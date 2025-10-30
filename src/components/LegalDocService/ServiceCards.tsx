import React from "react";

interface ServiceCardsProps {
  data: {
    cards: Array<{
      icon: string;
      bgColor: string;
      title: string;
      description: string;
    }>;
  };
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ data }) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.cards.map((card, index) => (
            <div key={index} className="text-left space-y-4 p-6">
              <div
                className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center`}
              >
                <img src={card.icon} alt={card.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-normal text-black">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
