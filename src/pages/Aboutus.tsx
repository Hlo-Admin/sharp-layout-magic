import Navigation from "@/components/common/Navigation";
import Hero from "@/components/aboutus/Hero";
import BusinessSetup from "@/components/aboutus/BusinessSetup";
import BusinessGrowth from "@/components/services/BusinessGrowth";
import FounderAbout from "@/components/services/FounderAbout";
import WhatWeDo from "@/components/aboutus/WhatWeDo";
import Howwework from "@/components/aboutus/Howwework";
import Advantages from "@/components/aboutus/Advantages";
import WorkingProcess from "@/components/aboutus/WorkingProcess";
import Testimonials from "@/components/aboutus/Testimonial";
import Contact from "@/components/aboutus/Contact";
import Footer from "@/components/common/Footer";

import aboutus from "../data/aboutus";
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Hero data={aboutus.heroData} />
      <BusinessSetup data={aboutus.businessSetupData} />
      <BusinessGrowth />
      <FounderAbout />
      <WhatWeDo />
      <Howwework />
      <Advantages data={aboutus.costData} />
      <WorkingProcess />
      <hr className="border-0 h-[10px] bg-[#F0F0F0] rounded-full" />
      <Testimonials />
      <hr className="border-0 h-[10px] bg-[#F0F0F0] rounded-full" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
