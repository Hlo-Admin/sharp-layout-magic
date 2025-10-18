import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface BlogSectionProps {
  title: string;
  subtitle: string;
  description: string;
  blogPosts: BlogPost[];
}

export default function DubaiEconomyBlog({
  title,
  subtitle,
  description,
  blogPosts,
}: BlogSectionProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      {/* Header Section - Full Width Container */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl text-gray-900 mb-4">{title}</h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-6">{subtitle}</h3>
        <p className="text-black text-base max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Blog Cards Grid - Separate Width Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Arrow Button - Top Right Corner */}
        <button className="absolute top-0 right-8 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10">
          <ArrowUpRight className="w-6 h-6 text-gray-900" />
        </button>

        <div className="max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
