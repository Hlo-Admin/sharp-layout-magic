import { ShoppingBag, Briefcase, Factory } from "lucide-react";

const LicenseTypes = () => {
  const licenses = [
    {
      icon: ShoppingBag,
      title: "Commercial License",
      description: "To trade a full-scope business",
      color: "bg-orange-500",
    },
    {
      icon: Briefcase,
      title: "Professional License",
      description: "To service providers, professionals & consultants.",
      color: "bg-blue-500",
    },
    {
      icon: Factory,
      title: "Industrial License",
      description: "To be used by manufacturing or industry-based businesses",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-heading mb-8">
          MAINLAND COMPANY LICENSE TYPES
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {licenses.map((license, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${license.color} rounded-lg flex items-center justify-center mb-4`}>
                <license.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-text-heading mb-2 text-lg">{license.title}</h3>
              <p className="text-sm text-text-body">{license.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseTypes;
