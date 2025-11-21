import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import schoolData from "@/data/schoolCertificateAttestation";

const SchoolCertificateAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${schoolData.heroData.image}`;

  const keywords = [
    "school certificate attestation UAE",
    "MOFA attestation Dubai",
    "UAE embassy attestation services",
    "education certificate attestation UAE",
    "GoKite PRO attestation Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>School Certificate Attestation Services in Dubai, UAE</title>
        <meta
          name="description"
          content="Get school certificate attestation services in Dubai for business, visa, or HR purposes. Fast, reliable attestation services to meet UAE compliance."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="School Certificate Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Approved, fast attestation of school certificates for UAE legal and educational use."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={schoolData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {schoolData.introContent.title}
          </h2>
          {schoolData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={schoolData.benefitsData} />
        <SmeProcess data={schoolData.processData} />
        <SmeProcess data={schoolData.documentData} />
        <TarakheesCost data={schoolData.costData} />
        <FAQ data={schoolData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default SchoolCertificateAttestation;
