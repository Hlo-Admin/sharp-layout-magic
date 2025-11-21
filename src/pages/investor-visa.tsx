import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import investorVisaData from "@/data/investorVisa";

const InvestorVisa = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${investorVisaData.heroData.image}`;

  const keywords = [
    "Investor visa Dubai",
    "UAE investor visa",
    "Dubai residency visa",
    "Investor green visa UAE",
    "Invest in Dubai",
    "UAE golden visa",
    "Dubai business setup",
    "GoKite business setup",
    "UAE company investor visa",
    "Business residency UAE"
  ].join(", ");

  return (
    <>
      <Helmet>
        {/* ---------- PRIMARY SEO ---------- */}
        <title>Investor Visa Services in Dubai, UAE | GoKite Business Setup</title>

        <meta
          name="title"
          content="Investor Visa Services in Dubai, UAE | GoKite Business Setup"
        />

        <meta
          name="description"
          content="Apply for a Dubai Investor Visa with GoKite Business. Get residency, sponsor your family, and set up your company in the UAE. Expert consultants & fast approvals."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        {/* ---------- CANONICAL & LANGUAGE ---------- */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        {/* ---------- OPEN GRAPH (FACEBOOK / LINKEDIN) ---------- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:locale" content="en_AE" />

        <meta
          property="og:title"
          content="Investor Visa Services in Dubai, UAE | GoKite Business Setup"
        />

        <meta
          property="og:description"
          content="Get UAE residency via investment. GoKite Business Setup handles your investor visa, company setup, family sponsorship & approvals."
        />

        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="GoKite Business Setup" />

        {/* ---------- TWITTER META ---------- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />

        <meta
          name="twitter:title"
          content="Investor Visa Services in Dubai, UAE | GoKite Business Setup"
        />

        <meta
          name="twitter:description"
          content="Dubai investor visa with fast approvals, residency benefits, 100% ownership & full business setup support."
        />

        <meta name="twitter:image" content={imageUrl} />

        {/* ---------- ADDITIONAL SEO SIGNALS ---------- */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
      </Helmet>

      <div className="min-h-screen">
        {/* ❗ NO <Navigation /> HERE (prevents double header) */}

        <Hero data={investorVisaData.heroData} />
        <TarakheesBenefits data={investorVisaData.benefitsData} />
        <SmeProcess data={investorVisaData.processData} />
        <SmeProcess data={investorVisaData.documentData} />
        <TarakheesCost data={investorVisaData.costData} />
        <FAQ data={investorVisaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default InvestorVisa;