import React from "react";
import { useParams } from "react-router-dom";
import BlogContent from "@/components/blogcontent/BlogContent";
import RecentBlogs from "@/components/blogcontent/RecentBlogs";
import LandingNavigation from "@/components/landing/LandingNavigation";
import { blogPosts } from "@/data/blog";

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Extract ID from slug (format: "id-title-slug")
  const extractIdFromSlug = (slug: string | undefined): number | null => {
    if (!slug) return null;
    const match = slug.match(/^(\d+)-/);
    return match ? Number(match[1]) : null;
  };

  const blogId = extractIdFromSlug(slug);
  const blogPost = blogPosts.find((post) => post.id === blogId);

  if (!blogPost) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-10">
        <LandingNavigation />
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <LandingNavigation />
      <BlogContent blogData={blogPost} />
      <RecentBlogs />
    </main>
  );
};

export default BlogPage;
