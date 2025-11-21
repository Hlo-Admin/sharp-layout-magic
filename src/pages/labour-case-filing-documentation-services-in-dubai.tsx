import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import labourCaseData from "@/data/labourCaseFiling";

const LabourCaseFiling = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${labourCaseData.heroData.image}`;

  const keywords = [
    "labour case filing Dubai",
    "labour documentation UAE",
    "file labour complaint Dubai",
    "MOHRE dispute Dubai",
    "GoKite labour services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Labour Case Filing and Documentation Services in Dubai, UAE
        </title>

        <meta
          name="description"
          content="Get professional labour case filing and documentation services in Dubai. Ensure compliance, smooth legal processing, and protection of business rights in UAE."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Labour Case Filing & Documentation Services in Dubai"
        />
        <meta
          property="og:description"
          content="Legal assistance for labour disputes and documentation in UAE. Fast support for filing complaints and ensuring resolution."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={labourCaseData.heroData} />
        <TarakheesBenefits data={labourCaseData.benefitsData} />
        <SmeProcess data={labourCaseData.processData} />
        <SmeProcess data={labourCaseData.documentData} />
        <TarakheesCost data={labourCaseData.costData} />
        <FAQ data={labourCaseData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default LabourCaseFiling;
