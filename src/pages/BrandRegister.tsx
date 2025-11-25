import React from "react";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import FAQ from "@/components/services/FAQ";
import { TestimonialSection } from "@/components/LegalDocService";
import HeroSection from "@/components/brand/BrandHero";
import legalDocumentData from "@/data/brandregister";
import TrademarkBanner from "@/components/brand/TrademarkBanner";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";

const LegalDocumentServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <YellowTopNav />
      {/* Navigation */}
      <div className="relative">
        <Navigation />
      </div>

      {/* Hero Section */}
      <HeroSection data={legalDocumentData.heroData} />

      {/* services cards */}
      <ServiceCards data={legalDocumentData.serviceCardsData} />

      {/* Trademark Registration Banner */}
      <TrademarkBanner data={legalDocumentData.trademarkBannerData} />



        {/* Testimonial Section */}
        <TestimonialSection data={legalDocumentData.testimonialData} />

              {/* Trusted Section */}
      <TrustedSection data={legalDocumentData.trustedData} />

      {/* Semicircle Section */}
      <SemicircleSection data={legalDocumentData.semicircleData} />

    

      {/* FAQ Section */}
      <FAQ data={legalDocumentData.faqData} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LegalDocumentServices;
