// import { Button } from "@/components/ui/button";
// import { Globe, ChevronDown, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const NavBar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleServicesDropdown = () => {
//     setIsServicesDropdownOpen(!isServicesDropdownOpen);
//   };

//   const toggleLanguageDropdown = () => {
//     setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 bg-[#2196F3] shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             {/* Left Section - Logo */}
//             <Link to="/" className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   className="text-[#2196F3]"
//                 >
//                   {/* Kite/Paper Airplane Icon */}
//                   <path
//                     d="M12 2L2 7L12 12L22 7L12 2Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M2 17L12 22L22 17"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M2 12L12 17L22 12"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase">
//                   GO KITE PRO
//                 </div>
//                 <div className="text-xs lg:text-sm font-semibold text-white/90 tracking-wide uppercase">
//                   BUSINESS & BEYOND
//                 </div>
//               </div>
//             </Link>

//             {/* Center Section - Navigation Links (Desktop) */}
//             <div className="hidden lg:flex items-center space-x-8">
//               <Link
//                 to="/"
//                 className="text-white font-medium hover:text-white/80 transition-colors text-sm"
//               >
//                 Business Setup
//               </Link>
//               <div className="relative">
//                 <button
//                   onClick={toggleServicesDropdown}
//                   className="flex items-center gap-1 text-white font-medium hover:text-white/80 transition-colors text-sm"
//                 >
//                   Our Services
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {isServicesDropdownOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
//                     <Link
//                       to="/services/business-setup"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
//                     >
//                       Business Setup
//                     </Link>
//                     <Link
//                       to="/services/visa"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
//                     >
//                       Visa Services
//                     </Link>
//                     <Link
//                       to="/services/legal"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
//                     >
//                       Legal Services
//                     </Link>
//                     <Link
//                       to="/services/finance"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
//                     >
//                       Financial Services
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <Link
//                 to="/about"
//                 className="text-white font-medium hover:text-white/80 transition-colors text-sm"
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/contact"
//                 className="text-white font-medium hover:text-white/80 transition-colors text-sm"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Right Section - Action Items (Desktop) */}
//             <div className="hidden lg:flex items-center gap-4">
//               <Button
//                 size="sm"
//                 className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold px-4 py-2 rounded-md shadow-md transition-colors text-sm uppercase"
//               >
//                 COST CALCULATOR
//               </Button>
//               <div className="relative">
//                 <button
//                   onClick={toggleLanguageDropdown}
//                   className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition-colors"
//                 >
//                   <Globe className="w-4 h-4" />
//                   <span className="text-sm font-medium uppercase">ENG</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {isLanguageDropdownOpen && (
//                   <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-2 z-50">
//                     <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
//                       English
//                     </button>
//                     <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
//                       العربية
//                     </button>
//                     <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
//                       हिन्दी
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={toggleMobileMenu}
//               className="lg:hidden p-2 text-white hover:bg-white/20 rounded-md transition-colors bg-blue-600"
//               aria-label="Toggle mobile menu"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-[#2196F3] border-t border-blue-400">
//             <div className="px-4 py-4 space-y-4">
//               <Link
//                 to="/"
//                 onClick={toggleMobileMenu}
//                 className="block text-white font-medium hover:text-white/80 transition-colors py-2 text-sm"
//               >
//                 Business Setup
//               </Link>
//               <div>
//                 <button
//                   onClick={toggleServicesDropdown}
//                   className="flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors py-2 w-full text-sm"
//                 >
//                   Our Services
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {isServicesDropdownOpen && (
//                   <div className="ml-4 mt-2 space-y-2">
//                     <Link
//                       to="/services/business-setup"
//                       onClick={toggleMobileMenu}
//                       className="block text-white/80 hover:text-white transition-colors py-1 text-sm"
//                     >
//                       Business Setup
//                     </Link>
//                     <Link
//                       to="/services/visa"
//                       onClick={toggleMobileMenu}
//                       className="block text-white/80 hover:text-white transition-colors py-1 text-sm"
//                     >
//                       Visa Services
//                     </Link>
//                     <Link
//                       to="/services/legal"
//                       onClick={toggleMobileMenu}
//                       className="block text-white/80 hover:text-white transition-colors py-1 text-sm"
//                     >
//                       Legal Services
//                     </Link>
//                     <Link
//                       to="/services/finance"
//                       onClick={toggleMobileMenu}
//                       className="block text-white/80 hover:text-white transition-colors py-1 text-sm"
//                     >
//                       Financial Services
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <Link
//                 to="/about"
//                 onClick={toggleMobileMenu}
//                 className="block text-white font-medium hover:text-white/80 transition-colors py-2 text-sm"
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/contact"
//                 onClick={toggleMobileMenu}
//                 className="block text-white font-medium hover:text-white/80 transition-colors py-2 text-sm"
//               >
//                 Contact Us
//               </Link>
              
//               {/* Mobile Action Buttons */}
//               <div className="pt-4 border-t border-blue-400 space-y-3">
//                 <Button
//                   size="sm"
//                   className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold py-2 rounded-md shadow-md transition-colors text-sm uppercase"
//                 >
//                   COST CALCULATOR
//                 </Button>
//                 <div className="flex items-center justify-center gap-2 text-white">
//                   <Globe className="w-4 h-4" />
//                   <span className="font-medium text-sm uppercase">ENG</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Spacer to prevent content from being hidden behind fixed navbar */}
//       <div className="h-16 lg:h-20"></div>
//     </>
//   );
// };

// export default NavBar;
import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#2196F3] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Left Section - Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#2196F3]"
                >
                  {/* Kite/Paper Airplane Icon */}
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase">
                  GO KITE PRO
                </div>
                <div className="text-xs lg:text-sm font-semibold text-white/90 tracking-wide uppercase">
                  BUSINESS & BEYOND
                </div>
              </div>
            </div>

            {/* Center Section - Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-white font-medium hover:text-white/80 transition-colors text-sm uppercase tracking-wide"
              >
                Business Setup
              </a>
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center gap-1 text-white font-medium hover:text-white/80 transition-colors text-sm uppercase tracking-wide"
                >
                  Our Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Business Setup
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Visa Services
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Legal Services
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Financial Services
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-white font-medium hover:text-white/80 transition-colors text-sm uppercase tracking-wide"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white font-medium hover:text-white/80 transition-colors text-sm uppercase tracking-wide"
              >
                Contact Us
              </a>
            </div>

            {/* Right Section - Action Items (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold px-4 py-2 rounded-md shadow-md transition-colors text-sm uppercase tracking-wide">
                COST CALCULATOR
              </button>
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span className="text-sm font-medium uppercase tracking-wide">ENG</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-2 z-50">
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      English
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      العربية
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                      हिन्दी
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:bg-white/20 rounded-md transition-colors bg-blue-600"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#2196F3] border-t border-blue-400">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#"
                onClick={toggleMobileMenu}
                className="block text-white font-medium hover:text-white/80 transition-colors py-2 text-sm uppercase tracking-wide"
              >
                Business Setup
              </a>
              <div>
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors py-2 w-full text-sm uppercase tracking-wide"
                >
                  Our Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="#"
                      onClick={toggleMobileMenu}
                      className="block text-white/80 hover:text-white transition-colors py-1 text-sm"
                    >
                      Business Setup
                    </a>
                    <a
                      href="#"
                      onClick={toggleMobileMenu}
                      className="block text-white/80 hover:text-white transition-colors py-1 text-sm"
                    >
                      Visa Services
                    </a>
                    <a
                      href="#"
                      onClick={toggleMobileMenu}
                      className="block text-white/80 hover:text-white transition-colors py-1 text-sm"
                    >
                      Legal Services
                    </a>
                    <a
                      href="#"
                      onClick={toggleMobileMenu}
                      className="block text-white/80 hover:text-white transition-colors py-1 text-sm"
                    >
                      Financial Services
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                onClick={toggleMobileMenu}
                className="block text-white font-medium hover:text-white/80 transition-colors py-2 text-sm uppercase tracking-wide"
              >
                About Us
              </a>
              <a
                href="#"
                onClick={toggleMobileMenu}
                className="block text-white font-medium hover:text-white/80 transition-colors py-2 text-sm uppercase tracking-wide"
              >
                Contact Us
              </a>
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-blue-400 space-y-3">
                <button className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold py-2 rounded-md shadow-md transition-colors text-sm uppercase tracking-wide">
                  COST CALCULATOR
                </button>
                <div className="flex items-center justify-center gap-2 text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span className="font-medium text-sm uppercase tracking-wide">ENG</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default NavBar;