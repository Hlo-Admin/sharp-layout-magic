import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import Benefits from "@/components/services/Benefits";
import Steps from "@/components/services/Steps";
import Documents from "@/components/services/Documents";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import caseRegistrationData from "../data/caseRegistrationData.js";

const CaseRegistrationServices = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Helmet>
        <title>Case Registration Services in Dubai | Fast & Reliable</title>
        <meta
          name="description"
          content="Get expert Case Registration Services in Dubai. Hassle-free filing, fast approvals, and professional guidance for all your legal matters."
        />
        <link rel="canonical" href={currentUrl} />
        <script type="application/ld+json">
          {JSON.stringify(caseRegistrationData.faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* <Navigation /> */}
        <Hero data={caseRegistrationData.heroData} />
        <Benefits data={caseRegistrationData.benefitsData} />
        <Steps data={caseRegistrationData.stepsData} />
        <Documents data={caseRegistrationData.servicesData} />
        <FAQ data={caseRegistrationData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default CaseRegistrationServices;
