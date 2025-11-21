import { Helmet } from "react-helmet-async";
import Navigation from "@/components/common/Navigation";
import Hero from "@/components/services/Hero";
import Documents from "@/components/services/Documents";
import Steps from "@/components/services/Steps";
import Footer from "@/components/common/Footer";
import logoData from "../data/logoRegistration.js";

const LogoRegistration = () => {
  return (
    <>
      <Helmet>
        <title>Logo Registration Services in Dubai | Protect Your Brand</title>
        <meta
          name="description"
          content="Get Logo Registration Services in Dubai to protect your brand. Fast approvals, expert guidance, and complete legal support for your business."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen">
        {/* <Navigation /> */}
        <Hero data={logoData.heroData} />
        <Steps data={logoData.stepsData} />
        <Documents data={logoData.documentsData} />
        <Footer />
      </div>
    </>
  );
};

export default LogoRegistration;
