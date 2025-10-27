import React from "react";

const BlogContent: React.FC = () => {
  const blogData = {
    tag: "Visa",
    title: "The Impact of Technology on the Visa processing",
    author: "Tracey Wilson",
    date: "August 20, 2022",
    mainImage: "/blog/blogc1.png",
    sections: [
      {
        title: "Research Your Destination",
        content: `Before embarking on your journey, take the time to research your destination. 
        This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. 
        Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.`,
      },
      {
        title: "Plan Your Itinerary",
        content: `While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. 
        Identify the must-see sights and experiences and prioritize them according to your interests and preferences. 
        This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.`,
      },
    ],
    quote:
      "Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.",
    adText: "You can place ads 750x100",
    subSections: [
      {
        title: "Pack Lightly and Smartly",
        content: `Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. 
        Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched.`,
      },
      {
        title: "Stay Safe and Healthy",
        content: `Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. 
        This includes researching vaccinations or medications, staying hydrated, washing your hands, and using sunscreen and insect repellent.`,
      },
      {
        title: "Immerse Yourself in the Local Culture",
        content: `One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. 
        This includes trying local cuisine, attending cultural events and festivals, and interacting with locals.`,
      },
      {
        title: "Capture Memories",
        content: `Finally, don't forget to capture memories of your journey. 
        Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come.`,
      },
    ],
    conclusion: `Traveling is an art form that requires a blend of planning, preparation, and spontaneity. 
    By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. 
    So pack your bags, embrace the adventure, and enjoy the ride.`,
    secondaryImage: "/blog/blogc2.png",
  };

  return (
    <article className="prose prose-neutral max-w-none pt-32">
      {/* Tag */}
      <div className="text-sm font-semibold text-blue-600 uppercase mb-3">
        {blogData.tag}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {blogData.title}
      </h1>

      {/* Author and date */}
      <p className="text-sm text-gray-500 mb-6">
        By {blogData.author} — {blogData.date}
      </p>

      {/* Main Image */}
      <img
        src={blogData.mainImage}
        alt="Blog main"
        className="w-full rounded-lg mb-8"
      />

      {/* Sections */}
      {blogData.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {section.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        </section>
      ))}

      {/* Quote */}
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-8">
        “{blogData.quote}”
      </blockquote>

      {/* Secondary Image */}
      <img
        src={blogData.secondaryImage}
        alt="Traveler"
        className="w-full rounded-lg mb-8"
      />

      {/* Advertisement */}
      <div className="w-full bg-gray-100 border border-gray-200 text-gray-600 text-center py-8 rounded mb-10">
        {blogData.adText}
      </div>

      {/* Sub-sections */}
      {blogData.subSections.map((sub, index) => (
        <section key={index} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {sub.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{sub.content}</p>
        </section>
      ))}

      {/* Conclusion */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">{blogData.conclusion}</p>
      </section>
    </article>
  );
};

export default BlogContent;
