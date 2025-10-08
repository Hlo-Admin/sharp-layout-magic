import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIsMainland from "@/components/WhatIsMainland";
import Benefits from "@/components/Benefits";
import LicenseTypes from "@/components/LicenseTypes";
import CostSection from "@/components/CostSection";
import Steps from "@/components/Steps";
import Documents from "@/components/Documents";
import WhyTrustUs from "@/components/WhyTrustUs";
import FAQ from "@/components/FAQ";
import Footer from "@/common/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatIsMainland />
      <Benefits />
      <LicenseTypes />
      <hr />
      <CostSection />
      <Steps />
      <Documents />
      <WhyTrustUs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
