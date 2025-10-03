import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import consultantImg from "@/assets/consultant.jpg";

const CostSection = () => {
  return (
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-text-heading mb-6">
              Costs of Mainland Company Formation in the UAE
            </h2>
            
            <p className="text-text-body leading-relaxed mb-6">
              Mainland company setup costs vary depending on the emirate, business activity, visa 
              quotas, and office space. On average, prices range between AED 15,000 to AED 35,000, 
              including license fees, local service agent fees, and documentation.
            </p>

            <Button variant="default" className="group">
              Get Quote for business setup
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={consultantImg} 
                alt="Business consultant" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSection;
