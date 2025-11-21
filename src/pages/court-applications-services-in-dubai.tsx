import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import courtData from "@/data/courtApplications";

const CourtApplications = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${courtData.heroData.image}`;

  const keywords = [
    "court applications Dubai",
    "legal filings UAE",
    "court case following Dubai",
    "application for court services",
    "GoKite legal support",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>Court Applications & Follow-Up Services Dubai</title>

        <meta
          name="description"
          content="Simplify your legal process with Court Applications and Follow-Up Services in Dubai. Efficient, reliable, and hassle-free assistance."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Court Applications & Follow-Up Services Dubai"
        />
        <meta
          property="og:description"
          content="Full support for legal filings and case documentation in Dubai courts. Trusted experts ensuring compliant and timely processing."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={courtData.heroData} />
        <TarakheesBenefits data={courtData.benefitsData} />
        <SmeProcess data={courtData.processData} />
        <SmeProcess data={courtData.documentData} />
        <TarakheesCost data={courtData.costData} />
        <FAQ data={courtData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default CourtApplications;
