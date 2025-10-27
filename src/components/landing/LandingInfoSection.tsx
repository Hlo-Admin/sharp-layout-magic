import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import BookingPopup from "../common/Booking";

type LandingInfoSectionData = {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
};

type Props = {
  data: LandingInfoSectionData;
};

export default function LandingInfoSection({ data }: Props) {
  const [showBooking, setShowBooking] = useState(false);
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full lg:pr-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-2">
              {data.title}
            </h1>
            <p className="text-2xl md:text-3xl text-black font-light mb-6">
              {data.subtitle}
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {data.description}
            </p>
            <button
              onClick={() => setShowBooking(true)}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors w-fit"
            >
              {data.buttonText}
              <ArrowUpRight className="w-5 h-5 text-[yellow]" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex lg:justify-end justify-center mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-xl w-80 h-80 md:w-96 md:h-96 bg-gray-100 flex items-center justify-center">
              <img
                src={data.image}
                alt="Business professionals in meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
            >
              ✕
            </button>
            <BookingPopup />
          </div>
        </div>
      )}
    </section>
  );
}
