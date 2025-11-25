import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import FAQ from "@/components/services/FAQService";
import HeroSection from "@/components/brand/BrandHero";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";
import translationData from "@/data/translationServicesData";

const TranslationServices = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${translationData.heroData.image}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: translationData.faqData.faqs.map((faq) => ({
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
    serviceType: "Translation Services in Dubai",
    provider: {
      "@type": "Organization",
      name: "Go Kite PRO",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
    description:
      "Certified legal, official & general translation services in Dubai.",
    areaServed: { "@type": "City", name: "Dubai" },
    image: imageUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Translation Services",
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Translation Services in Dubai, UAE | Business & Legal Support
        </title>
        <meta
          name="description"
          content="Get professional translation services in Dubai for business, legal, and official documents. Fast, accurate, and certified translations in UAE."
        />
        <link rel="canonical" href={currentUrl} />
        <meta
          property="og:title"
          content="Translation Services in Dubai, UAE"
        />
        <meta
          property="og:description"
          content="Certified legal & official translation services in Dubai."
        />
        <meta property="og:image" content={imageUrl} />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <YellowTopNav />
        <div className="relative">
          <Navigation />
        </div>
        <HeroSection data={translationData.heroData} />
        <ServiceCards data={translationData.serviceCardsData} />
        <TrustedSection data={translationData.trustedData} />
        <SemicircleSection data={translationData.semicircleData} />
        <FAQ data={translationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default TranslationServices;
