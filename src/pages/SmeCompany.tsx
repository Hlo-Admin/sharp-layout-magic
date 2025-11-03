import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhySME from "@/components/services/WhySME";
import SmeAdvantages from "@/components/services/SmeAdvantages";
import SmeProcess from "@/components/services/SmeProcess";

import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import TextImage from "@/components/services/CostPoints";
import smecompany from "../data/smecompany";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Hero data={smecompany.heroData} />
      <WhySME data={smecompany.WhySME} />
      <SmeAdvantages data={smecompany.benefitsData} />

      <SmeProcess data={smecompany.processData} />
      <SmeProcess data={smecompany.documentData} />
      <SmeProcess data={smecompany.whysmeData} />
      <FAQ data={smecompany.faqData} />
      <Footer />
    </div>
  );
};

export default Index;
