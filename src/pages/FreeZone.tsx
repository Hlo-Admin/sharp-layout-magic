import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhatIsMainland from "@/components/services/WhatIsMainland";
import PopularFreeZones from "@/components/services/PopularFreeZones";
import Documents from "@/components/services/Documents";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import TextImage from "@/components/services/CostPoints";
import freezone from "../data/freezone";

const Index = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${freezone.heroData.image}`;

  const keywords = [
    "freezone company setup UAE",
    "freezone business setup Dubai",
    "Dubai free zone license",
    "UAE freezone company registration",
    "freezone business license UAE",
    "100% ownership UAE",
    "freezone company benefits",
    "Dubai free zone trading",
    "Go Kite PRO",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Freezone Business Setup Dubai UAE | 100% Ownership | Go Kite PRO
        </title>

        <meta
          name="description"
          content="Start your Free Zone Company Setup in UAE. Fast licensing, 100% foreign ownership, and tax benefits. Register your business under UAE free zones with Go Kite PRO."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Go Kite PRO Business Setup" />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="Freezone Company Setup in Dubai | Go Kite PRO" />
        <meta
          property="og:description"
          content="Fast Freezone business setup in UAE with expert support and full ownership benefits."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="Go Kite PRO" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Freezone Company Setup in Dubai | Go Kite PRO" />
        <meta
          name="twitter:description"
          content="Get your freezone business license fast with complete guidance in UAE."
        />
        <meta name="twitter:image" content={imageUrl} />

        {/* Robots & GEO */}
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, UAE" />
      </Helmet>

      <div className="min-h-screen">
        {/* <Navigation /> */}
        <Hero data={freezone.heroData} />
        <WhatIsMainland data={freezone.whatIsMainlandData} />
        <PopularFreeZones data={freezone.freeZonesData} />
        <hr />
        <Documents data={freezone.procedureData} />
        <Documents data={freezone.documentsData} />
        <TextImage data={freezone.costSectionData} />
        <FAQ data={freezone.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
