export const heroData = {
  breadcrumbs: {
    home: "Home",
    current: "Legal Support Services",
  },
  title: "Legal Support Services in Dubai",
  description:
    "Expert assistance in legal documentation, dispute resolution, and compliance support for businesses & individuals in Dubai.",
  buttonText: "Get Legal Assistance",
  image: "/legal/legal-support-hero.jpg", // Update your banner image
  socialIcons: [
    {
      icon: "/phone.png",
      href: "tel:+971503578847",
      label: "Let's Talk",
    },
    {
      icon: "/whatsapp.png",
      href: "https://wa.me/971503578847",
      target: "_blank",
      label: "WhatsApp",
    },
    {
      icon: "/message.png",
      href: "mailto:info@gokitepro.com",
      label: "Email Us",
    },
  ],
};

// Section with cards — your services
export const serviceCardsData = {
  services: [
    {
      icon: "/legal/icon-complaint.png",
      title: "Complaint Filing Services",
      description:
        "Professionally file complaints with Police & Prosecution authorities ensuring accurate legal documentation.",
      image: "/legal/complaint.jpg",
    },
    {
      icon: "/legal/icon-case.png",
      title: "Case Registration Support",
      description:
        "Expert case registration at Dubai Courts including civil, commercial & labor disputes.",
      image: "/legal/case.jpg",
    },
    {
      icon: "/legal/icon-rent.png",
      title: "Rental Dispute Center Services",
      description:
        "Protect your rights in landlord-tenant disputes with guided RDC filing and representation.",
      image: "/legal/rental.jpg",
    },
  ],
};

export const trustedData = {
  sectionTitle: "Reliable Legal Partner",
  mainTitle:
    "Trusted in Dubai for Legal Compliance & Dispute Support",
  description:
    "We ensure quick response, proper documentation & full assistance through official authorities.",
  links: [
    { text: "Speak to a Legal Expert", href: "/contact" },
    { text: "WhatsApp Support", href: "https://wa.me/971503578847" },
  ],
  stats: [
    { icon: "/legal/icon-1.png", title: "500+ Cases Filed", description: "" },
    { icon: "/legal/icon-2.png", title: "95%+ Success Rate", description: "" },
    { icon: "/legal/icon-3.png", title: "Expert Legal Partners", description: "" },
    { icon: "/legal/icon-4.png", title: "Fast Processing", description: "" },
  ],
};

export const semicircleData = {
  headline: "Secure Your Legal Rights in Dubai with Confidence",
  subHeadline: "FAST, RELIABLE & PROFESSIONAL LEGAL ASSISTANCE",
  buttonText: "Get Support Now →",
  image: "/legal/legal-support-circle.png",
};

export const faqData = {
  title: "Frequently Asked Questions",
  subtitle: "Legal Support Services in Dubai",
  faqs: [
    {
      question: "What legal support services do you provide?",
      answer:
        "We assist in complaint filing, court case registration, rental dispute resolution, and more based on UAE regulations.",
    },
    {
      question: "How long does complaint or case filing take?",
      answer:
        "Usually 1–7 business days depending on the complaint type and documentation.",
    },
    {
      question: "Do you provide Arabic translation?",
      answer:
        "Yes, we provide official Arabic translation required for legal submissions.",
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
