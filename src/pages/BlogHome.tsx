import LandingNavigation from "@/components/landing/LandingNavigation";
import Footer from "@/components/common/Footer";
import CaseStudies from "@/components/blog/CaseStudies";
import FirstSection from "@/components/blog/FirstSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LandingNavigation />
      <FirstSection/>
      <CaseStudies/>
      <Footer />
    </div>
  );
};

export default Index;
