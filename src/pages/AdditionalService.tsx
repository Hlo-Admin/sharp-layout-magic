import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FinancialHero from "@/components/AdditionalService/FinancialHero";
import TrademarkBanner from "@/components/AdditionalService/TrademarkBanner";
import ServicesGridTwo from "@/components/AdditionalService/ServicesGridTwo";
import ServicesGrid from "@/components/AdditionalService/ServicesGrid";
import VisaCardsGrid from "@/components/AdditionalService/VisaCardsGrid";
import FAQ from "@/components/services/FAQ";
import {
  heroData,
  trademarkBannerData,
  servicesGridTwoData,
  servicesGridData,
  visaCardsData,
  faqData,
} from "@/data/additionalservice";

const FinancialAdvisory = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FinancialHero data={heroData} />
      <TrademarkBanner data={trademarkBannerData} />
      <ServicesGrid data={servicesGridData} />
      <ServicesGridTwo data={servicesGridTwoData} />
      <VisaCardsGrid data={visaCardsData} />
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
};

export default FinancialAdvisory;
