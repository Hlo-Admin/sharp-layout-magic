import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FAQ from "@/components/services/FAQService";
import HeroSection from "@/components/brand/BrandHero";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";
import insuranceData from "@/data/insuranceServicesData";

const InsuranceServices = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${insuranceData.heroData.image}`;

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: insuranceData.faqData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Insurance Services in Dubai",
    provider: {
      "@type": "Organization",
      name: "Go Kite PRO",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
    areaServed: { "@type": "City", name: "Dubai, UAE" },
    description:
      "Insurance Services in Dubai including health insurance, car insurance, business insurance & claims support.",
    image: imageUrl,
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Insurance Services in Dubai", item: currentUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Insurance Services in Dubai, UAE | Business & Employee Cover</title>
        <meta
          name="description"
          content="Get reliable insurance services in Dubai. From business and employee health plans to liability cover, we ensure full protection for your UAE setup."
        />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Insurance Services in Dubai - Go Kite PRO" />
        <meta property="og:description" content="Affordable health, car & business insurance in Dubai" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection data={insuranceData.heroData} />
        <ServiceCards data={insuranceData.serviceCardsData} />
        <TrustedSection data={insuranceData.trustedData} />
        <SemicircleSection data={insuranceData.semicircleData} />
        <FAQ data={insuranceData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default InsuranceServices;
