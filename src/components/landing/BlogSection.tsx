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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      {/* Arrow Button - Fixed Position on Desktop */}
      <button className="hidden md:flex absolute top-32 right-8 lg:right-12 xl:right-16 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all hover:scale-110 z-20">
        <ArrowUpRight className="w-6 h-6 text-gray-900" />
      </button>

      {/* Card Container with left margin, full width on right */}
      <div className="ml-4 md:ml-8 lg:ml-16 bg-white rounded-l-2xl shadow-lg p-8 md:p-12">
        <div className="max-w-7xl">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">{title}</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              {subtitle}
            </h3>
            <p className="text-black text-base max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pr-4">
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
    </section>
  );
}
