import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import legalTranslationData from "@/data/legalTranslation";

const LegalTranslation = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${legalTranslationData.heroData.image}`;

  const keywords = [
    "legal translation Dubai",
    "certified document translation UAE",
    "Ministry of Justice translation",
    "GoKite translation services UAE",
    "Arabic document translation Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Legal Translation Services in Dubai, UAE | Certified Translators
        </title>

        <meta
          name="description"
          content="Get certified legal translation services in Dubai for contracts, agreements, official documents, and litigation. Fast, accurate, and government-approved translations."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Legal Translation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Fast and certified legal translation services accepted by all UAE courts & government bodies. Available in Arabic, English & more."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={legalTranslationData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {legalTranslationData.introContent.title}
          </h2>
          {legalTranslationData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={legalTranslationData.benefitsData} />
        <SmeProcess data={legalTranslationData.processData} />
        <SmeProcess data={legalTranslationData.documentData} />
        <TarakheesCost data={legalTranslationData.costData} />
        <FAQ data={legalTranslationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default LegalTranslation;
