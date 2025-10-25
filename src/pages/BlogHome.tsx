import LandingHero from "@/components/landing/LandingHero";
// import LandingInfoSection from "@/components/landing/LandingInfoSection";
// import ServicesSection from "@/components/landing/ServicesSection";
// import Services from "@/components/landing/Services";
// import WhyChooseSection from "@/components/landing/WhyChooseSection";
// import LogoMarquee from "@/components/landing/LogoMarquee";
// import QuickGuideSection from "@/components/landing/QuickGuideSection";
// import BusinessGuideSection from "@/components/landing/BusinessGuideSection";
// import ServicesGridSection from "@/components/landing/ServicesGridSection";
// import WorkingProcessSection from "@/components/landing/WorkingProcessSection";
// import ClientTestimonials from "@/components/landing/Testimonials";
// import BlogSection from "@/components/landing/BlogSection";
import FAQ from "@/components/services/FAQ";
import Footer from "@/components/common/Footer";
import landingPageData from "../data/landingPage";
import Body from "@/components/blog/Body";
import FirstSection from "@/components/blog/FirstSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FirstSection/>
      <Body/>
      <Footer />
    </div>
  );
};

export default Index;
