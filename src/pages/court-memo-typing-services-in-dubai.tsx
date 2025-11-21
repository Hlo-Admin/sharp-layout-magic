import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import courtMemoTypingData from "@/data/courtMemoTyping";

const CourtMemoTyping = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${courtMemoTypingData.heroData.image}`;

  const keywords = [
    "court memo typing Dubai",
    "legal typing service UAE",
    "court document preparation Dubai",
    "legal memo Dubai UAE",
    "GoKite court services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Court Memo Typing Services in Dubai, UAE | Legal Support
        </title>
        <meta
          name="description"
          content="Get professional court memo typing services in Dubai. Fast, accurate preparation of legal documents for business and individual cases across UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Court Memo Typing Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Legal memo typing services for case preparation, petitions, and judicial correspondence in Dubai and UAE courts."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={courtMemoTypingData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {courtMemoTypingData.introContent.title}
          </h2>
          {courtMemoTypingData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={courtMemoTypingData.benefitsData} />
        <SmeProcess data={courtMemoTypingData.processData} />
        <SmeProcess data={courtMemoTypingData.documentData} />
        <TarakheesCost data={courtMemoTypingData.costData} />
        <FAQ data={courtMemoTypingData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default CourtMemoTyping;
