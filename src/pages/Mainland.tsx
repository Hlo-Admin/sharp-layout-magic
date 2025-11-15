import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhatIsMainland from "@/components/services/WhatIsMainland";
import Benefits from "@/components/services/Benefits";
import MainlandBenefits from "@/components/services/MainlandBenefits";
import LicenseTypes from "@/components/services/LicenseTypes";
import CostSection from "@/components/services/CostSection";
import Steps from "@/components/services/Steps";
import Documents from "@/components/services/Documents";
import WhyTrustUs from "@/components/services/WhyTrustUs";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";

import mainlandData from "../data/mainland";

const Index = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${mainlandData.heroData.image}`;

  // Generate keywords from content
  const keywords = [
    "mainland company setup UAE",
    "mainland business setup Dubai",
    "DED company formation",
    "UAE mainland license",
    "Dubai mainland company registration",
    "mainland business license UAE",
    "100% foreign ownership UAE",
    "commercial license Dubai",
    "professional license UAE",
    "industrial license Dubai",
    "UAE company formation",
    "Dubai business setup",
    "mainland company benefits",
    "UAE mainland trading",
    "Go Kite PRO",
  ].join(", ");

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainlandData.faqData.faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mainland Business Setup in UAE",
    provider: {
      "@type": "Organization",
      name: "Go Kite PRO",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    description:
      "Expert mainland company formation in UAE. Get your business license in 3-5 days. 100% foreign ownership, no restrictions, full market access.",
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: "15000-35000",
      description:
        "Mainland company setup costs range from AED 15,000 to AED 35,000",
    },
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
        name: "Mainland Business Setup",
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* ---------- SEO META ---------- */}
        <title>
          Mainland Business Setup UAE - Company Formation in 3-5 Days | Go Kite
          PRO
        </title>
        <meta
          name="title"
          content="Mainland Business Setup UAE - Company Formation in 3-5 Days | Go Kite PRO"
        />
        <meta
          name="description"
          content="Expert mainland company formation in UAE. Get your business license in 3-5 days. 100% foreign ownership, no restrictions, full market access. Professional setup services with DED licensing."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Go Kite PRO Business Setup" />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta
          property="og:title"
          content="Mainland Business Setup UAE - Company Formation in 3-5 Days | Go Kite PRO"
        />
        <meta
          property="og:description"
          content="Expert mainland company formation in UAE. Get your business license in 3-5 days. 100% foreign ownership, no restrictions, full market access. Professional setup services."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Go Kite PRO" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta
          name="twitter:title"
          content="Mainland Business Setup UAE - Company Formation in 3-5 Days | Go Kite PRO"
        />
        <meta
          name="twitter:description"
          content="Expert mainland company formation in UAE. Get your business license in 3-5 days. 100% foreign ownership, no restrictions, full market access."
        />
        <meta name="twitter:image" content={imageUrl} />

        {/* Additional SEO Meta */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="language" content="English" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        {/* ---------- SCHEMAS ---------- */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* <Navigation /> */}
        <Hero data={mainlandData.heroData} />
        <WhatIsMainland data={mainlandData.whatIsMainlandData} />
        <MainlandBenefits data={(mainlandData as any).mainlandBenefitsData} />
        <LicenseTypes data={mainlandData.licenseTypesData} />
        <hr />
        <CostSection data={mainlandData.costSectionData} />
        <Steps data={mainlandData.stepsData} />
        <Documents data={mainlandData.documentsData} />
        <WhyTrustUs data={mainlandData.whyTrustUsData} />
        <FAQ data={mainlandData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
