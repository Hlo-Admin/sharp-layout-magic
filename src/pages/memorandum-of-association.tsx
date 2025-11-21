import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import moaData from "@/data/memorandumOfAssociation";

const MemorandumOfAssociation = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${moaData.heroData.image}`;

  const keywords = [
    "MOA drafting Dubai",
    "memorandum of association UAE",
    "company setup document drafting",
    "LLC MOA preparation Dubai",
    "GoKite business setup UAE",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          MOA Drafting Services in Dubai, UAE | Company Formation Support
        </title>
        <meta
          name="description"
          content="Get professional MOA drafting services in Dubai. Ensure accurate company formation documents, legal compliance, and smooth business registration in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="MOA Drafting Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Professional MOA drafting services for new companies with full legal compliance and notarization support."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={moaData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {moaData.introContent.title}
          </h2>
          {moaData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={moaData.benefitsData} />
        <SmeProcess data={moaData.processData} />
        <SmeProcess data={moaData.documentData} />
        <TarakheesCost data={moaData.costData} />
        <FAQ data={moaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default MemorandumOfAssociation;