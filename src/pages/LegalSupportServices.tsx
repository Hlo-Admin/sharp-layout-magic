import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import FAQ from "@/components/services/FAQService";
import HeroSection from "@/components/brand/BrandHero";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";
import legalSupportData from "@/data/legalSupportData";

const LegalSupportServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <YellowTopNav />
      <div className="relative">
        <Navigation />
      </div>

      <HeroSection data={legalSupportData.heroData} />

      <ServiceCards data={legalSupportData.serviceCardsData} />

      <TrustedSection data={legalSupportData.trustedData} />

      <SemicircleSection data={legalSupportData.semicircleData} />

      <FAQ data={legalSupportData.faqData} />

      <Footer />
    </div>
  );
};

export default LegalSupportServices;
