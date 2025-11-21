import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import mofaData from "@/data/mofaServices";

const MOFAServices = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${mofaData.heroData.image}`;

  const keywords = [
    "MOFA attestation Dubai",
    "document attestation UAE",
    "Ministry of Foreign Affairs Dubai",
    "MOFA services UAE",
    "GoKite PRO attestation Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>MOFA Services in Dubai, UAE | Business & Document Attestation</title>
        <meta
          name="description"
          content="Get MOFA attestation services in Dubai for business setup and official documents. Fast, reliable legalization to ensure compliance across UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta property="og:title" content="MOFA Services in Dubai, UAE" />
        <meta
          property="og:description"
          content="Professional Ministry of Foreign Affairs attestation services in Dubai for your legal, corporate, and personal documents."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={mofaData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {mofaData.introContent.title}
          </h2>
          {mofaData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={mofaData.benefitsData} />
        <SmeProcess data={mofaData.processData} />
        <SmeProcess data={mofaData.documentData} />
        <TarakheesCost data={mofaData.costData} />
        <FAQ data={mofaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default MOFAServices;
