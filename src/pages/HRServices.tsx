import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FAQ from "@/components/services/FAQService";
import HeroSection from "@/components/brand/BrandHero";
import ServiceCards from "@/components/brand/BrandService";
import TrustedSection from "@/components/brand/TrustedSection";
import SemicircleSection from "@/components/brand/SemicircleSection";
import hrServicesData from "@/data/hrServicesData";

const HRServices = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${hrServicesData.heroData.image}`;

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hrServicesData.faqData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "HR Services in Dubai",
    provider: {
      "@type": "Organization",
      name: "Go Kite PRO",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
    areaServed: { "@type": "City", name: "Dubai, UAE" },
    image: imageUrl,
    description:
      "HR Services in Dubai — payroll, WPS, job descriptions & employee master data management for UAE businesses.",
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "HR Services in Dubai",
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
        HR Services in Dubai, UAE | Business Setup & Employee Support
        </title>
        <meta
          name="description"
          content="Expert HR services in Dubai for business setup. From employee visas to payroll and compliance, we ensure smooth workforce management in UAE."
        />
        <meta
          name="keywords"
          content="HR services Dubai, payroll services UAE, WPS compliance Dubai, HR outsourcing UAE, employee master file UAE"
        />

        <link rel="canonical" href={currentUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HR Services in Dubai - Go Kite PRO" />
        <meta property="og:description" content="Streamline HR operations with payroll, WPS & employee management services in UAE" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HR Services in Dubai - Go Kite PRO" />
        <meta name="twitter:description" content="Payroll & HR compliance support for UAE businesses" />
        <meta name="twitter:image" content={imageUrl} />

        {/* SCHEMAS */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection data={hrServicesData.heroData} />
        <ServiceCards data={hrServicesData.serviceCardsData} />
        <TrustedSection data={hrServicesData.trustedData} />
        <SemicircleSection data={hrServicesData.semicircleData} />
        <FAQ data={hrServicesData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default HRServices;
