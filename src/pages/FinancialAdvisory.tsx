import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import FinancialHero from "@/components/financial/FinancialHero";
import BusinessTaxes from "@/components/financial/BusinessTaxes";
import ServicesGridTwo from "@/components/financial/ServicesGridTwo";
import LegalTranslation from "@/components/financial/LegalTranslation";
import ProcessSteps from "@/components/financial/ProcessSteps";
import GovernmentBodies from "@/components/financial/GovernmentBodies";
import FAQ from "@/components/services/FAQ";
import {
  heroData,
  businessTaxesData,
  servicesGridTwoData,
  legalTranslationData,
  processStepsData,
  governmentBodiesData,
  faqData,
} from "@/data/finance";

const FinancialAdvisory = () => {
  return (
    <div className="min-h-screen">
      <YellowTopNav />
      <div className="relative">
        <Navigation />
      </div>
      <FinancialHero data={heroData} />
      <BusinessTaxes data={businessTaxesData} />
      <ServicesGridTwo data={servicesGridTwoData} />
      <LegalTranslation data={legalTranslationData} />
      <ProcessSteps data={processStepsData} />
      <GovernmentBodies data={governmentBodiesData} />
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
};

export default FinancialAdvisory;
