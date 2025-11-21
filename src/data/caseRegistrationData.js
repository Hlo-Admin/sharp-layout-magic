export const heroData = {
  breadcrumbs: {
    home: "Home",
    current: "Case Registration Services",
  },
  image: "/services/banners/case-registration.jpg",
  title: "Expert Case Registration Support for Dubai Courts",
  subtitle: "Fast • Accurate • Court-Compliant Filings",
  contactIcons: [
    { href: "tel:+971503578847", src: "/phone.png", alt: "Call", label: "Call Us" },
    { href: "https://wa.me/971503578847", src: "/whatsapp.png", alt: "WhatsApp", label: "WhatsApp" },
  ],
};

export const benefitsData = {
  title: "Why Choose Professional Case Registration?",
  benefits: [
    {
      title: "Understanding the Case Registration Process in Dubai",
      description:
        "End-to-end guidance through the UAE legal filing process including categorization, validation, and official submissions.",
      icon: "/icons/legal-process.png",
    },
    {
      title: "Who Can Benefit from Our Case Registration Services?",
      description:
        "Individuals, companies, and legal representatives — our solutions suit every legal situation.",
      icon: "/icons/public.png",
    },
    {
      title: "Fast-Track Court Filing",
      description:
        "Avoid delays and document errors through professional oversight and regular status follow-ups.",
      icon: "/icons/fast.png",
    },
  ],
};

export const stepsData = {
  title: "How We Support You",
  steps: [
    "Document Preparation: Correct formatting, translation, and legal drafting.",
    "Case Submission: Filing under correct court jurisdiction and category.",
    "Court Follow-Up & Support: Continuous updates and support during hearings.",
  ],
};

export const servicesData = {
  title: "Our Case Registration Services Include",
  documents: [
    "Document drafting: Memorandums & Statements",
    "Contract and evidence verification",
    "Civil, Commercial, Personal & Labor cases",
    "Dedicated support for court inquiries and hearings",
  ],
};

export const faqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What documents are required for case registration in Dubai?",
      answer:
        "Passport/Emirates ID, Power of Attorney (if needed), and relevant case evidence like contracts or records.",
    },
    {
      question: "How long does case registration take?",
      answer: "Typically 3–7 business days depending on case complexity.",
    },
    {
      question: "Can you assist with urgent filings?",
      answer:
        "Yes! We provide priority services for emergency cases with expedited submission.",
    },
    {
      question: "What happens if filing is incorrect?",
      answer:
        "It may result in delays or even dismissal — our experts help you avoid errors.",
    },
    {
      question: "Are services only for businesses?",
      answer:
        "No. Both individuals and companies can submit cases — we support all clients.",
    },
  ],
};

// FAQ Schema for SEO
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
