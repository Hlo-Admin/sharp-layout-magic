import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import signatureVerificationData from "@/data/signatureVerification";

const SignatureVerification = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${signatureVerificationData.heroData.image}`;

  const keywords = [
    "signature verification UAE",
    "Signature attestation Dubai",
    "legal document verification UAE",
    "contract attestation UAE",
    "GoKite signature services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Signature Verification and Attestation Services in Dubai, UAE
        </title>
        <meta
          name="description"
          content="Get signature verification and attestation services in Dubai. Ensure legal validity for contracts, agreements, and business documents in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Signature Verification and Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Fast and secure attestation and verification of signatures for legal and business purposes in Dubai."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={signatureVerificationData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {signatureVerificationData.introContent.title}
          </h2>
          {signatureVerificationData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={signatureVerificationData.benefitsData} />
        <SmeProcess data={signatureVerificationData.processData} />
        <SmeProcess data={signatureVerificationData.documentData} />
        <TarakheesCost data={signatureVerificationData.costData} />
        <FAQ data={signatureVerificationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default SignatureVerification;
