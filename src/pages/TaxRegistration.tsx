import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FAQ from "@/components/services/FAQService";
import HeroSection from "@/components/brand/BrandHero";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";
import taxData from "@/data/taxRegistrationData";

const TaxRegistration = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${taxData.heroData.image}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: taxData.faqData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tax Registration Services in Dubai",
    provider: {
      "@type": "Organization",
      name: "Go Kite PRO",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
    description:
      "VAT registration, corporate tax compliance & FTA services in Dubai.",
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    image: imageUrl,
  };

  return (
    <>
      <Helmet>
        <title>Tax Registration Services in Dubai, UAE | Business Compliance</title>
        <meta
          name="description"
          content="Get professional tax registration services in Dubai. Ensure VAT, corporate tax, and FTA compliance for smooth business operations in UAE."
        />
        <link rel="canonical" href={currentUrl} />
        
        <meta property="og:title" content="Tax Registration Services in Dubai" />
        <meta
          property="og:description"
          content="VAT & corporate tax registration services with expert guidance"
        />
        <meta property="og:image" content={imageUrl} />

        {/* Schemas */}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection data={taxData.heroData} />
        <ServiceCards data={taxData.serviceCardsData} />
        <TrustedSection data={taxData.trustedData} />
        <SemicircleSection data={taxData.semicircleData} />
        <FAQ data={taxData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default TaxRegistration;
