import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import FAQ from "@/components/services/FAQService";
import HeroSection from "@/components/brand/BrandHero";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";
import attestationData from "@/data/attestationServicesData";

const AttestationServices = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${attestationData.heroData.image}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: attestationData.faqData.faqs.map((faq) => ({
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
    serviceType: "Attestation Services in Dubai",
    provider: {
      "@type": "Organization",
      name: "Go Kite PRO",
      url: baseUrl,
    },
    description:
      "Certified attestation services in Dubai for personal, educational, and commercial documents.",
    areaServed: { "@type": "City", name: "Dubai" },
    image: imageUrl,
  };

  return (
    <>
      <Helmet>
        <title>Certificate Attestation in Dubai | Fast MOFA & Embassy Legalization</title>
        <meta
          name="description"
          content="Fast and reliable certificate attestation in Dubai. Complete MOFA, embassy, and document legalization with secure, affordable, and expert service support."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content="Attestation Services in Dubai, UAE" />
        <meta property="og:description" content="Fast & MOFA-compliant attestation services in UAE." />
        <meta property="og:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <YellowTopNav />
        <div className="relative">
          <Navigation />
        </div>
        <HeroSection data={attestationData.heroData} />
        <ServiceCards data={attestationData.serviceCardsData} />
        <TrustedSection data={attestationData.trustedData} />
        <SemicircleSection data={attestationData.semicircleData} />
        <FAQ data={attestationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default AttestationServices;
