import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import WhatIsMainland from "@/components/services/WhatIsMainland";
import Benefits from "@/components/services/Benefits";
import Steps from "@/components/services/Steps";
import Documents from "@/components/services/Documents";
import CostSection from "@/components/services/CostSection";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";

import tradeNameData from "../data/tradeNameRegistration";

const TradeNameRegistration = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${tradeNameData.heroData.image}`;

  const keywords = [
    "trade name registration Dubai",
    "register business name UAE",
    "DED trade name",
    "Dubai business setup",
    "trade name availability UAE",
    "brand identity registration UAE",
    "Go Kite PRO",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>Trade Name Registration Services in Dubai | Easy Setup</title>
        <meta
          name="description"
          content="Trade Name Registration Services in Dubai. Get fast approvals, expert guidance, and complete legal support for your business setup."
        />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph */}
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="Trade Name Registration Services in Dubai | Easy Setup" />
        <meta property="og:description" content="Trade Name Registration Services in Dubai. Get fast approvals, expert guidance, and complete legal support for your business setup." />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trade Name Registration Services in Dubai | Easy Setup" />
        <meta name="twitter:description" content="Secure your business identity in Dubai with fast Trade Name Approval." />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={tradeNameData.heroData} />
        <WhatIsMainland data={tradeNameData.whatIsTradenameData} />
        <Benefits data={tradeNameData.benefitsData} />
        <Steps data={tradeNameData.stepsData} />
        <Documents data={tradeNameData.documentsData} />
        <CostSection data={tradeNameData.costSectionData} />
        <FAQ data={tradeNameData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default TradeNameRegistration;
