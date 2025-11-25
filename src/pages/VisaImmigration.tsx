import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import VisaHero from "@/components/visa/VisaHero";
import VisaProcessing from "@/components/visa/VisaProcessing";
import JourneySteps from "@/components/visa/JourneySteps";
import ServiceBenefits from "@/components/visa/ServiceBenefits";
import KeyAspects from "@/components/visa/KeyAspects";
import ApplicationProcess from "@/components/visa/ApplicationProcess";
import WhyChooseUs from "@/components/visa/WhyChooseUs";
import ServicesOverview from "@/components/visa/ServicesOverview";
import Destinations from "@/components/visa/Destinations";
import FAQ from "@/components/services/FAQ";
import visaImmigrationData from "@/data/visaImmigration";

const VisaImmigration = () => {
  return (
    <div className="min-h-screen">
      <YellowTopNav />
      <div className="relative">
        <Navigation />
      </div>
      <VisaHero data={visaImmigrationData.hero} />
      <VisaProcessing data={visaImmigrationData.visaProcessing} />
      <JourneySteps data={visaImmigrationData.journeySteps} />
      <ServiceBenefits data={visaImmigrationData.serviceBenefits} />
      <KeyAspects data={visaImmigrationData.keyAspects} />
      <ApplicationProcess data={visaImmigrationData.applicationProcess} />
      <WhyChooseUs data={visaImmigrationData.whyChooseUs} />
      <ServicesOverview data={visaImmigrationData.servicesOverview} />
      <Destinations data={visaImmigrationData.destinations} />
      <FAQ data={visaImmigrationData.faq} />
      <Footer />
    </div>
  );
};

export default VisaImmigration;
