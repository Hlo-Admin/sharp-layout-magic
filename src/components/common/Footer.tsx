import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const services = [
  { name: "Attestation Services", href: "/document-legal-service" },
  { name: "PRO Services", href: "/additional-service" },
  { name: "Government Approvals", href: "/document-legal-service" },
  { name: "Legal Support Services", href: "/legal-document-services" },
  { name: "Translation Services", href: "/document-legal-service" },
  { name: "GHQ Services", href: "/document-legal-service" },
  { name: "Brand Registration", href: "/brand-register" },
];

const social = [
  { name: "Instagram", href: "https://www.instagram.com/gokitepro/" },
  { name: "Linkedin", href: "https://www.linkedin.com/company/go-kite-pro/" },
  { name: "Facebook", href: "https://www.facebook.com/people/Go-Kite-PRO/61578056361465/" },
  { name: "X", href: "https://twitter.com/gokitepro" },
  { name: "Threads", href: "https://www.threads.net/@gokitepro" },
  { name: "Snapchat", href: "https://www.snapchat.com/add/gokitepro" },
];

const Footer = () => (
  <section className="bg-[#e1eff2]">
    <footer className="bg-black text-white rounded-tl-[2rem] rounded-tr-[2rem] pt-10 pb-8 relative mx-4  px-4 py-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-b border-white/10">
          {/* Company Info */}
          <div className="px-5 py-2 border-r border-white/15 min-h-[195px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/footer-logo.png"
                  alt="Go Kite Pro"
                  className="w-[36px] h-[48px]"
                />
                <div>
                  <div className="text-lg font-extrabold tracking-wide leading-tight">
                    GO KITE PRO
                  </div>
                  <div className="text-xs tracking-widest font-semibold text-white/80">
                    BUSINESS & BEYOND
                  </div>
                </div>
              </div>
              <p className="text-[13px] opacity-80 mb-3 leading-snug">
                Go Kite Business Setup Services – Your gateway to starting a
                business in the UAE
              </p>
              <a
                href="tel:+971503578847"
                className="block font-semibold text-[13px] mb-1 underline underline-offset-2"
              >
                +971 50 357 8847
              </a>
              <a
                href="mailto:info@gokitepro.com"
                className="block text-[13px] mb-1 underline underline-offset-2"
              >
                info@gokitepro.com
              </a>
              <p className="text-[12px] font-bold mt-4  text-white leading-snug">
                Office #1801, The Prism Tower – Al Mustaqbal St – Business Bay –
                Dubai
              </p>
            </div>
          </div>
          {/* Our Services */}
          <div className="px-5 py-2 border-r border-white/15">
            <h3 className="font-bold text-sm mb-3">Our Services</h3>
            <ul className="space-y-1.5 text-[13px] opacity-80">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:opacity-100 hover:underline underline-offset-2 transition-opacity"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media */}
          <div className="px-5 py-2 border-r border-white/15">
            <h3 className="font-bold text-sm mb-3">Social Media</h3>
            <ul className="space-y-1.5 text-[13px] opacity-80">
              {social.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-100 hover:underline underline-offset-2 transition-opacity"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter */}
          <div className="px-5 py-2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-sm mb-3">Subscribe now</h3>
              <p className="text-[13px] opacity-80 mb-3 leading-tight">
                Financial advisors can identify tax-saving opportunities,
                optimize investment
              </p>
              <div className="flex gap-2 mt-2">
                <Input
                  type="email"
                  placeholder="Enter Your Mail ID"
                  className="bg-white text-black placeholder:text-gray-500 h-10 rounded-[7px] text-[13px] border-none"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white text-black h-10 w-10 rounded-[7px] text-base font-bold shadow-none hover:bg-gray-100"
                >
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-7 text-center text-xs opacity-60 tracking-wide">
          <p>Copyright 2025. All rights reserved by Go Kite Pro.</p>
        </div>
      </div>
      {/* Top border curve overlays */}
      <div className="absolute left-0 top-0 w-16 h-16 bg-black rounded-tl-[2rem]" />
      <div className="absolute right-0 top-0 w-16 h-16 bg-black rounded-tr-[2rem]" />
    </footer>
  </section>
);

export default Footer;
