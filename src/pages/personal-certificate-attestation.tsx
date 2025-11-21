import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import attestationData from "@/data/personalCertificateAttestation";

const PersonalCertificateAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${attestationData.heroData.image}`;

  const keywords = [
    "personal certificate attestation Dubai",
    "UAE certificate attestation",
    "MOFA attestation Dubai",
    "marriage certificate attestation UAE",
    "birth certificate attestation Dubai",
    "GoKite PRO attestation services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Personal Certificate Attestation Services in Dubai, UAE
        </title>
        <meta
          name="description"
          content="Get Personal Certificate Attestation Services in Dubai for visa, HR, or business setup purposes. Fast, reliable attestation services across UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Personal Certificate Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Full assistance for attestation of personal documents including certificates, reports, and passports in Dubai."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={attestationData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {attestationData.introContent.title}
          </h2>
          {attestationData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={attestationData.benefitsData} />
        <SmeProcess data={attestationData.processData} />
        <SmeProcess data={attestationData.documentData} />
        <TarakheesCost data={attestationData.costData} />
        <FAQ data={attestationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default PersonalCertificateAttestation;
