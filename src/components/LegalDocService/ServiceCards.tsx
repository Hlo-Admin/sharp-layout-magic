import React from "react";

const ServiceCards = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="text-left space-y-4 p-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <img
                src="/legal/handshake.png"
                alt="Complaint Filing"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-black">
              Complaint Filing Services
            </h3>
            <p className="text-gray-600">
              We provide complete assistance in filing complaints to the Dubai
              Police and the Public Prosecution without any legal issues and
              inconvenience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-left space-y-4 p-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <img
                src="/legal/hacker.png"
                alt="Case Registration"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-black">
              Expert Case Registration Support
            </h3>
            <p className="text-gray-600">
              Our experienced team handles the complexity of bringing a legal
              case to court with professional expertise and attention to detail.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-left space-y-4 p-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <img
                src="/legal/family.png"
                alt="Rental Dispute"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-black">
              Rental Dispute Center
            </h3>
            <p className="text-gray-600">
              We handle the complexity of landlord and tenant disputes with
              comprehensive legal support and mediation services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
