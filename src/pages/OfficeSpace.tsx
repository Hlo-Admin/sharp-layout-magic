import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FinancialHero from "@/components/OfficeSpace/FinancialHero";
import NameRegister from "@/components/OfficeSpace/NameRegister";
import TrademarkBanner from "@/components/OfficeSpace/TrademarkBanner";
import SemicircleSection from "@/components/brand/SemicircleSection";
import GovernmentBodies from "@/components/OfficeSpace/GovernmentBodies";

// import BusinessTaxes from "@/components/financial/BusinessTaxes";
// import LegalTranslation from "@/components/financial/LegalTranslation";
// import ProcessSteps from "@/components/financial/ProcessSteps";
// import GovernmentBodies from "@/components/financial/GovernmentBodies";
import FAQ from "@/components/services/FAQ";
import {
  heroData,
  trademarkBannerData,
  semicircleData,
  governmentBodiesData,
  faqData,
} from "@/data/officespace";

const FinancialAdvisory = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FinancialHero data={heroData} />
      <NameRegister />
      <TrademarkBanner data={trademarkBannerData} />
      <SemicircleSection data={semicircleData} />
      <GovernmentBodies data={governmentBodiesData} />

      {/* <BusinessTaxes data={businessTaxesData} />
    
      <LegalTranslation data={legalTranslationData} />
      <ProcessSteps data={processStepsData} />
      <GovernmentBodies data={governmentBodiesData} /> */}
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
};

export default FinancialAdvisory;
