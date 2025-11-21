import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import caseData from "@/data/caseClearance";

const CaseClearance = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${caseData.heroData.image}`;

  const keywords = [
    "case clearance Dubai",
    "legal clearance UAE",
    "case processing Dubai",
    "GoKite case clearance services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>Case Clearance Services in Dubai | Fast Processing</title>

        <meta
          name="description"
          content="Obtain Case Clearance Services in Dubai with ease. Fast, professional, and accurate support for legal clearance and documentation."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Case Clearance Services in Dubai | Fast Processing"
        />
        <meta
          property="og:description"
          content="Professional support for obtaining legal and administrative case clearance in Dubai. Efficient, compliant, and hassle-free service."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={caseData.heroData} />
        <TarakheesBenefits data={caseData.benefitsData} />
        <SmeProcess data={caseData.processData} />
        <SmeProcess data={caseData.documentData} />
        <TarakheesCost data={caseData.costData} />
        <FAQ data={caseData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default CaseClearance;
