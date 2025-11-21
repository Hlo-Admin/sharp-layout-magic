import { Helmet } from "react-helmet-async";
import Hero from "@/components/services/Hero";
import TarakheesBenefits from "@/components/services/TarakheesBenefits";
import SmeProcess from "@/components/services/SmeProcess";
import TarakheesCost from "@/components/services/TarakheesCost";
import FAQ from "@/components/services/FAQService";
import Footer from "@/components/common/Footer";
import rentalData from "@/data/rentalDisputeCenter";

const RentalDisputeCenter = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const baseUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const imageUrl = `${baseUrl}${rentalData.heroData.image}`;

  const keywords = [
    "rental dispute services Dubai",
    "Rental Dispute Center Dubai",
    "file rental case UAE",
    "Dubai tenancy dispute",
    "rental eviction services Dubai",
    "GoKite rental resolution",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>
          Rental Dispute Center Services in Dubai | Expert Help
        </title>

        <meta
          name="description"
          content="Resolve tenancy issues with Rental Dispute Center Services in Dubai. Professional assistance for landlords and tenants, ensuring smooth resolution."
        />

        <meta name="keywords" content={keywords} />
        <meta name="author" content="GoKite Business Setup" />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:title"
          content="Rental Dispute Center Services in Dubai | Expert Help"
        />
        <meta
          property="og:description"
          content="Get expert legal support for tenancy, rent, and eviction disputes in Dubai. Quick resolution through Dubai’s legal framework."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="min-h-screen">
        <Hero data={rentalData.heroData} />
        <TarakheesBenefits data={rentalData.benefitsData} />
        <SmeProcess data={rentalData.processData} />
        <SmeProcess data={rentalData.documentData} />
        <TarakheesCost data={rentalData.costData} />
        <FAQ data={rentalData.faqData} />
        <Footer />
      </div>
    </>
  );
};

export default RentalDisputeCenter;
