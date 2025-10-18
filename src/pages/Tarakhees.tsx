import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhySME from "@/components/services/WhySME";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import TarakheesIndustries from "@/components/services/TarakheesIndustries";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQ";
import Footer from "@/components/common/Footer";
import tarakhees from "../data/tarakhees";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Hero data={tarakhees.heroData} />
      <WhySME data={tarakhees.Whattarakhees} />
      <TarakheesBenefits data={tarakhees.benefitsData} />
      <TarakheesIndustries data={tarakhees.tarakheesIndustriesData} />
      <SmeProcess data={tarakhees.processData} />
      <SmeProcess data={tarakhees.documentData} />
      <TarakheesCost data={tarakhees.costData} />
      <FAQ data={tarakhees.faqData} />
      <Footer />
    </div>
  );
};

export default Index;
