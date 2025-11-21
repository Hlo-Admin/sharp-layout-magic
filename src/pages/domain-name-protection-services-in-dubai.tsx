import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import domainData from "@/data/domainNameProtection";

const DomainNameProtection = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${domainData.heroData.image}`;

  const keywords = [
    "domain name protection Dubai",
    "website name protection UAE",
    "secure domain registration Dubai",
    "brand identity protection UAE",
    "GoKite brand security",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Domain Name Protection Services in Dubai, UAE | Brand Security
        </title>

        <meta
          name="description"
          content="Get domain name protection in Dubai to safeguard your brand online. Secure, monitor, and legally protect your business identity across the UAE."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Domain Name Protection Services in Dubai, UAE | Brand Security"
        />
        <meta
          property="og:description"
          content="Legal protection and digital monitoring for your domain name and brand identity. Let GoKite safeguard your online presence."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={domainData.heroData} />
        <TarakheesBenefits data={domainData.benefitsData} />
        <SmeProcess data={domainData.processData} />
        <SmeProcess data={domainData.documentData} />
        <TarakheesCost data={domainData.costData} />
        <FAQ data={domainData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default DomainNameProtection;