import React from 'react';
import Whatwedo from '/aboutus/whatwedo.png'; // Replace with actual path to your image

const services = [
  {
    title: 'Business Setup:',
    description:
      'Mainland, free zone, and offshore company formation; trade name & activity selection; license issuance; establishment cards.',
  },
  {
    title: 'PRO & Government Liaison:',
    description:
      'Document processing, renewals, attestations, approvals, and regulatory touchpoints across entities.',
  },
  {
    title: 'Attestation & Typing:',
    description:
      'MOFA/embassy legalization, immigration & medical typing, visa documentation.',
  },
  {
    title: 'Legal Support:',
    description:
      'Drafting, attestations, and business agreements aligned to UAE frameworks.',
  },
  {
    title: 'Residency Pathways:',
    description:
      'Investor & Golden Visa guidance for founders, professionals, and families.',
  },
];

const WhatWeDo = () => {
  return (
    <section className="px-6 py-12 md:py-20 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="md:w-3/5 space-y-8">
          <h2 className="text-2xl md:text-4xl font-semibold">
            What We Do <span className="font-normal">(End-to-End)</span>
          </h2>

          <ul className="space-y-6">
            {services.map((service, index) => (
              <li key={index}>
                <p className="font-semibold text-xl text-gray-900">
                  <span className="font-bold mt-1">•</span> {service.title}
                </p>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="md:w-2/5 flex justify-end">
          <img
            src={Whatwedo}
            alt="UAE map with icons"
            className="max-w-lg md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
