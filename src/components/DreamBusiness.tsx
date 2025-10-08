import { Button } from "@/components/ui/button";
import consultantImg from "@/assets/consultant.jpg";

const DreamBusiness = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Setup your Dream Business in UAE
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Starting a business in the UAE offers incredible opportunities for growth and success. 
              With our expert guidance, you can navigate the setup process smoothly and efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide comprehensive support for mainland, free zone, and offshore company formation, 
              ensuring you choose the right structure for your business goals. Our team handles all 
              documentation, approvals, and licensing requirements.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-white hover:bg-foreground/90 font-semibold px-8 py-6 rounded-lg"
            >
              EXPLORE MORE SERVICES →
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={consultantImg}
                alt="Business Consultant"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamBusiness;
