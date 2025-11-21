import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import ftaData from "@/data/ftaWorks";

const FTAWorks = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${ftaData.heroData.image}`;

  const keywords = [
    "FTA services UAE",
    "VAT compliance Dubai",
    "tax services UAE",
    "GoKite FTA support",
    "tax registration Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>FTA Works Services in Dubai, UAE | VAT & Tax Compliance</title>

        <meta
          name="description"
          content="Get FTA works services in Dubai for VAT and tax compliance. Expert support for registration, filings, and smooth business operations in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="FTA Works Services in Dubai, UAE | VAT & Tax Compliance"
        />
        <meta
          property="og:description"
          content="Let GoKite PRO handle your FTA tax compliance, VAT registration, and filing services with ease and expertise."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={ftaData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {ftaData.introContent.title}
          </h2>
          {ftaData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={ftaData.benefitsData} />
        <SmeProcess data={ftaData.processData} />
        <SmeProcess data={ftaData.documentData} />
        <TarakheesCost data={ftaData.costData} />
        <FAQ data={ftaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default FTAWorks;
