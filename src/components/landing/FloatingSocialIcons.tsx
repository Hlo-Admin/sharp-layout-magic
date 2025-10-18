interface SocialIcon {
  icon: string;
  href: string;
  alt: string;
  target?: string;
  rel?: string;
}

interface FloatingSocialIconsProps {
  icons: SocialIcon[];
}

const FloatingSocialIcons = ({ icons }: FloatingSocialIconsProps) => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4 pr-2">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target={icon.target || "_blank"}
          rel={icon.rel || "noopener noreferrer"}
          className="group"
        >
          <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-l-2xl px-3 py-3 hover:bg-white transition-all duration-300 hover:shadow-xl">
            <img
              src={icon.icon}
              alt={icon.alt}
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;
