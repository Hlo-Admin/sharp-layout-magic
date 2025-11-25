import FloatingSocialIcons from "@/components/landing/FloatingSocialIcons";

// Default social icons data that will appear on all pages
const defaultSocialIcons = [
  {
    icon: "/phone.png",
    href: "tel:+971503578847",
    alt: "Phone",
    label: "Let's Talk",
  },
  {
    icon: "/whatsapp.png",
    href: "https://wa.me/971503578847",
    alt: "WhatsApp",
    label: "WhatsApp",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: "/message.png",
    href: "mailto:info@gokitepro.com",
    alt: "Email",
    label: "Email Us",
  },
];

const GlobalSocialIcons = () => {
  return <FloatingSocialIcons icons={defaultSocialIcons} />;
};

export default GlobalSocialIcons;

