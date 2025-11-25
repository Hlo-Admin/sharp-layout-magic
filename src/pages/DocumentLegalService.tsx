import React from "react";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import FAQ from "@/components/services/FAQ";
import { TestimonialSection } from "@/components/LegalDocService";
import HeroSection from "@/components/DocmentLegalService/DocumentHero";
import TrademarkBanner from "@/components/DocmentLegalService/TrademarkBanner";
import ServiceCards from "@/components/DocmentLegalService/DocumentService";
import legalDocumentData from "@/data/documentlegal";
import WhyChooseUs from "@/components/DocmentLegalService/WhyChooseUs";

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

      {/* Why Choose Us Section */}
      <WhyChooseUs data={legalDocumentData.whyChooseUsData} />

      {/* Trademark Registration Banner */}
      <TrademarkBanner data={legalDocumentData.trademarkBannerData} />

      {/* Testimonial Section */}
      <TestimonialSection data={legalDocumentData.testimonialData} />

      {/* FAQ Section */}
      <FAQ data={legalDocumentData.faqData} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LegalDocumentServices;
