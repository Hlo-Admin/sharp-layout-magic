import React from "react";
import { Building2, Smartphone, Factory } from "lucide-react";

export default function RealEstateHero() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="absolute top-8 left-0 bg-white px-4 py-2 shadow-sm">
              <p className="text-sm font-medium text-gray-800">
                → RERA COMPLIANCE
              </p>
            </div>
            <img
              src="/officespace/register.jpg"
              alt="Modern Building"
              className="w-full h-[600px] object-cover shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-start pt-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Real Estate Name Registration
              <br />
              Services in Dubai
            </h2>

            <div className="flex gap-4 mb-6">
              <span className="text-yellow-500 font-semibold text-sm">
                MARKET CREDIBILITY
              </span>
              <span className="text-yellow-500 font-semibold text-sm">
                BRAND IDENTITY
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              The real estate market in Dubai is highly regulated and one of the
              fastest growing markets where getting a unique and legally
              compliant business name is one of the first steps in establishing
              your presence. Go Kite Business Setup Services is a company in
              Dubai that focuses on Real Estate Name Registration Services,
              making it easier and more confident to navigate the legal steps of
              real estate entrepreneurs and companies.
            </p>

            <p className="text-gray-800 font-medium mb-4">
              Contact Us if your:
            </p>

            <ul className="space-y-2">
              <li className="text-gray-900 font-semibold">
                PROPERTY MANAGEMENT FIRMS
              </li>
              <li className="text-gray-900 font-semibold">
                REAL ESTATE DEVELOPERS
              </li>
              <li className="text-gray-900 font-semibold">
                REAL ESTATE MARKETING AGENCIES
              </li>
              <li className="text-gray-900 font-semibold">
                PROPERTY CONSULTANCIES
              </li>
              <li className="text-gray-900 font-semibold">
                REAL ESTATE BROKERAGES
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Commercial License Card */}
          <div className="bg-[#3790ad] text-white p-8 rounded-sm shadow-lg">
            <Building2 className="w-10 h-10 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-3">Commercial License</h3>
            <p className="text-teal-50 text-sm leading-relaxed">
              Required for trading, import/export, retail, and commercial
              activities. We manage all approvals, renewals, and documentation,
              helping you launch and operate smoothly.
            </p>
          </div>

          {/* Professional License Card */}
          <div className="bg-[#3790ad] text-white p-8 rounded-sm shadow-lg">
            <Smartphone className="w-10 h-10 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-3">Professional License</h3>
            <p className="text-teal-50 text-sm leading-relaxed">
              Designed for consultants, freelancers, and service providers. We
              ensure your license is issued smoothly by coordinating with
              authorities in UAE regulations.
            </p>
          </div>

          {/* Industrial License Card */}
          <div className="bg-[#3790ad] text-white p-8 rounded-sm shadow-lg">
            <Factory className="w-10 h-10 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-3">Industrial License</h3>
            <p className="text-teal-50 text-sm leading-relaxed">
              Necessary for manufacturing, industrial, and production
              activities. Our team handles feasibility studies, facility
              registration, and legal setups to help you start operations
              seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
