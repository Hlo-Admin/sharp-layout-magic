import LandingHero from "@/components/landing/LandingHero";
import LandingInfoSection from "@/components/landing/LandingInfoSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Services from "@/components/landing/Services";
import WhyChooseSection from "@/components/landing/WhyChooseSection";
import LogoMarquee from "@/components/landing/LogoMarquee";
import QuickGuideSection from "@/components/landing/QuickGuideSection";
import BusinessGuideSection from "@/components/landing/BusinessGuideSection";
import ServicesGridSection from "@/components/landing/ServicesGridSection";
import WorkingProcessSection from "@/components/landing/WorkingProcessSection";
import ClientTestimonials from "@/components/landing/Testimonials";
import BlogSection from "@/components/landing/BlogSection";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/common/ContactForm";
import landingPageData from "../data/landingPage";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LandingHero data={landingPageData} />

      <LandingInfoSection data={landingPageData.infoSection} />
      <ServicesSection data={landingPageData.servicesSection} />
      <Services data={landingPageData.freeZonesData} />
      <WhyChooseSection data={landingPageData.whyChooseSection} />
      <LogoMarquee
        title={landingPageData.logoSection.title}
        logos={landingPageData.logoSection.logos}
      />
      <ServicesGridSection
        services={landingPageData.servicesGridSection.services}
        ctaButtons={landingPageData.servicesGridSection.ctaButtons}
      />
      <QuickGuideSection
        title={landingPageData.quickGuideSection.title}
        subtitle={landingPageData.quickGuideSection.subtitle}
        description={landingPageData.quickGuideSection.description}
        cards={landingPageData.quickGuideSection.cards}
      />
      <BusinessGuideSection
        cards={landingPageData.businessGuideSection.cards}
      />
      <WorkingProcessSection
        title={landingPageData.workingProcessSection.title}
        subtitle={landingPageData.workingProcessSection.subtitle}
        features={landingPageData.workingProcessSection.features}
        cards={landingPageData.workingProcessSection.cards}
        ctaButton={landingPageData.workingProcessSection.ctaButton}
      />

      <BlogSection
        title={landingPageData.blogSection.title}
        subtitle={landingPageData.blogSection.subtitle}
        description={landingPageData.blogSection.description}
        blogPosts={landingPageData.blogSection.blogPosts}
      />
      <ClientTestimonials
        title={landingPageData.testimonialsSection.title}
        featuredClients={landingPageData.testimonialsSection.featuredClients}
        testimonials={landingPageData.testimonialsSection.testimonials}
        customerStats={landingPageData.testimonialsSection.customerStats}
      />
      <FAQ data={landingPageData.faqSection} />
      <Footer />
      <ContactForm />
    </div>
  );
};

export default Index;
