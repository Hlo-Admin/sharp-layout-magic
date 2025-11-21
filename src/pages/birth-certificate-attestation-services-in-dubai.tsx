import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import birthData from "@/data/birthCertificateAttestation";

const BirthCertificateAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${birthData.heroData.image}`;

  const keywords = [
    "birth certificate attestation Dubai",
    "MOFA certificate attestation",
    "UAE attestation services",
    "legal document attestation UAE",
    "GoKite PRO attestation Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>Dubai Birth Certificate Attestation | Fast & Reliable Services</title>
        <meta
          name="description"
          content="Fast birth certificate attestation services in Dubai. Complete notary, embassy, and MOFA attestation for residency, education, and family visa applications."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Birth Certificate Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Secure, fast, and approved attestation for all birth certificates for use in UAE."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={birthData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {birthData.introContent.title}
          </h2>
          {birthData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={birthData.benefitsData} />
        <SmeProcess data={birthData.processData} />
        <SmeProcess data={birthData.documentData} />

        <TarakheesCost data={birthData.costData} />
        <FAQ data={birthData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default BirthCertificateAttestation;
