import { Helmet } from "react-helmet-async";
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
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${offshore.heroData.image}`;

  const keywords = [
    "offshore company setup UAE",
    "offshore business setup Dubai",
    "international business company UAE",
    "UAE offshore company registration",
    "offshore business license UAE",
    "Dubai offshore company benefits",
    "asset protection UAE",
    "tax free company UAE",
    "Go Kite PRO",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Offshore Company Formation in UAE | Secure & Tax-Efficient Setup
        </title>

        <meta
          name="description"
          content="Offshore Company Formation in UAE with expert support. Enjoy tax benefits, privacy, and easy setup for your international business operations."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Go Kite PRO Business Setup" />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:title"
          content="Offshore Company Formation in Dubai UAE | Go Kite PRO"
        />
        <meta
          property="og:description"
          content="Start Offshore Business in UAE with full ownership, privacy & tax advantages. Incorporate today with Go Kite PRO."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="Go Kite PRO" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Offshore Company Formation in Dubai UAE | Go Kite PRO"
        />
        <meta
          name="twitter:description"
          content="Secure and tax-friendly Offshore Company setup in UAE with Go Kite PRO."
        />
        <meta name="twitter:image" content={imageUrl} />

        {/* Robots & GEO */}
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, UAE" />
      </Helmet>

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
    </>
  );
};

export default Index;
