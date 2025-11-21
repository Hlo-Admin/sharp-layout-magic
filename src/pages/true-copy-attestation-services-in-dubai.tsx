import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import trueCopyData from "@/data/trueCopyAttestation";

const TrueCopyAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${trueCopyData.heroData.image}`;

  const keywords = [
    "true copy attestation Dubai",
    "document attestation UAE",
    "true copy UAE",
    "official document stamping UAE",
    "GoKite PRO true copy services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>True Copy Attestation Services in Dubai, UAE | Document Support</title>
        <meta
          name="description"
          content="Get true copy attestation services in Dubai for business, HR, and visa documents. Fast, reliable verification and attestation across UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="True Copy Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Reliable and quick true copy attestation for your documents in the UAE – GoKite PRO Business Setup"
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={trueCopyData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {trueCopyData.introContent.title}
          </h2>
          {trueCopyData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={trueCopyData.benefitsData} />
        <SmeProcess data={trueCopyData.processData} />
        <SmeProcess data={trueCopyData.documentData} />
        <TarakheesCost data={trueCopyData.costData} />
        <FAQ data={trueCopyData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default TrueCopyAttestation;
