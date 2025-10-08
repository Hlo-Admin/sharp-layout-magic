import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al Mazroui",
      role: "CEO, Tech Innovations LLC",
      rating: 5,
      text: "Go Kite PRO made our business setup incredibly smooth. Their team was professional, knowledgeable, and always available to answer our questions. Highly recommended!"
    },
    {
      name: "Sarah Johnson",
      role: "Founder, Creative Solutions FZ",
      rating: 5,
      text: "The entire process was handled efficiently from start to finish. They guided us through every step and helped us get our license in record time. Excellent service!"
    },
    {
      name: "Mohammed Hassan",
      role: "Managing Director, Global Trade Co.",
      rating: 5,
      text: "Professional, transparent, and reliable. Go Kite PRO exceeded our expectations with their comprehensive support and expertise in UAE business setup."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-gray-600">What our satisfied clients say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
