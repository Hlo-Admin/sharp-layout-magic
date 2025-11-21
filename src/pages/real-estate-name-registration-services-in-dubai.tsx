import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import realEstateData from "@/data/realEstateNameRegistration";

const RealEstateNameRegistration = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${realEstateData.heroData.image}`;

  const keywords = [
    "real estate name registration Dubai",
    "register real estate brand UAE",
    "DED approval real estate name Dubai",
    "real estate business name protection",
    "GoKite real estate services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Dubai Real Estate Name Registration | Protect Your Business
        </title>

        <meta
          name="description"
          content="Fast real estate name registration services in Dubai. Get DED approval, protect your brand identity, and legally secure your property business in the UAE."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:title"
          content="Dubai Real Estate Name Registration | Protect Your Business"
        />
        <meta
          property="og:description"
          content="Secure your real estate brand name legally with DED & DLD approval. Fast, compliant, and expert support in Dubai."
        />
        <meta property="og:image" content={imageUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={realEstateData.heroData} />
        <TarakheesBenefits data={realEstateData.benefitsData} />
        <SmeProcess data={realEstateData.processData} />
        <SmeProcess data={realEstateData.documentData} />
        <TarakheesCost data={realEstateData.costData} />
        <FAQ data={realEstateData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default RealEstateNameRegistration;