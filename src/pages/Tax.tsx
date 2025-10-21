import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import TaxHero from "@/components/tax/TaxHero";
import BusinessTaxes from "@/components/financial/BusinessTaxes";
import ProcessSteps from "@/components/financial/ProcessSteps";
import LegalComplaintService from "@/components/tax/LegalComplaintService";
import FAQ from "@/components/services/FAQ";
import {
  heroData,
  businessTaxesData,
  processStepsData,
  governmentBodiesData,
  taxLegalServicesData,
  faqData,
} from "@/data/tax";

const Tax = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TaxHero data={heroData} />
      <LegalComplaintService data={taxLegalServicesData} />
      <BusinessTaxes data={businessTaxesData} />
      <ProcessSteps data={processStepsData} />
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
};

export default Tax;
