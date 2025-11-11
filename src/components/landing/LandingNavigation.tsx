// src/components/Navbar.tsx
import { Button } from "@/components/ui/button";
import { Globe, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ServicesDropdown from "../../components/common/ServicesDropdown";
import BusinessSetupDropdown from "../../components/common/BusinessSetupDropdown";
import CostCalculatorPopup from "../../components/common/CostCalculatorPopup";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBusinessSetupDropdownOpen, setIsBusinessSetupDropdownOpen] =
    useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCostCalculatorOpen, setIsCostCalculatorOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const location = useLocation();
  const businessSetupRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        businessSetupRef.current &&
        !businessSetupRef.current.contains(event.target as Node)
      ) {
        setIsBusinessSetupDropdownOpen(false);
      }
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (
      isBusinessSetupDropdownOpen ||
      isServicesDropdownOpen ||
      isLanguageDropdownOpen
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isBusinessSetupDropdownOpen,
    isServicesDropdownOpen,
    isLanguageDropdownOpen,
  ]);

  return (
    <>
      <nav className="absolute top-3 sm:top-4 md:top-6 left-2 sm:left-3 md:left-5 right-2 sm:right-3 md:right-5 bg-[#487b99] flex items-center justify-between h-[56px] sm:h-[60px] md:h-[64px] px-3 sm:px-5 md:px-7 rounded-lg shadow-xl z-20">
        {/* Left Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src="/footer-logo.png"
            alt="Go Kite Pro"
            className="w-[30px] h-[38px] sm:w-[34px] sm:h-[43px] md:w-[38px] md:h-[48px]"
          />
          <div>
            <div className="text-sm sm:text-base md:text-lg font-extrabold tracking-wide leading-tight text-white">
              GO KITE PRO
            </div>
            <div className="text-[0.65rem] sm:text-xs font-semibold text-white/[0.7]">
              BUSINESS & BEYOND
            </div>
          </div>
        </Link>

        {/* Center Links */}
        <div className="hidden lg:flex gap-7 items-center pt-1">
          <div ref={businessSetupRef} className="relative">
            <button
              onClick={() =>
                setIsBusinessSetupDropdownOpen(!isBusinessSetupDropdownOpen)
              }
              className="text-base font-medium text-white hover:text-white/80 transition cursor-pointer flex items-center gap-1"
            >
              Business Setup
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isBusinessSetupDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isBusinessSetupDropdownOpen && (
              <BusinessSetupDropdown
                onClose={() => setIsBusinessSetupDropdownOpen(false)}
              />
            )}
          </div>
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="text-base font-medium text-white hover:text-white/80 transition cursor-pointer flex items-center gap-1"
            >
              Our Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isServicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isServicesDropdownOpen && (
              <ServicesDropdown
                onClose={() => setIsServicesDropdownOpen(false)}
              />
            )}
          </div>
          <a
            href="/about-us"
            className="text-base font-medium text-white hover:text-white/80 transition"
          >
            About Us
          </a>
          <a
            href="/blog"
            className="text-base font-medium text-white hover:text-white/80 transition"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-base font-medium text-white hover:text-white/80 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsCostCalculatorOpen(true)}
            className="hidden sm:flex bg-[#f7c332] text-[#193954] font-bold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded shadow hover:opacity-90 text-xs sm:text-sm"
            style={{ boxShadow: "0 2px 8px #0002" }}
          >
            <span className="hidden md:inline">COST CALCULATOR</span>
            <span className="md:hidden">CALCULATOR</span>
          </Button>
          <div ref={languageRef} className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="hidden sm:flex items-center gap-1 text-xs sm:text-sm font-semibold text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded hover:bg-white/20"
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {selectedLanguage === "English"
                ? "ENG"
                : selectedLanguage === "Arabic"
                ? "AR"
                : selectedLanguage === "Chinese"
                ? "CN"
                : "RU"}
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[140px]">
                {["Arabic", "Chinese", "Russian", "English"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors text-gray-700 hover:bg-gray-100 ${
                      selectedLanguage === lang ? "font-bold" : "font-normal"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={(e) => {
              if (window.innerWidth < 1024) {
                toggleMobileMenu();
              }
            }}
            className="lg:hidden ml-1 sm:ml-2 md:ml-4 px-1.5 sm:px-2 py-1 rounded hover:bg-white/20 flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              >
                <rect y="6" width="28" height="2.5" rx="1.25" fill="#fff" />
                <rect y="13" width="28" height="2.5" rx="1.25" fill="#fff" />
                <rect y="20" width="28" height="2.5" rx="1.25" fill="#fff" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[62px] sm:top-[68px] md:top-[76px] left-2 sm:left-3 md:left-5 right-2 sm:right-3 md:right-5 bg-[#487b99] backdrop-blur-md rounded-lg shadow-2xl z-50 lg:hidden overflow-hidden border border-white/10">
          <div className="flex flex-col p-3 sm:p-4 space-y-2">
            <div className="relative">
              <button
                onClick={() =>
                  setIsBusinessSetupDropdownOpen(!isBusinessSetupDropdownOpen)
                }
                className="text-sm sm:text-base font-medium text-white hover:text-white/80 transition py-2.5 px-3 rounded hover:bg-white/10 flex items-center gap-1 w-full text-left"
              >
                Business Setup
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isBusinessSetupDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isBusinessSetupDropdownOpen && (
                <div className="mt-2">
                  <BusinessSetupDropdown
                    onClose={() => setIsBusinessSetupDropdownOpen(false)}
                  />
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className="text-sm sm:text-base font-medium text-white hover:text-white/80 transition py-2.5 px-3 rounded hover:bg-white/10 flex items-center gap-1 w-full text-left"
              >
                Our Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-2">
                  <ServicesDropdown
                    onClose={() => setIsServicesDropdownOpen(false)}
                  />
                </div>
              )}
            </div>
            <a
              href="#about"
              onClick={toggleMobileMenu}
              className="text-sm sm:text-base font-medium text-white hover:text-white/80 transition py-2.5 px-3 rounded hover:bg-white/10"
            >
              About Us
            </a>
            <a
              href="/blog"
              onClick={toggleMobileMenu}
              className="text-sm sm:text-base font-medium text-white hover:text-white/80 transition py-2.5 px-3 rounded hover:bg-white/10"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={toggleMobileMenu}
              className="text-sm sm:text-base font-medium text-white hover:text-white/80 transition py-2.5 px-3 rounded hover:bg-white/10"
            >
              Contact Us
            </a>

            {/* Mobile-only buttons */}
            <div className="pt-2 border-t border-white/20 space-y-2 mt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsCostCalculatorOpen(true)}
                className="w-full bg-[#f7c332] text-[#193954] font-bold py-2.5 rounded shadow hover:opacity-90 text-sm"
                style={{ boxShadow: "0 2px 8px #0002" }}
              >
                COST CALCULATOR
              </Button>
              <div className="relative">
                <button
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white py-2 px-3 rounded hover:bg-white/20"
                >
                  <Globe className="w-4 h-4" />
                  {selectedLanguage === "English"
                    ? "ENG"
                    : selectedLanguage === "Arabic"
                    ? "AR"
                    : selectedLanguage === "Chinese"
                    ? "CN"
                    : "RU"}
                </button>
                {isLanguageDropdownOpen && (
                  <div className="mt-2 bg-white rounded-lg shadow-xl overflow-hidden">
                    {["Arabic", "Chinese", "Russian", "English"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors text-gray-700 hover:bg-gray-100 ${
                          selectedLanguage === lang
                            ? "font-bold"
                            : "font-normal"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cost Calculator Popup */}
      <CostCalculatorPopup
        isOpen={isCostCalculatorOpen}
        onClose={() => setIsCostCalculatorOpen(false)}
      />
    </>
  );
};

export default Navbar;
