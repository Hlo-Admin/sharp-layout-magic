import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import invoiceAgreementData from "@/data/invoicesAgreementsAttestation";

const InvoicesAgreementsAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${invoiceAgreementData.heroData.image}`;

  const keywords = [
    "invoice attestation Dubai",
    "agreement attestation UAE",
    "MOFA attestation Dubai",
    "business document attestation UAE",
    "GoKite PRO attestation services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Invoices and Agreements Attestation Services in Dubai, UAE
        </title>
        <meta
          name="description"
          content="Get invoices and agreements attestation in Dubai for legal and business use. Fast, reliable attestation services to ensure compliance in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Invoices and Agreements Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Fast and reliable attestation of invoices and agreements for legal and commercial use in UAE."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={invoiceAgreementData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {invoiceAgreementData.introContent.title}
          </h2>
          {invoiceAgreementData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={invoiceAgreementData.benefitsData} />
        <SmeProcess data={invoiceAgreementData.processData} />
        <SmeProcess data={invoiceAgreementData.documentData} />
        <TarakheesCost data={invoiceAgreementData.costData} />
        <FAQ data={invoiceAgreementData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default InvoicesAgreementsAttestation;
