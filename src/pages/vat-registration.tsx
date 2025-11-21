import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import vatData from "@/data/vatRegistration";

const VATRegistration = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${vatData.heroData.image}`;

  const keywords = [
    "VAT registration Dubai",
    "FTA VAT registration",
    "VAT return filing UAE",
    "tax registration Dubai",
    "GoKite PRO VAT services",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>VAT Registration Services in Dubai, UAE | Business Tax Support</title>
        <meta
          name="description"
          content="Get VAT registration services in Dubai for your business. Ensure smooth tax compliance, expert guidance, and fast approvals under UAE VAT law."
        />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="VAT Registration Services in Dubai, UAE | Business Tax Support"
        />
        <meta
          property="og:description"
          content="Professional VAT registration and filing services in Dubai. Fast approvals, full compliance, and expert business tax support."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={vatData.heroData} />

        {/* ✨ FIXED INTRO CONTENT (PREVENTS CRASH) */}
        {vatData.introContent && vatData.introContent.paragraphs && (
          <div className="px-4 py-8 max-w-5xl mx-auto">
            {vatData.introContent.paragraphs.map((txt, i) => (
              <p key={i} className="mb-4 text-lg text-gray-700">
                {txt}
              </p>
            ))}
          </div>
        )}

        <TarakheesBenefits data={vatData.benefitsData} />
        <SmeProcess data={vatData.processData} />
        <SmeProcess data={vatData.documentData} />
        <TarakheesCost data={vatData.costData} />
        <FAQ data={vatData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default VATRegistration;
