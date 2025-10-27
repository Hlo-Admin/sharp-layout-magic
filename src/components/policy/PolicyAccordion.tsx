import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

const PolicyAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordions: AccordionItem[] = [
    {
      title: "Copyright Policy",
      defaultOpen: true,
      content: (
        <div>
          <p className="text-sm leading-relaxed mb-3">
            <strong>Last Updated:</strong> October 2025
          </p>
          <p className="text-sm leading-relaxed mb-3">
            <strong>Company:</strong> Go Kite Pro Business Services LLC, UAE,
            United Arab Emirates.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            All content available on this website — including but not limited to
            text, graphics, logos, icons, images, videos, digital downloads, data
            compilations, and software — is the exclusive property of Go Kite
            Pro Business Services LLC (“Go Kite Pro”) or its content suppliers.
          </p>
          <p className="text-sm leading-relaxed">
            All rights are reserved under Federal Decree-Law No. 38 of 2021 on
            Copyrights and Neighbouring Rights (UAE).
          </p>
          <a
            href="/policy-template"
            className="inline-block mt-3 text-blue-600 hover:underline text-sm font-medium"
          >
            READ MORE →
          </a>
        </div>
      ),
    },
    {
      title: "Customer Policy",
      content: (
        <p className="text-sm leading-relaxed">
          Details about our customer-centric policies, terms, and commitments
          will be added here. We value transparency and trust.
        </p>
      ),
    },
    {
      title: "Customer Policy",
      content: (
        <p className="text-sm leading-relaxed">
          Placeholder for additional customer-related policies or agreements.
        </p>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {accordions.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-md overflow-hidden"
        >
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex justify-between items-center w-full px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-800">{item.title}</span>
            <span className="text-gray-500 text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Collapsible content with smooth animation */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="px-5 py-4 bg-gray-50 text-gray-700 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolicyAccordion;
