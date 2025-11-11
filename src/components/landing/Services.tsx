import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import BookingPopup from "../common/Booking";

type Zone = {
  title: string;
  description: string;
  points?: string[];
  button: string;
  img: string;
};

type FreeZonesData = {
  title: string;
  zones: Zone[];
  descriptions: string;
};

type Props = {
  data: FreeZonesData;
};

const FreeZones: React.FC<Props> = ({ data }) => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-6 max-w-8xl">
        {/* Section Title */}
        <h1 className="pt-4 text-4xl font-bold text-black uppercase tracking-wide">
          {data.title}
        </h1>

        <p className="text-xl pb-10">{data.descriptions}</p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.zones.map((zone, i) => (
            <div
              key={i}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Title */}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {zone.title}
                </h3>

                <div className="relative mt-2 w-full h-px bg-[#197B7D]">
                  <span className="absolute left-0 -top-[4px] w-2 h-2 bg-[#197B7D] rotate-45" />
                  <span className="absolute right-0 -top-[4px] w-2 h-2 bg-[#197B7D] rotate-45" />
                </div>
              </div>

              {/* Description + Points */}
              <div className="mb-5 text-black text-sm space-y-2">
                <p>{zone.description}</p>
                {zone.points && (
                  <ul className="space-y-1 pt-2">
                    {zone.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-1">
                        <span className="text-black font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Button */}
              <div className="flex justify-start mt-auto relative">
                <button
                  onClick={() => setShowBooking(true)}
                  className="flex items-center justify-center gap-2 w-52 bg-white-50 text-gray-800 border border-[#F0BA1A] px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-100 transition"
                >
                  {zone.button}
                  <ArrowUpRight size={16} className="text-[#F0BA1A]" />
                </button>
              </div>

              {/* Decorative image */}
              <img
                src={zone.img}
                alt="Freezone Logo"
                className="absolute bottom-0 right-0  w-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <BookingPopup onClose={() => setShowBooking(false)} />
        </div>
      )}
    </section>
  );
};

export default FreeZones;
