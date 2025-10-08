import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail } from "lucide-react";
import Navbar from "@/common/Navbar";

const HeroHome = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Setup Business in UAE
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Your Quick Business Setup Partner in UAE
            </p>
            <Button
              size="lg"
              className="bg-secondary text-foreground hover:bg-secondary/90 font-bold px-8 py-6 text-lg rounded-lg shadow-xl"
            >
              GET A FREE QUOTE →
            </Button>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  Mainland Business Setup
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  Full ownership and unlimited business scope
                </p>
                <a href="#" className="text-xs text-primary font-semibold hover:underline">
                  Learn More →
                </a>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  Freezone Licenses
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  100% ownership with flexible options
                </p>
                <a href="#" className="text-xs text-primary font-semibold hover:underline">
                  Learn More →
                </a>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  Offshore Licenses
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  International business structure
                </p>
                <a href="#" className="text-xs text-primary font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Burj Al Arab Image Placeholder */}
          <div className="hidden lg:block relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px]">
              {/* Burj Al Arab illustration/image would go here */}
              <div className="w-full h-full opacity-20 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-6xl">🏢</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Contact Icons */}
      <div className="fixed right-0 top-1/3 z-50 flex flex-col gap-3">
        <a
          href="tel:+971503578847"
          className="bg-white shadow-xl rounded-l-2xl p-3 hover:bg-gray-50 transition-all hover:pr-6"
        >
          <Phone className="w-6 h-6 text-primary" />
        </a>
        <a
          href="https://wa.me/971503578847"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-xl rounded-l-2xl p-3 hover:bg-gray-50 transition-all hover:pr-6"
        >
          <MessageCircle className="w-6 h-6 text-green-500" />
        </a>
        <a
          href="mailto:info@gokitepro.com"
          className="bg-white shadow-xl rounded-l-2xl p-3 hover:bg-gray-50 transition-all hover:pr-6"
        >
          <Mail className="w-6 h-6 text-primary" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-32 w-40 h-40 border-4 border-white rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroHome;
