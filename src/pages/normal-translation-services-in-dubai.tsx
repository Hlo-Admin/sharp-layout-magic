import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import normalTranslationData from "@/data/normalTranslation";

const NormalTranslation = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${normalTranslationData.heroData.image}`;

  const keywords = [
    "normal translation Dubai",
    "general document translation UAE",
    "quick translation Dubai",
    "GoKite translation services",
    "Arabic English translation services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>Normal Translation Services in Dubai, UAE</title>
        <meta
          name="description"
          content="Reliable normal translation services in Dubai. Translate general documents, certificates, and papers quickly for business and official purposes in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Normal Translation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Fast, affordable general translation services for non-legal documents across multiple languages in Dubai and UAE."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={normalTranslationData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {normalTranslationData.introContent.title}
          </h2>
          {normalTranslationData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={normalTranslationData.benefitsData} />
        <SmeProcess data={normalTranslationData.processData} />
        <SmeProcess data={normalTranslationData.documentData} />
        <TarakheesCost data={normalTranslationData.costData} />
        <FAQ data={normalTranslationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default NormalTranslation;
