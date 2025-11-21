import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import memoData from "@/data/courtMemoDrafting";

const CourtMemoDrafting = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${memoData.heroData.image}`;

  const keywords = [
    "court memo drafting Dubai",
    "legal drafting services UAE",
    "court memo preparation",
    "GoKite court services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Court Memo Drafting Services in Dubai, UAE | Legal Support
        </title>

        <meta
          name="description"
          content="Professional court memo drafting services in Dubai. We help businesses and individuals prepare accurate legal documents for smooth court proceedings in UAE."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Court Memo Drafting Services in Dubai | Legal Support"
        />
        <meta
          property="og:description"
          content="Get expert assistance in drafting court memos and supporting legal documents for efficient court proceedings in Dubai."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={memoData.heroData} />
        <TarakheesBenefits data={memoData.benefitsData} />
        <SmeProcess data={memoData.processData} />
        <SmeProcess data={memoData.documentData} />
        <TarakheesCost data={memoData.costData} />
        <FAQ data={memoData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default CourtMemoDrafting;