import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import marriageData from "@/data/marriageCertificateAttestation";

const MarriageCertificateAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${marriageData.heroData.image}`;

  const keywords = [
    "marriage certificate attestation Dubai",
    "family visa document UAE",
    "MOFA attestation services Dubai",
    "legal certificate attestation UAE",
    "GoKite PRO attestation",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Marriage Certificate Attestation Services in Dubai, UAE
        </title>
        <meta
          name="description"
          content="Get marriage certificate Attestation Services in Dubai for business, visa, and family sponsorship purposes. Fast, reliable attestation services across UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Marriage Certificate Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Secure and approved attestation of marriage certificates for residency, visa, and sponsorship purposes."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={marriageData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">{marriageData.introContent.title}</h2>
          {marriageData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={marriageData.benefitsData} />
        <SmeProcess data={marriageData.processData} />
        <SmeProcess data={marriageData.documentData} />
        <TarakheesCost data={marriageData.costData} />
        <FAQ data={marriageData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default MarriageCertificateAttestation;
