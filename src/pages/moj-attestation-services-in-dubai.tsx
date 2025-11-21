import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import mojData from "@/data/mojAttestation";

const MOJAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${mojData.heroData.image}`;

  const keywords = [
    "MOJ attestation Dubai",
    "legal document attestation UAE",
    "Ministry of Justice UAE",
    "legalization UAE",
    "GoKite PRO attestation services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>MOJ Attestation Services in Dubai, UAE | Business Documents</title>
        <meta
          name="description"
          content="Get MOJ attestation services in Dubai for business and legal documents. Fast, reliable services to ensure compliance and official recognition in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta property="og:title" content="MOJ Attestation Services in Dubai, UAE" />
        <meta
          property="og:description"
          content="Efficient and trusted Ministry of Justice (MOJ) attestation services for legal and business documents in Dubai."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={mojData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {mojData.introContent.title}
          </h2>
          {mojData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={mojData.benefitsData} />
        <SmeProcess data={mojData.processData} />
        <SmeProcess data={mojData.documentData} />
        <TarakheesCost data={mojData.costData} />
        <FAQ data={mojData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default MOJAttestation;
