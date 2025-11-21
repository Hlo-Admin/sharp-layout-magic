import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhySME from "@/components/services/WhySME";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import TarakheesIndustries from "@/components/services/TarakheesIndustries";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import tarakhees from "../data/tarakhees";

const Index = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${tarakhees.heroData.image}`;

  // Keywords for SEO
  const keywords = [
    "Tarakhees company formation Dubai",
    "business setup in Dubai",
    "Tarakhees permit Dubai",
    "Dubai industrial license",
    "Dubai business licensing",
    "Tarakhees setup process UAE",
    "Tarakhees benefits",
    "business setup Tarakhees",
    "Go Kite PRO business setup",
    "Tarakhees office license Dubai",
  ].join(", ");

  return (
    <>
      <Helmet>
        {/* ---------- SEO META ---------- */}
        <title>
          Tarakhees Business Setup Dubai - Company Formation Experts | Go Kite PRO
        </title>
        <meta
          name="title"
          content="Tarakhees Company Formation UAE | Dubai Business Setup Services"
        />
        <meta
          name="description"
          content="Tarakhees company formation in Dubai, UAE made simple. Get licensing, registration, and business setup services tailored for entrepreneurs and investors."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Go Kite PRO Business Setup" />

        {/* 🔗 Canonical & Hreflang */}
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content="Tarakhees Business Setup Dubai | Go Kite PRO" />
        <meta
          property="og:description"
          content="Need a Tarakhees license for business setup in Dubai? Go Kite PRO helps you get started easily with professional support and low cost."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Go Kite PRO" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta
          name="twitter:title"
          content="Tarakhees Business Setup Dubai | Go Kite PRO"
        />
        <meta
          name="twitter:description"
          content="Find affordable Tarakhees company formation and licensing services in Dubai with Go Kite PRO."
        />
        <meta name="twitter:image" content={imageUrl} />

        {/* Additional SEO Meta */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
      </Helmet>

      <div className="min-h-screen">
        {/* <Navigation /> */}
        <Hero data={tarakhees.heroData} />
        <WhySME data={tarakhees.Whattarakhees} />
        <TarakheesBenefits data={tarakhees.benefitsData} />
        <TarakheesIndustries data={tarakhees.tarakheesIndustriesData} />
        <SmeProcess data={tarakhees.processData} />
        <SmeProcess data={tarakhees.documentData} />
        <TarakheesCost data={tarakhees.costData} />
        <FAQ data={tarakhees.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
