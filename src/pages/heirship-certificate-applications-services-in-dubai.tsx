import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import heirshipData from "@/data/heirshipCertificate";

const HeirshipCertificate = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${heirshipData.heroData.image}`;

  const keywords = [
    "heirship certificate Dubai",
    "inheritance documentation UAE",
    "legal heir certificate",
    "Dubai court inheritance",
    "GoKite heirship services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Heirship Certificate Application Services in Dubai, UAE
        </title>

        <meta
          name="description"
          content="Get heirship certificate application services in Dubai. Expert legal support for inheritance documentation, approvals, and smooth processing in UAE."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Heirship Certificate Application Services in Dubai"
        />
        <meta
          property="og:description"
          content="Expert assistance in filing, documentation, and approval of heirship certificates in Dubai. Ensure legal compliance and smooth processing."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={heirshipData.heroData} />
        <TarakheesBenefits data={heirshipData.benefitsData} />
        <SmeProcess data={heirshipData.processData} />
        <SmeProcess data={heirshipData.documentData} />
        <TarakheesCost data={heirshipData.costData} />
        <FAQ data={heirshipData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default HeirshipCertificate;