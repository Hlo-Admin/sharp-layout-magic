import { ArrowRight, Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinancialHero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/landingpage/banner.jpg')",
        }}
      />
      
      {/* Gradient Overlay - dark left to light right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Finance Innovate,<br />
              Create, Elevate
            </h1>
            <p className="text-xl text-gray-200">
              Unlocking Possibilities, One Code at a Time
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-lg">
              Contact Business Team <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Right Side - Floating Contact Card */}
          <div className="flex justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 max-w-sm">
              <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
              
              <div className="space-y-4">
                <a href="tel:+971123456789" className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call Us</p>
                    <p className="font-semibold text-gray-900">+971 123 456 789</p>
                  </div>
                </a>

                <a href="https://wa.me/971123456789" className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <p className="font-semibold text-gray-900">Chat with us</p>
                  </div>
                </a>

                <a href="mailto:info@business.ae" className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">info@business.ae</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialHero;
