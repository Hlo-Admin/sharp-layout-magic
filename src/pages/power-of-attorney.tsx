import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import poaData from "@/data/powerOfAttorney";

const PowerOfAttorney = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${poaData.heroData.image}`;

  const keywords = [
    "power of attorney Dubai",
    "PoA drafting UAE",
    "legal PoA services UAE",
    "attested PoA Dubai",
    "GoKite legal PoA drafting",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Power of Attorney Drafting Services in Dubai, UAE | Legal Support
        </title>
        <meta
          name="description"
          content="Get professional Power of Attorney drafting services in Dubai. Accurate, legally valid PoA documents for business, personal, and legal purposes in UAE."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite PRO Business Setup" />

        <meta
          property="og:title"
          content="Power of Attorney Drafting Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Draft your Power of Attorney in Dubai with complete legal accuracy and notarization support. Personalized solutions for individuals and companies."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={poaData.heroData} />

        {/* Intro Section */}
        <section className="px-4 py-10 max-w-5xl mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            {poaData.introContent.title}
          </h2>
          {poaData.introContent.paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </section>

        <TarakheesBenefits data={poaData.benefitsData} />
        <SmeProcess data={poaData.processData} />
        <SmeProcess data={poaData.documentData} />
        <TarakheesCost data={poaData.costData} />
        <FAQ data={poaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default PowerOfAttorney;
