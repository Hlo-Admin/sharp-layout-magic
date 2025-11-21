import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import degreeData from "@/data/degreeCertificateAttestation";

const DegreeCertificateAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${degreeData.heroData.image}`;

  const keywords = [
    "degree certificate attestation Dubai",
    "MOFA attestation UAE",
    "UAE embassy attestation services",
    "education certificate attestation UAE",
    "GoKite PRO attestation Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>Degree Certificate Attestation Services in Dubai, UAE</title>
        <meta
          name="description"
          content="Fast degree certificate attestation in Dubai, UAE. Ensure global validity for jobs, studies, or migration with reliable MOFA-approved attestation services."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Degree Certificate Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Legal degree certificate attestation for job applications, academics, immigration, and more."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={degreeData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">{degreeData.introContent.title}</h2>
          {degreeData.introContent.paragraphs.map((para, index) => (
            <p key={index} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={degreeData.benefitsData} />
        <SmeProcess data={degreeData.processData} />
        <SmeProcess data={degreeData.documentData} />
        <TarakheesCost data={degreeData.costData} />
        <FAQ data={degreeData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default DegreeCertificateAttestation;
