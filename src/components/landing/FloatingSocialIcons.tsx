interface SocialIcon {
  icon: string;
  href: string;
  alt: string;
  label?: string;
  target?: string;
  rel?: string;
}

interface FloatingSocialIconsProps {
  icons: SocialIcon[];
}

const FloatingSocialIcons = ({ icons }: FloatingSocialIconsProps) => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-end gap-4">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="group bg-white/95 shadow-xl rounded-l-2xl py-2 transition-all duration-300 hover:shadow-2xl hover:px-4 overflow-hidden"
          style={{
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        >
          <a
            href={icon.href}
            target={icon.target}
            rel={icon.rel}
            className="flex items-center justify-start gap-3 whitespace-nowrap"
          >
            <img
              src={icon.icon}
              alt={icon.alt}
              className="w-10 h-10 flex-shrink-0 transition-transform duration-300"
            />
            <span className="text-black font-bold text-sm opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[150px] transition-all duration-300 overflow-hidden">
              {icon.label || ""}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;
