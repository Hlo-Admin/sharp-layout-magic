import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FAQ from "@/components/services/FAQService";
import HeroSection from "@/components/brand/BrandHero";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";
import typingData from "@/data/typingServicesData";

const TypingServices = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${typingData.heroData.image}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: typingData.faqData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Typing Services in Dubai",
    provider: {
      "@type": "Organization",
      name: "Go Kite PRO",
      url: baseUrl,
    },
    description:
      "Professional typing services in Dubai for legal, government and business documents.",
    areaServed: { "@type": "City", name: "Dubai" },
    image: imageUrl,
  };

  return (
    <>
      <Helmet>
        <title>Typing Services in Dubai, UAE | Business & Document Support</title>
        <meta
          name="description"
          content="Get professional typing services in Dubai for business, HR, and official documents. Fast, accurate preparation of applications, contracts, and papers."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content="Typing Services in Dubai, UAE" />
        <meta property="og:description" content="Fast and accurate typing services in UAE." />
        <meta property="og:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection data={typingData.heroData} />
        <ServiceCards data={typingData.serviceCardsData} />
        <TrustedSection data={typingData.trustedData} />
        <SemicircleSection data={typingData.semicircleData} />
        <FAQ data={typingData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default TypingServices;
