import { Button } from "@/components/ui/button";

const QuickGuide = () => {
  const guides = [
    {
      title: "Start a Economic Freezone in UAE",
      image: "🏝️",
      link: "#"
    },
    {
      title: "Mainland Business License in Dubai",
      image: "🏙️",
      link: "#"
    },
    {
      title: "Set up your business via Trade License",
      image: "🏢",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your quick guide to<br />business setup in UAE
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore different business setup options and find the perfect solution for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-9xl">
                {guide.image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {guide.title}
                </h3>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-secondary text-foreground hover:bg-secondary/90 font-semibold"
                >
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickGuide;
