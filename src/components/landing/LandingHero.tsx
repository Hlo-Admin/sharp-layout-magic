import LandingNavigation from "@/components/landing/LandingNavigation";
import BusinessSetupCards from "../../components/landing/BusinessSetupCards";
import FloatingSocialIcons from "../../components/landing/FloatingSocialIcons";

interface LandingHeroProps {
  data: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaButton: {
      text: string;
      href: string;
    };
    businessSetupOptions: Array<{
      title: string;
      description?: string;
      features?: string[];
      href: string;
    }>;
    socialIcons: Array<{
      icon: string;
      href: string;
      alt: string;
      target?: string;
      rel?: string;
    }>;
  };
}

const LandingHero = ({ data }: LandingHeroProps) => {
  const {
    title,
    subtitle,
    backgroundImage,
    ctaButton,
    businessSetupOptions,
    socialIcons,
  } = data;

  return (
    <section className="relative min-h-screen overflow-hidden mx-3 my-6 rounded-xl">
      {/* Top Yellow Bar */}
      <div className="absolute top-0 left-0 right-0 bg-[#f7c332] py-1 sm:py-1.5 md:py-2 z-30">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 text-[10px] xs:text-xs sm:text-sm md:text-base">
          <div className="text-[#193954] font-medium text-center sm:text-left truncate max-w-full sm:max-w-none pl-2 sm:pl-3">
            Dubai 85549, United Arab Emirates
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap justify-center sm:justify-end pr-2 sm:pr-3 md:pr-4">
            <a
              href="tel:+971503578847"
              className="text-[#193954] font-medium hover:underline whitespace-nowrap"
            >
              +971 50 357 8847
            </a>
            <a
              href="mailto:info@gokitepro.com"
              className="text-[#193954] font-medium hover:underline truncate"
            >
              info@gokitepro.com
            </a>
          </div>
        </div>
      </div>

      {/* Background Image with Dubai Skyline */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center bottom",
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div
          className="absolute inset-0 
        bg-gradient-to-b from-blue-900/40 via-transparent to-black/30 rounded-xl"
        />
      </div>

      {/* Navigation */}
      <div className="relative z-40 pt-10 sm:pt-12 md:pt-14 lg:pt-16 mt-8">
        <LandingNavigation />
      </div>

      {/* Floating Social Icons */}
      {/* <FloatingSocialIcons icons={socialIcons} /> */}

      {/* Main Hero Content */}
      <div className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg max-w-3xl mx-auto">
              {subtitle}
            </p>
            <a
              href={ctaButton.href}
              className="inline-flex items-center gap-2 bg-[#f7c332] hover:bg-[#e6b52a] text-[#193954] font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
            >
              {ctaButton.text}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Business Setup Cards */}
          <BusinessSetupCards options={businessSetupOptions} />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
