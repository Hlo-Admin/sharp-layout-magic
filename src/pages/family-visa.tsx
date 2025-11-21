import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import familyVisaData from "@/data/familyVisa";

const FamilyVisa = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${familyVisaData.heroData.image}`;

  const keywords = [
    "family visa Dubai",
    "UAE family residency",
    "Sponsor spouse Dubai",
    "Sponsor parents UAE",
    "Dependent visa Dubai",
    "Dubai visa for wife and children",
    "UAE family visa cost",
    "GoKite family visa services",
  ].join(", ");

  return (
    <>
      <Helmet>
        {/* ---------- MAIN SEO ---------- */}
        <title>Dubai Family Visa | Sponsor Spouse, Children & Parents Easily</title>

        <meta
          name="title"
          content="Dubai Family Visa Services | Sponsor Spouse, Children & Parents"
        />

        <meta
          name="description"
          content="Bring your loved ones to Dubai with a Family Visa. Sponsor spouse, children & parents with ease—meeting salary criteria, medical clearance, and fast processing."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        {/* ---------- CANONICAL ---------- */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        {/* ---------- OPEN GRAPH ---------- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />

        <meta
          property="og:title"
          content="Dubai Family Visa | Sponsor Spouse, Children & Parents Easily"
        />

        <meta
          property="og:description"
          content="Sponsor your family in Dubai easily with GoKite PRO. Fast visa processing, medical & Emirates ID support, and full documentation assistance."
        />

        {/* ---------- TWITTER META ---------- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={familyVisaData.heroData} />
        <TarakheesBenefits data={familyVisaData.benefitsData} />
        <SmeProcess data={familyVisaData.processData} />
        <SmeProcess data={familyVisaData.documentData} />
        <TarakheesCost data={familyVisaData.costData} />
        <FAQ data={familyVisaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default FamilyVisa;
