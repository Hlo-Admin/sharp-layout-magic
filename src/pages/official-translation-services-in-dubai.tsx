import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import officialTranslationData from "@/data/officialTranslation";

const OfficialTranslation = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${officialTranslationData.heroData.image}`;

  const keywords = [
    "official translation Dubai",
    "certified translation UAE",
    "business document translation",
    "Arabic to English translation UAE",
    "GoKite translation services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Official Translation Services in Dubai, UAE | Business Support
        </title>
        <meta
          name="description"
          content="Get official translation services in Dubai for business, legal, and government documents. Fast, accurate, and certified translations across UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Official Translation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Certified translation services for legal and business documents accepted across UAE government bodies."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={officialTranslationData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {officialTranslationData.introContent.title}
          </h2>
          {officialTranslationData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={officialTranslationData.benefitsData} />
        <SmeProcess data={officialTranslationData.processData} />
        <SmeProcess data={officialTranslationData.documentData} />
        <TarakheesCost data={officialTranslationData.costData} />
        <FAQ data={officialTranslationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default OfficialTranslation;
