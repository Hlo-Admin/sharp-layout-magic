import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import WhySME from "@/components/services/WhySME";
import SmeAdvantages from "@/components/services/SmeAdvantages";
import SmeProcess from "@/components/services/SmeProcess";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import smecompany from "../data/smecompany";

const Index = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${smecompany.heroData.image}`;

  // Generate keywords from content
  const keywords = [
    "SME company formation Dubai",
    "SME business setup UAE",
    "Dubai SME license",
    "small business formation UAE",
    "Dubai SME registration",
    "setup SME business in Dubai",
    "DED SME company license",
    "Go Kite PRO business setup",
    "UAE SME company process",
    "SME startup in UAE",
  ].join(", ");

  return (
    <>
      <Helmet>
        {/* ---------- SEO META ---------- */}
        <title>
          SME Company Formation in Dubai - Quick & Affordable Setup | Go Kite PRO
        </title>
        <meta
          name="title"
          content="SME Company Formation UAE | Business Setup Services Dubai"
        />
        <meta
          name="description"
          content="SME company formation in Dubai & UAE made easy. Get professional help with licensing, registration, and business setup tailored for entrepreneurs."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Go Kite PRO Business Setup" />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content="SME Company Formation in Dubai | Go Kite PRO" />
        <meta
          property="og:description"
          content="Start your SME company in Dubai with expert assistance. We handle all licensing and setup quickly and affordably."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Go Kite PRO" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="SME Company Formation in Dubai | Go Kite PRO" />
        <meta
          name="twitter:description"
          content="Quick and cost-effective SME company setup in Dubai. Get expert support for your business launch."
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
      </Helmet>

      <div className="min-h-screen">
        {/* <Navigation /> */}
        <Hero data={smecompany.heroData} />
        <WhySME data={smecompany.WhySME} />
        <SmeAdvantages data={smecompany.benefitsData} />
        <SmeProcess data={smecompany.processData} />
        <SmeProcess data={smecompany.documentData} />
        <SmeProcess data={smecompany.whysmeData} />
        <FAQ data={smecompany.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
