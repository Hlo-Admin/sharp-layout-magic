import HeroHome from "@/components/HeroHome";
import DreamBusiness from "@/components/DreamBusiness";
import ServicesGrid from "@/components/ServicesGrid";
import ProServices from "@/components/ProServices";
import WhyChoose from "@/components/WhyChoose";
import QuickGuide from "@/components/QuickGuide";
import BusinessGuide from "@/components/BusinessGuide";
import WorkingProcess from "@/components/WorkingProcess";
import ExploreDubai from "@/components/ExploreDubai";
import Testimonials from "@/components/Testimonials";
import FAQHome from "@/components/FAQHome";
import Footer from "@/common/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <DreamBusiness />
      <ServicesGrid />
      <ProServices />
      <WhyChoose />
      <QuickGuide />
      <BusinessGuide />
      <WorkingProcess />
      <ExploreDubai />
      <Testimonials />
      <FAQHome />
      <Footer />
    </div>
  );
};

export default Index;
