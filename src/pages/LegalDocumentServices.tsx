import React from "react";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FAQ from "@/components/services/FAQ";
import {
  HeroSection,
  ServiceCards,
  LegalComplaintService,
  WhyChooseUs,
  TrademarkBanner,
  TestimonialSection,
} from "@/components/LegalDocService";
import legalDocumentData from "@/data/legaldocument";

const LegalDocumentServices = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection data={legalDocumentData.heroData} />

      {/* Three Service Cards Section */}
      <ServiceCards data={legalDocumentData.serviceCardsData} />

      {/* Legal Complaint Services Section */}
      <LegalComplaintService data={legalDocumentData.legalServicesData} />

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
