import React, { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";

interface FeaturedClient {
  id: number;
  name: string;
  company: string;
  image: string;
  quote: string;
  fullTestimonial: string;
  signature: string;
}

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  founderId: number;
}

interface CustomerStats {
  count: string;
  avatars: string[];
}

interface ClientTestimonialsProps {
  title: string;
  featuredClients: FeaturedClient[];
  testimonials: Testimonial[];
  customerStats: CustomerStats;
}

export default function ClientTestimonials({
  title,
  featuredClients,
  testimonials,
  customerStats,
}: ClientTestimonialsProps) {
  const [activeFounder, setActiveFounder] = useState(featuredClients[0]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Featured Testimonial */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              {title}
            </h2>

            {/* Client Image */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src={activeFounder.image}
                  alt={activeFounder.name}
                  className="w-32 h-32 rounded-2xl object-cover transition-all duration-300"
                />
              </div>
            </div>

            {/* Client Info */}
            <div className="text-center mb-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">
                {activeFounder.name.toUpperCase()}
              </h3>
              <p className="text-xs text-black font-bold uppercase tracking-wide">
                {activeFounder.company.toUpperCase()}
              </p>
            </div>

            {/* Quote */}
            <div className="mb-6">
              <p className="text-xl text-gray-400 text-center mb-4 italic">
                "{activeFounder.quote}"
              </p>
              <p className="text-lg text-black text-center leading-relaxed">
                "{activeFounder.fullTestimonial}"
              </p>
            </div>

            {/* Signature */}
            <div className="flex justify-center">
              <div className="text-2xl font-signature text-gray-800 italic">
                {activeFounder.signature}
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="space-y-4">
            {testimonials.map((testimonial) => {
              const isActive = activeFounder.id === testimonial.founderId;
              return (
                <div
                  key={testimonial.id}
                  onClick={() => {
                    const founder = featuredClients.find(
                      (f) => f.id === testimonial.founderId
                    );
                    if (founder) setActiveFounder(founder);
                  }}
                  className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all relative group cursor-pointer ${
                    isActive ? "ring-2 ring-[#F0BA1A] shadow-xl" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-gray-900 mb-2">
                        {testimonial.name}
                      </h4>
                      <p className="text-lg text-black leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <button
                      className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors border"
                      style={{ borderColor: "#E9EAEC" }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Customer Stats */}
            <div className="p-6">
              <div className="flex items-center gap-4">
                {/* Customer Avatars */}
                <div className="flex -space-x-3">
                  {customerStats.avatars.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Customer ${idx + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm font-semibold text-gray-700">
                  {customerStats.count}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
