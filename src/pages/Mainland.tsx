import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhatIsMainland from "@/components/services/WhatIsMainland";
import Benefits from "@/components/services/Benefits";
import MainlandBenefits from "@/components/services/MainlandBenefits";
import LicenseTypes from "@/components/services/LicenseTypes";
import CostSection from "@/components/services/CostSection";
import Steps from "@/components/services/Steps";
import Documents from "@/components/services/Documents";
import WhyTrustUs from "@/components/services/WhyTrustUs";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";

import mainlandData from "../data/mainland";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Hero data={mainlandData.heroData} />
      <WhatIsMainland data={mainlandData.whatIsMainlandData} />
      <MainlandBenefits data={(mainlandData as any).mainlandBenefitsData} />
      <LicenseTypes data={mainlandData.licenseTypesData} />
      <hr />
      <CostSection data={mainlandData.costSectionData} />
      <Steps data={mainlandData.stepsData} />
      <Documents data={mainlandData.documentsData} />
      <WhyTrustUs data={mainlandData.whyTrustUsData} />
      <FAQ data={mainlandData.faqData} />
      <Footer />
    </div>
  );
};

export default Index;
