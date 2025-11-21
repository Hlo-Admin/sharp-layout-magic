import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FAQ from "@/components/services/FAQService";
import HeroSection from "@/components/brand/BrandHero";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";
import brandData from "@/data/brandRegistrationData";

const BrandRegistration = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${brandData.heroData.image}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brandData.faqData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Brand Registration Services in Dubai",
    provider: {
      "@type": "Organization",
      name: "Go Kite PRO",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
    description:
      "Brand registration in Dubai including trademark filing, trade name protection, logo registration & domain protection.",
    image: imageUrl,
    areaServed: { "@type": "City", name: "Dubai" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Brand Registration",
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Brand Registration Services in Dubai | Protect Your Business</title>
        <meta
          name="description"
          content="Get Brand Registration Services in Dubai. Fast approvals, expert guidance, and complete legal protection to secure your business identity."
        />
        <link rel="canonical" href={currentUrl} />

        <meta
          property="og:title"
          content="Brand Registration Dubai | Trademark & Logo Protection"
        />
        <meta
          property="og:description"
          content="Protect your business legally with trademark and brand registration services."
        />
        <meta property="og:image" content={imageUrl} />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection data={brandData.heroData} />
        <ServiceCards data={brandData.serviceCardsData} />
        <TrustedSection data={brandData.trustedData} />
        <SemicircleSection data={brandData.semicircleData} />
        <FAQ data={brandData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default BrandRegistration;
