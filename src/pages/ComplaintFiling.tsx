import { Helmet } from "react-helmet-async";
import YellowTopNav from "@/components/common/YellowTopNav";
import Hero from "@/components/services/Hero";
import Benefits from "@/components/services/Benefits";
import Steps from "@/components/services/Steps";
import Documents from "@/components/services/Documents";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import complaintFilingData from "../data/complaintFilingData.js";

const ComplaintFiling = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Helmet>
        <title>Complaint Filing Services in Dubai | Quick & Secure</title>
        <meta
          name="description"
          content="File complaints effortlessly with our Complaint Filing Services in Dubai. Fast processing and expert support for individuals and businesses."
        />
        <link rel="canonical" href={currentUrl} />
        <script type="application/ld+json">
          {JSON.stringify(complaintFilingData.faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <YellowTopNav />
        <Hero data={complaintFilingData.heroData} />
        <Benefits data={complaintFilingData.benefitsData} />
        <Steps data={complaintFilingData.stepsData} />
        <Documents data={complaintFilingData.servicesData} />
        <FAQ data={complaintFilingData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default ComplaintFiling;
