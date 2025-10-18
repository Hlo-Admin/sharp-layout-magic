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

const LegalDocumentServices = () => {
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Know about your query and popularly asked questions",
    faqs: [
      {
        question: "How long does it take for a Legal Case?",
        answer:
          "The duration depends on the complexity of your case and the court's schedule. Simple cases may take 2-4 weeks, while complex matters could take several months. We provide regular updates throughout the process.",
      },
      {
        question: "How can I get a personal Lawyer?",
        answer:
          "Our team of experienced lawyers is available for personal consultation and representation. Contact us to schedule a meeting with one of our qualified legal professionals who will assess your case and provide personalized guidance.",
      },
      {
        question: "Where can I check my case Progress?",
        answer:
          "You can track your case progress through our online portal, receive regular email updates, or contact our support team directly. We ensure complete transparency throughout the legal process.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Three Service Cards Section */}
      <ServiceCards />

      {/* Legal Complaint Services Section */}
      <LegalComplaintService />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Trademark Registration Banner */}
      <TrademarkBanner />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQ data={faqData} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LegalDocumentServices;
