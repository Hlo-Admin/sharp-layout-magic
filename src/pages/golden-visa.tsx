import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import goldenVisaData from "@/data/goldenVisa";

const GoldenVisa = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${goldenVisaData.heroData.image}`;

  const keywords = [
    "UAE golden visa",
    "Dubai golden visa",
    "10 year UAE residency",
    "Golden visa requirements UAE",
    "Dubai investor visa",
    "UAE long term visa",
    "GoKite business setup",
    "Residency in Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>UAE Golden Visa Services in Dubai | GoKite Business Setup</title>

        <meta
          name="title"
          content="Dubai Golden Visa Services | UAE Residency – GoKite Business Setup"
        />

        <meta
          name="description"
          content="Apply for the UAE Golden Visa with Go Kite Business Setup Services. Get 5–10 year residency, family sponsorship, investor visas & full business ownership."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="UAE Golden Visa Services in Dubai | GoKite Business Setup"
        />
        <meta
          property="og:description"
          content="10-Year UAE Golden Visa support for investors & professionals with fast approvals and full documentation support."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={goldenVisaData.heroData} />
        <TarakheesBenefits data={goldenVisaData.benefitsData} />
        <SmeProcess data={goldenVisaData.processData} />
        <SmeProcess data={goldenVisaData.documentData} />
        <TarakheesCost data={goldenVisaData.costData} />
        <FAQ data={goldenVisaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default GoldenVisa;