import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhatIsMainland from "@/components/services/WhatIsMainland";
import Benefits from "@/components/services/Benefits";
import PopularFreeZones from "@/components/services/PopularFreeZones";
import Documents from "@/components/services/Documents";

import FAQ from "@/components/services/FAQ";
import Footer from "@/components/common/Footer";
import TextImage from "@/components/services/CostPoints";
import freezone from "../data/freezone";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Hero data={freezone.heroData} />
      <WhatIsMainland data={freezone.whatIsMainlandData} />
      <Benefits data={freezone.benefitsData} />
      <PopularFreeZones data={freezone.freeZonesData} />
      <hr />
      <Documents data={freezone.procedureData} />
      <Documents data={freezone.documentsData} />
      <TextImage data={freezone.costSectionData} />
      <FAQ data={freezone.faqData} />
      <Footer />
    </div>
  );
};

export default Index;
