import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FinancialHero from "@/components/financial/FinancialHero";
import BusinessTaxes from "@/components/financial/BusinessTaxes";
import ServicesGridTwo from "@/components/financial/ServicesGridTwo";
import LegalTranslation from "@/components/financial/LegalTranslation";
import ProcessSteps from "@/components/financial/ProcessSteps";
import GovernmentBodies from "@/components/financial/GovernmentBodies";
import FAQ from "@/components/services/FAQ";

const faqData = {
  title: "Frequently Asked Questions",
  subtitle: "Know about your query and inquire related questions",
  faqs: [
    {
      question: "How may does it take for as Legal Clinic?",
      answer:
        "The timeline varies depending on the type of service and complexity of the case. Typically, legal translations take 2-3 business days, while corporate documentation can take 5-7 business days. We'll provide you with a detailed timeline during your consultation.",
    },
    {
      question: "How soon i get a personal Lawyer?",
      answer:
        "You can schedule a consultation with one of our experienced lawyers within 24-48 hours of your initial inquiry. For urgent matters, same-day consultations may be available.",
    },
    {
      question: "Where can i check my case Progress?",
      answer:
        "We provide a dedicated client portal where you can track your case progress in real-time. You'll also receive regular email updates and can contact your assigned case manager directly for any questions.",
    },
  ],
};

const FinancialAdvisory = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FinancialHero />
      <BusinessTaxes />
      <ServicesGridTwo />
      <LegalTranslation />
      <ProcessSteps />
      <GovernmentBodies />
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
};

export default FinancialAdvisory;
