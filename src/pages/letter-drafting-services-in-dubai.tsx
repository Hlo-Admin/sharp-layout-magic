import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import letterDraftingData from "@/data/letterDrafting";

const LetterDrafting = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${letterDraftingData.heroData.image}`;

  const keywords = [
    "letter drafting Dubai",
    "professional letter services UAE",
    "legal notice drafting UAE",
    "GoKite business support",
    "formal letter writing Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Letter Drafting Services in Dubai, UAE | Business & Legal Support
        </title>
        <meta
          name="description"
          content="Get professional letter drafting services in Dubai for business, legal, and official documents. Fast, accurate, and reliable support across UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Letter Drafting Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Professional legal and business letter preparation services in Dubai for individuals and companies."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={letterDraftingData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {letterDraftingData.introContent.title}
          </h2>
          {letterDraftingData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={letterDraftingData.benefitsData} />
        <SmeProcess data={letterDraftingData.processData} />
        <SmeProcess data={letterDraftingData.documentData} />
        <TarakheesCost data={letterDraftingData.costData} />
        <FAQ data={letterDraftingData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default LetterDrafting;