import { Helmet } from "react-helmet-async";
import LandingNavigation from "@/components/landing/LandingNavigation";
import Footer from "@/components/common/Footer";
import CaseStudies from "@/components/blog/CaseStudies";
import FirstSection from "@/components/blog/FirstSection";
import YellowTopNav from "@/components/common/YellowTopNav";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Business Setup Blog - Dubai Company Formation Guides | Go Kite PRO
        </title>
        <meta
          name="description"
          content="Expert insights on Dubai business setup, mainland and free zone company formation, licensing, visas, and business growth strategies. Stay updated with the latest UAE business regulations."
        />
        <meta
          name="keywords"
          content="Dubai business blog, company formation Dubai, UAE business setup guide, mainland company Dubai, free zone setup, business licensing UAE, Dubai entrepreneurship, company registration Dubai, business visa UAE"
        />
        <meta
          property="og:title"
          content="Business Setup Blog - Dubai Company Formation Guides | Go Kite PRO"
        />
        <meta
          property="og:description"
          content="Expert insights on Dubai business setup, mainland and free zone company formation, licensing, visas, and business growth strategies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/blog/blog-social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Business Setup Blog - Dubai Company Formation Guides | Go Kite PRO"
        />
        <meta
          name="twitter:description"
          content="Expert insights on Dubai business setup, mainland and free zone company formation, licensing, visas, and business growth strategies."
        />
        <meta name="twitter:image" content="/blog/blog-social.png" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen">
        {/* Top Yellow Bar */}
        <YellowTopNav />

        <div className="relative pt-2">
          <LandingNavigation />
        </div>
        <FirstSection />
        <CaseStudies />
        <Footer />
      </div>
    </>
  );
};

export default Index;
