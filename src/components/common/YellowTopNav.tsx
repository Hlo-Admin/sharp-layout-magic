// src/components/common/YellowTopNav.tsx

const YellowTopNav = () => {
  return (
    <div className="bg-[#f7c332] py-1 sm:py-1.5 md:py-2 z-50 relative">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 text-[10px] xs:text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6">
        <div className="text-[#193954] font-medium text-center sm:text-left truncate max-w-full sm:max-w-none">
          UAE 85549, United Arab Emirates
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap justify-center sm:justify-end">
          <a
            href="tel:+971503578847"
            className="text-[#193954] font-medium hover:underline whitespace-nowrap"
          >
            +971 50 357 8847
          </a>
          <span className="text-[#193954]">|</span>
          <a
            href="mailto:info@gokitepro.com"
            className="text-[#193954] font-medium hover:underline truncate"
          >
            info@gokitepro.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default YellowTopNav;

