export const heroData = {
  breadcrumbs: {
    home: "Home",
    current: "Complaint Filing Services",
  },
  image: "/services/banners/complaint-filing.jpg", 
  title: "Complaint Filing Services in Dubai",
  subtitle: "Quick • Secure • Legally Compliant",
  contactIcons: [
    { href: "tel:+971503578847", src: "/phone.png", alt: "Phone", label: "Call Now" },
    { href: "https://wa.me/971503578847", src: "/whatsapp.png", alt: "WhatsApp", label: "WhatsApp" },
  ],
};

export const benefitsData = {
  title: "Why Filing a Legal Complaint Matters",
  benefits: [
    {
      title: "Legal Recognition",
      description:
        "Your complaint is formally recorded and moves into the legal system for action and resolution.",
    },
    {
      title: "Applicable to All",
      description:
        "Residents, visitors, and companies can file complaints without hassle.",
    },
    {
      title: "Protect Your Rights",
      description:
        "Timely complaint filing ensures your rights are protected immediately.",
    },
  ],
};

export const stepsData = {
  title: "Who Can Use Our Complaint Filing Services?",
  steps: [
    "Individuals facing harassment, fraud, or disputes",
    "Corporate complaints for breach of contract or cybercrime",
    "Legal representatives requiring case filing support",
  ],
};

export const servicesData = {
  title: "What We Do — Complaint Filing Services in Dubai",
  documents: [
    "Drafting clear & legally valid complaint letters in Arabic",
    "Submitting complaints to Dubai Police or Public Prosecution",
    "Follow-up and status monitoring with authorities",
  ],
};

export const faqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What types of complaints can be filed through your service?",
      answer:
        "We handle theft, cybercrime, fraud, harassment, business disputes and more.",
    },
    {
      question: "Is Arabic translation required?",
      answer:
        "Yes, complaints must be legally translated into Arabic for acceptance.",
    },
    {
      question: "How long does filing take?",
      answer: "Typically 1–3 business days based on document readiness.",
    },
  ],
};

// Schema for better SEO
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default {
  heroData,
  benefitsData,
  stepsData,
  servicesData,
  faqData,
  faqSchema,
};
