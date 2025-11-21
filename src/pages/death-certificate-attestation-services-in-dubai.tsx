import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import deathData from "@/data/deathCertificateAttestation";

const DeathCertificateAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${deathData.heroData.image}`;

  const keywords = [
    "death certificate attestation UAE",
    "MOFA attestation services Dubai",
    "UAE embassy attestation",
    "legal certificate attestation Dubai",
    "GoKite PRO document services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>Death Certificate Attestation Services in Dubai, UAE</title>
        <meta
          name="description"
          content="Get death certificates attested in Dubai with trusted services. We provide fast, reliable, and MOFA-approved attestation for legal use in UAE and abroad."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Death Certificate Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Secure and official attestation of death certificates for legal processes in UAE."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={deathData.heroData} />
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {deathData.introContent.title}
          </h2>
          {deathData.introContent.paragraphs.map((para, index) => (
            <p key={index} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={deathData.benefitsData} />
        <SmeProcess data={deathData.processData} />
        <SmeProcess data={deathData.documentData} />
        <TarakheesCost data={deathData.costData} />
        <FAQ data={deathData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default DeathCertificateAttestation;
