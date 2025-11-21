import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import employmentVisaData from "@/data/employmentVisa";

const EmploymentVisa = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${employmentVisaData.heroData.image}`;

  const keywords = [
    "UAE employment visa",
    "Dubai work visa",
    "UAE job visa",
    "Work permit UAE",
    "Employment visa cost Dubai",
    "MOHRE visa assistance",
    "GoKite visa services",
  ].join(", ");

  return (
    <>
      <Helmet>
        {/* ---------- Meta Tags Updated ---------- */}
        <title>Employment Visa Services in Dubai | UAE Work Visa Experts</title>

        <meta
          name="title"
          content="Employment Visa Services in Dubai | UAE Work Visa Experts"
        />

        <meta
          name="description"
          content="Get hassle-free employment visa services in Dubai. GoKite Business Setup helps with work permits, stamping & renewals to legally hire & expand your UAE workforce."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        {/* ---------- Open Graph Tags ---------- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Employment Visa Services in Dubai | UAE Work Visa Experts"
        />
        <meta
          property="og:description"
          content="Fast & compliant UAE work visa services for employees and companies. Full documentation, MOHRE approvals & visa stamping handled."
        />

        {/* ---------- Twitter Cards ---------- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />

        {/* ---------- Canonical ---------- */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={employmentVisaData.heroData} />
        <TarakheesBenefits data={employmentVisaData.benefitsData} />
        <SmeProcess data={employmentVisaData.processData} />
        <SmeProcess data={employmentVisaData.documentData} />
        <TarakheesCost data={employmentVisaData.costData} />
        <FAQ data={employmentVisaData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default EmploymentVisa;