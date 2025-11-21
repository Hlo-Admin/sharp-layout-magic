import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import corporateTaxData from "@/data/corporateTax";

const CorporateTax = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${corporateTaxData.heroData.image}`;

  const keywords = [
    "corporate tax Dubai",
    "tax consultation UAE",
    "corporate tax filing",
    "FTA corporate tax",
    "GoKite corporate tax services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Corporate Tax Consultation and Filing Services in Dubai, UAE
        </title>

        <meta
          name="description"
          content="Get corporate tax consultation and filing services in Dubai. Ensure compliance, accurate filings, and expert guidance for businesses under UAE law."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Corporate Tax Consultation and Filing Services in Dubai"
        />
        <meta
          property="og:description"
          content="Expert corporate tax consultation services in Dubai. Optimize tax strategies and stay compliant with UAE laws."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={corporateTaxData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {corporateTaxData.introContent.title}
          </h2>
          {corporateTaxData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={corporateTaxData.benefitsData} />
        <SmeProcess data={corporateTaxData.processData} />
        <SmeProcess data={corporateTaxData.documentData} />
        <TarakheesCost data={corporateTaxData.costData} />
        <FAQ data={corporateTaxData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default CorporateTax;
