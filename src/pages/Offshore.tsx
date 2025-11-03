import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhatIsMainland from "@/components/services/WhatIsMainland";
import Benefits from "@/components/services/Benefits";
import PopularFreeZones from "@/components/services/PopularFreeZones";
import Documents from "@/components/services/Documents";

import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import TextImage from "@/components/services/CostPoints";
import offshore from "../data/offshore";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Hero data={offshore.heroData} />
      <WhatIsMainland data={offshore.whatIsMainlandData} />
      {/* <Benefits data={offshore.benefitsData} /> */}
      <PopularFreeZones data={offshore.freeZonesData} />
      <Documents data={offshore.documentsData} />
      <Documents data={offshore.procedureData} />

      <TextImage data={offshore.costSectionData} />
      <FAQ data={offshore.faqData} />
      <Footer />
    </div>
  );
};

export default Index;
