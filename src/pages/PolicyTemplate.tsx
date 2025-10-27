import React from "react";
import LandingNavigation from "@/components/landing/LandingNavigation";
import Footer from "@/components/common/Footer";

const policyData = {
  title: "Copyright Policy",
  lastUpdated: "October 2025",
  company: "Go Kite PRO Business Services LLC, UAE, United Arab Emirates",
  sections: [
    {
      heading: "1. Ownership of Content",
      content: [
        "All content available on this website — including but not limited to text, graphics, logos, icons, images, videos, digital downloads, data compilations, and software — is the exclusive property of Go Kite PRO Business Services LLC ('Go Kite PRO') or its content suppliers.",
        "All rights are reserved under Federal Decree-Law No. 38 of 2021 on Copyrights and Neighbouring Rights (UAE).",
        "Unless otherwise stated, Go Kite PRO owns all intellectual property rights to the materials published on this website."
      ]
    },
    {
      heading: "2. Permitted Use",
      content: [
        "You may view, download, and print pages from this website for your personal, non-commercial use only.",
        "You must not:",
        "• Republish or redistribute any material from this site without prior written consent.",
        "• Sell, rent, or sub-license content from this website.",
        "• Reproduce, duplicate, copy, or exploit material for commercial purposes.",
        "• Modify or alter the material in any way without authorization.",
        "Written permission is required for any commercial or public use of our content."
      ]
    },
    {
      heading: "3. Use of Third-Party Materials",
      content: [
        "Certain images, icons, or resources used on this website may belong to third parties and are used under license or fair use principles.",
        "Go Kite PRO acknowledges such third-party rights and provides credit where required.",
        "If you believe any content infringes your copyright, please contact us immediately (See Section 7)."
      ]
    },
    {
      heading: "4. Trademarks",
      content: [
        "'Go Kite PRO', the Go Kite PRO logo, and all related product and service names are registered trademarks or pending trademarks of Go Kite PRO Business Services LLC in the UAE and/or other jurisdictions.",
        "Unauthorized use of any Go Kite PRO trademarks, logos, or branding elements is strictly prohibited."
      ]
    },
    {
      heading: "5. Digital Works and Software",
      content: [
        "All digital works, including website code, software tools, documents, and creative materials produced by Go Kite PRO, are protected by copyright and other applicable intellectual property laws.",
        "Any duplication, modification, or distribution of these materials without permission will result in legal action."
      ]
    },
    {
      heading: "6. Reporting Copyright Infringement",
      content: [
        "Go Kite PRO respects the intellectual property rights of others and expects users to do the same.",
        "If you believe your copyrighted material has been used or displayed on our website in a way that constitutes infringement, please send a detailed notice to:",
        "Copyright Officer",
        "Go Kite PRO Business Services LLC",
        "UAE, United Arab Emirates",
        "📧 legal@gokitepro.ae",
        "Your notice must include:",
        "• Your name, address, and contact details.",
        "• A description of the copyrighted work claimed to be infringed.",
        "• A description of where the infringing content is located on our website.",
        "• A statement confirming that you believe in good faith that the use is unauthorized.",
        "• A statement under penalty of perjury that the information in the notice is accurate."
      ]
    },
    {
      heading: "7. Enforcement",
      content: [
        "Go Kite PRO takes copyright violations seriously.",
        "Unauthorized use or reproduction of any protected material may lead to civil and/or criminal penalties under UAE law, including claims for damages and injunctions."
      ]
    },
    {
      heading: "8. Updates to This Policy",
      content: [
        "Go Kite PRO may revise or update this Copyright Policy at any time without prior notice.",
        "All changes will be posted on this page with an updated revision date.",
        "By continuing to use our website after such changes, you agree to be bound by the revised policy."
      ]
    },
    {
      heading: "9. Governing Law",
      content: [
        "This policy is governed by and construed in accordance with the laws of the United Arab Emirates.",
        "Any disputes shall be subject to the exclusive jurisdiction of the courts of UAE, UAE."
      ]
    }
  ],
  footerNote: "© 2025 Go Kite PRO Business Services LLC. All Rights Reserved."
};

const CopyrightPolicy: React.FC = () => {
  return (
    <>
    <LandingNavigation />
    <div className="bg-white text-gray-800 px-8 md:px-20 mx-auto py-12 pt-40">
      <h1 className="text-4xl font-bold mb-6">{policyData.title}</h1>
      <p className="text-sm text-gray-500 mb-2">Last Updated: {policyData.lastUpdated}</p>
      <p className="text-sm text-gray-600 mb-8">{policyData.company}</p>

      {policyData.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
          {section.content.map((para, idx) => (
            <p key={idx} className="text-gray-700 mb-2 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      ))}

      <p className="text-sm text-gray-600 mt-12">{policyData.footerNote}</p>
    </div>
    <Footer />
    </>
  );
};

export default CopyrightPolicy;
