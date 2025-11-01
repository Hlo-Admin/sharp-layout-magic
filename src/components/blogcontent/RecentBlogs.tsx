import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

// Helper function to create URL-friendly slug from title
const createSlug = (title: string, id: number) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${id}-${slug}`;
};

const RecentBlogs: React.FC = () => {
  // Get 3 random blog posts
  const recentBlogs = useMemo(() => {
    const shuffled = [...blogPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3).map((post) => ({
      id: post.id,
      date: post.date,
      author: post.author,
      title: post.title,
      description: post.description,
      image: post.cardImage || post.mainImage,
    }));
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 uppercase tracking-wide">
        Recent Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${createSlug(blog.title, blog.id)}`}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">
                {blog.date} • {blog.author}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{blog.description}</p>
              <span className="text-blue-600 text-sm font-medium hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;
