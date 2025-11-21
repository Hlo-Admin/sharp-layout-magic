import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import aoaData from "@/data/articlesOfAssociationAttestation";

const ArticlesOfAssociationAttestation = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${aoaData.heroData.image}`;

  const keywords = [
    "articles of association attestation Dubai",
    "MOFA attestation UAE",
    "UAE embassy attestation for AOA",
    "corporate document attestation Dubai",
    "GoKite PRO business attestation",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Articles of Association (AOA) Attestation Services in Dubai, UAE
        </title>
        <meta
          name="description"
          content="Get your Articles of Association (AOA) attested in Dubai with GoKite Business Setup Services. We ensure compliance and legal validation for your business."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Articles of Association (AOA) Attestation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Fast and approved attestation of Articles of Association for business use in UAE."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={aoaData.heroData} />

        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {aoaData.introContent.title}
          </h2>
          {aoaData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={aoaData.benefitsData} />
        <SmeProcess data={aoaData.processData} />
        <SmeProcess data={aoaData.documentData} />
        <TarakheesCost data={aoaData.costData} />
        <FAQ data={aoaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default ArticlesOfAssociationAttestation;
