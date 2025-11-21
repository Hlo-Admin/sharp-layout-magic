import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import documentVerificationData from "@/data/documentVerification";

const DocumentVerification = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${documentVerificationData.heroData.image}`;

  const keywords = [
    "document verification UAE",
    "Dubai business compliance",
    "certificate verification Dubai",
    "corporate document check UAE",
    "GoKite PRO verification services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Dubai Document Verification | Business Setup & Compliance
        </title>
        <meta
          name="description"
          content="Reliable document verification services in Dubai. Ensure compliance for business setup, licensing, and government approvals with expert support in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Reliable Document Verification Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Fast and secure document verification services in Dubai for government, business, and personal needs."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={documentVerificationData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {documentVerificationData.introContent.title}
          </h2>
          {documentVerificationData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={documentVerificationData.benefitsData} />
        <SmeProcess data={documentVerificationData.processData} />
        <SmeProcess data={documentVerificationData.documentData} />
        <TarakheesCost data={documentVerificationData.costData} />
        <FAQ data={documentVerificationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default DocumentVerification;
