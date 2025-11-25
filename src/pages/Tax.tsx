import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import TaxHero from "@/components/tax/TaxHero";
import IndustriesSection from "@/components/tax/IndustriesSection";
import BusinessTaxes from "@/components/tax/BusinessTaxes";
import ProcessSteps from "@/components/tax/ProcessSteps";
import LegalComplaintService from "@/components/tax/LegalComplaintService";
import FAQ from "@/components/services/FAQ";
import {
  heroData,
  industriesSectionData,
  businessTaxesData,
  processStepsData,
  governmentBodiesData,
  taxLegalServicesData,
  faqData,
} from "@/data/tax";

const Tax = () => {
  return (
    <div className="min-h-screen">
      <YellowTopNav />
      <div className="relative">
        <Navigation />
      </div>
      <TaxHero data={heroData} />
      <IndustriesSection data={industriesSectionData} />
      <LegalComplaintService data={taxLegalServicesData} />
      <BusinessTaxes data={businessTaxesData} />
      <ProcessSteps data={processStepsData} />
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
};

export default Tax;
