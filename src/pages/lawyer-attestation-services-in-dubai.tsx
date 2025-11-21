import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import lawyerAttestationData from "@/data/lawyerAttestation";

const LawyerAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${lawyerAttestationData.heroData.image}`;

  const keywords = [
    "lawyer attestation Dubai",
    "legal document attestation UAE",
    "contract attestation Dubai",
    "business attestation services UAE",
    "legal support in Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Lawyer Attestation Services in Dubai, UAE | Business Documents
        </title>
        <meta
          name="description"
          content="Get lawyer attestation services in Dubai for legal and business documents. Fast, reliable attestation to ensure compliance and validity in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Lawyer Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Legal and reliable lawyer attestation for documents needed across UAE court, government and business processes."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={lawyerAttestationData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {lawyerAttestationData.introContent.title}
          </h2>
          {lawyerAttestationData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={lawyerAttestationData.benefitsData} />
        <SmeProcess data={lawyerAttestationData.processData} />
        <SmeProcess data={lawyerAttestationData.documentData} />
        <TarakheesCost data={lawyerAttestationData.costData} />
        <FAQ data={lawyerAttestationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default LawyerAttestation;
