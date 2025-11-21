import { Helmet } from "react-helmet-async";

import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";

import brandNameData from "@/data/brandNameRegistration";

const BrandNameRegistration = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${brandNameData.heroData.image}`;

  const keywords = [
    "brand name registration Dubai",
    "trademark Dubai",
    "register brand UAE",
    "Dubai trademark services",
    "UAE brand registration cost",
    "Register a company name Dubai",
    "GoKite brand registration",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Brand Name Registration Services in Dubai | Business Setup
        </title>
        <meta
          name="title"
          content="Brand Name Registration Services in Dubai | Business Setup"
        />
        <meta
          name="description"
          content="Secure your identity with Brand Name Registration Services in Dubai. Fast approvals, expert support, and complete business setup guidance."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        {/* OG */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Brand Name Registration Services in Dubai | Business Setup"
        />
        <meta
          property="og:description"
          content="Protect and register your business brand name with fast and compliant registration services in Dubai. Get expert support from GoKite."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />
      </Helmet>

      <div className="min-h-screen">
        {/* HERO */}
        <Hero data={brandNameData.heroData} />

        {/* BENEFITS — (Used as intro cards + highlight cards) */}
        <TarakheesBenefits data={brandNameData.benefitsData} />

        {/* PROCESS SECTION */}
        <SmeProcess data={brandNameData.processData} />

        {/* DOCUMENTS SECTION */}
        <SmeProcess data={brandNameData.documentData} />

        {/* COST SECTION */}
        <TarakheesCost data={brandNameData.costData} />

        {/* FAQ SECTION */}
        <FAQ data={brandNameData.faqData} />

        <Footer />
      </div>
    </>
  );
};

export default BrandNameRegistration;
