import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "Tech Solutions",
    image: "/aboutus/testimonials.png",
    content:
      "Go Kite visa processing and PRO services were professional, quick and reliable. I was supported all through and when I sponsored my family. What a client-oriented team! – Ravi Menon, Founder",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Creative Studio",
    image: "/aboutus/testimonials.png",
    content:
      "Amazing experience! The team was responsive and ensured everything went smoothly. I highly recommend Go Kite for any visa-related service.",
  },
  {
    id: 3,
    name: "Ali Khan",
    company: "BuildTech",
    image: "/aboutus/testimonials.png",
    content:
      "Fast, efficient, and professional. They handled all my paperwork flawlessly. Special thanks to the support team.",
  },
  {
    id: 4,
    name: "Emily Davis",
    company: "DesignHub",
    image: "/aboutus/testimonials.png",
    content:
      "I had a seamless experience. The staff was kind, helpful, and very knowledgeable throughout.",
  },
];

const TestimonialSection = () => {
  const [activeId, setActiveId] = useState(1);

  const handleClick = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white px-4 py-12 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Image row with injected testimonial box */}
        <div className="flex flex-wrap items-start gap-4">
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={testimonial.id}>
              {/* Client Image */}
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  onClick={() => handleClick(testimonial.id)}
                  className={`w-40 h-40 object-cover rounded-md cursor-pointer border-2 transition duration-300 ${
                    activeId === testimonial.id
                      ? "border-blue-500 shadow-md"
                      : "border-transparent"
                  }`}
                />
              </div>

              {/* Testimonial Box injected immediately after clicked image */}
              {activeId === testimonial.id && (
                <div className="w-full md:w-[400px] lg:w-[500px] bg-gray-100 p-4 rounded-md shadow-md">
                  <p className="text-sm italic text-gray-700 mb-2">
                    “ {testimonial.content} ”
                  </p>
                  <h4 className="text-md font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Avatars + Stars */}
          <div className="flex items-center gap-4">
            {/* Avatars */}
            <div className="flex -space-x-2">
              {testimonials.map((user) => (
                <img
                  key={user.id}
                  src={user.image}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt={user.name}
                />
              ))}
            </div>

            {/* Stars */}
            <div className="flex text-yellow-400 text-3xl ml-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          {/* Happy Customers */}
          <p className="text-gray-700 mt-4 md:mt-0">
            <span className="font-semibold">150</span> happy customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
