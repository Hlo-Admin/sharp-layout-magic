// src/data/attestationServices.js

export const heroData = {
  breadcrumbs: {
    home: "Home",
    current: "Attestation Services in Dubai",
  },
  title: "Attestation Services in Dubai, UAE",
  description:
    "Certified attestation services in Dubai for personal, educational, and commercial documents. Fast processing, MOFA compliance, and secure handling for UAE and international use.",
  buttonText: "Get Document Attested",
  image: "/services/banners/attestation-services.jpg",
  socialIcons: [
    { icon: "/phone.png", href: "tel:+971503578847", label: "Call Us" },
    {
      icon: "/whatsapp.png",
      href: "https://wa.me/971503578847",
      target: "_blank",
      label: "WhatsApp",
    },
    { icon: "/message.png", href: "mailto:info@gokitepro.com", label: "Email Us" },
  ],
};

export const serviceCardsData = {
  services: [
    {
      icon: "/attestation/personal.png",
      title: "Personal Certificate Attestation",
      description:
        "Birth, marriage, and death certificates attested for visa, family sponsorship, inheritance & more.",
    },
    {
      icon: "/attestation/education.png",
      title: "Educational Certificate Attestation",
      description:
        "Authenticate degree and diploma documents for employment, university admission & licensing.",
    },
    {
      icon: "/attestation/commercial.png",
      title: "Commercial Certificate Attestation",
      description:
        "Attestation for business documents including MOA, AOA, trade licenses & contracts.",
    },
  ],
};

export const trustedData = {
  sectionTitle: "Why Choose Go Kite Business Setup Services?",
  mainTitle: "MOFA-Approved Document Attestation in Dubai",
  description:
    "We ensure compliance, secure processing, and timely delivery across all document types required in UAE.",
  bulletPoints: [
    "Expert in Attestation & Legalization Laws",
    "End-to-End Service: Pickup to Final Delivery",
    "Fast Turnaround Times",
    "Competitive, Transparent Pricing",
    "Safe Handling of Sensitive Documents",
  ],
  stats: [
    { icon: "/attestation/icon-1.png", title: "3000+ Docs Attested" },
    { icon: "/attestation/icon-2.png", title: "MOFA Approved" },
    { icon: "/attestation/icon-3.png", title: "100% Safe Handling" },
    { icon: "/attestation/icon-4.png", title: "3-7 Days Processing" },
  ],
  links: [
    { text: "Talk to an Attestation Expert", href: "/contact" },
    { text: "WhatsApp Team", href: "https://wa.me/971503578847" },
  ],
};

export const semicircleData = {
  headline: "Why is Certificate Attestation Important in UAE?",
  subHeadline: "Legalization • Verification • Global Recognition",
  steps: [
    {
      title: "Legal Compliance",
      description:
        "Required for visas, licensing, company formation, and government applications.",
    },
    {
      title: "International Validity",
      description: "Ensures your UAE-issued documents are recognized abroad.",
    },
    {
      title: "Business Operations",
      description:
        "Commercial attestation helps in bank accounts, government contracts, and sponsorships.",
    },
  ],
  buttonText: "Get Attestation Support →",
};

// ⭐ NEW FAQS ADDED HERE — OLD ONES REMOVED
export const faqData = {
  title: "Frequently Asked Questions (FAQs)",
  faqs: [
    {
      question: "1. What is certificate attestation?",
      answer:
        "It’s the process of verifying a document's authenticity for use in the UAE or internationally. It involves stamping and sealing by relevant authorities.",
    },
    {
      question: "2. What types of documents need attestation in Dubai?",
      answer:
        "Typically, personal (birth, marriage), educational (degrees, diplomas), and commercial (MOA, AOA) documents require attestation.",
    },
    {
      question: "3. How long does it take to complete the attestation process?",
      answer:
        "The timeline varies based on the document and issuing country but usually takes 5–15 working days.",
    },
    {
      question: "4. Can Go Kite handle urgent attestation services?",
      answer:
        "Yes, we offer express attestation services for clients with tight deadlines.",
    },
    {
      question: "5. Is MOFA attestation necessary for documents in Dubai?",
      answer:
        "Yes, for most official and legal procedures, MOFA (Ministry of Foreign Affairs) attestation is required in the UAE.",
    },
    {
      question: "6. What’s the difference between notarization and attestation?",
      answer:
        "Notarization confirms the signature/authenticity locally, while attestation is a multi-level validation process for international and legal recognition.",
    },
    {
      question: "7. Do I need to be present during the attestation?",
      answer:
        "No, our team handles the entire process on your behalf—no personal presence required.",
    },
    {
      question: "8. Is embassy attestation mandatory for overseas use?",
      answer:
        "Yes, embassy attestation is needed when documents are used in a foreign country. We coordinate with respective embassies as part of the process.",
    },
    {
      question: "9. Can you help if I’ve lost my original document?",
      answer:
        "Yes, we guide you in applying for a duplicate and proceeding with the attestation once it’s issued.",
    },
    {
      question: "10. Why choose Go Kite Business Setup Services for attestation?",
      answer:
        "We provide end-to-end attestation services in Dubai, combining speed, reliability, and regulatory compliance to give you complete peace of mind.",
    },
  ],
};

export default {
  heroData,
  serviceCardsData,
  trustedData,
  semicircleData,
  faqData,
};
