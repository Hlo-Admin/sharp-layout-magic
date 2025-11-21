import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import diplomaData from "@/data/diplomaCertificateAttestation";

const DiplomaCertificateAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${diplomaData.heroData.image}`;

  const keywords = [
    "diploma certificate attestation UAE",
    "MOFA attestation Dubai",
    "UAE embassy attestation services",
    "education certificate attestation UAE",
    "GoKite PRO attestation Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>Diploma Certificate Attestation Services in Dubai, UAE</title>
        <meta
          name="description"
          content="Diploma certificate attestation in Dubai to support company setup, trade licensing, and legal approvals. Fast and reliable attestation services in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Diploma Certificate Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Legal diploma certificate attestation for higher education, job applications, or government approvals inside UAE."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={diplomaData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {diplomaData.introContent.title}
          </h2>
          {diplomaData.introContent.paragraphs.map((para, index) => (
            <p key={index} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={diplomaData.benefitsData} />
        <SmeProcess data={diplomaData.processData} />
        <SmeProcess data={diplomaData.documentData} />
        <TarakheesCost data={diplomaData.costData} />
        <FAQ data={diplomaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default DiplomaCertificateAttestation;
