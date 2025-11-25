import React from "react";
import PolicyAccordion from "@/components/policy/PolicyAccordion";
import Sidebar from "@/components/policy/PolicySidebar";
import LandingNavigation from "@/components/landing/LandingNavigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";

const PolicyPage: React.FC = () => {
  return (
    <div className="pt-40 bg-gray-50">
      <YellowTopNav />
      <div className="relative pt-2">
        <LandingNavigation />
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">
          Our <br /> Company Policy’s
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-20">
          {/* Accordions Section */}
          <div className="lg:col-span-2">
            <PolicyAccordion />
          </div>

          {/* Sticky Sidebar */}
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyPage;
