import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import chequeData from "@/data/chequeExecution";

const ChequeExecution = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${chequeData.heroData.image}`;

  const keywords = [
    "cheque execution Dubai",
    "bounced cheque legal process",
    "file cheque case UAE",
    "Dubai cheque dispute",
    "GoKite cheque legal services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Cheque Execution Filing Services in Dubai, UAE | Legal Support
        </title>

        <meta
          name="description"
          content="Expert cheque execution filing services in Dubai. We help businesses and individuals resolve cheque disputes quickly through proper legal process."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Cheque Execution Filing Services in Dubai | Legal Support"
        />
        <meta
          property="og:description"
          content="Resolve bounced cheque disputes efficiently with legal filing and follow-up support in Dubai. Professional assistance by GoKite PRO."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={chequeData.heroData} />
        <TarakheesBenefits data={chequeData.benefitsData} />
        <SmeProcess data={chequeData.processData} />
        <SmeProcess data={chequeData.documentData} />
        <TarakheesCost data={chequeData.costData} />
        <FAQ data={chequeData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default ChequeExecution;