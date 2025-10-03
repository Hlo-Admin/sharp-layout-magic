import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const services = [
    "Mainland Company Formation",
    "FZCO Services",
    "Freezone Approvals & Renewals",
    "Legal Support Services",
    "Bookkeeping Services",
    "PRO Services",
    "Flexi Desk/Coworking",
    "Frexi Emigrations",
  ];

  return (
    <footer className="bg-text-heading text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-text-heading font-bold text-sm">GK</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm">GO KITE PRO</span>
                <span className="text-xs opacity-80">BUSINESS & SETUP</span>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              We're the Business Setup Services—truly! We know the Right Steps Both in Business & 
              Life. Let us help you!
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">+971 50 757 0667</p>
              <p className="opacity-80">info@gokitepro.com</p>
              <p className="text-xs opacity-60 mt-4">
                Office #1603, The Prime Tower - Al Manara Rd - Business Bay - Dubai
              </p>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Social Media</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <Twitter className="w-4 h-4" />
                <span>Snapchat</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Subscribe now</h3>
            <p className="text-sm opacity-80 mb-4">
              If you subscribe to our newsletter for weekly special news and events.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter Your Email ID" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" size="icon" className="shrink-0">
                →
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-60">
          <p>Copyright 2023. All rights reserved by Go Kite Pro.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
