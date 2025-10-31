import React from "react";
import { useParams } from "react-router-dom";
import BlogContent from "@/components/blogcontent/BlogContent";
import RecentBlogs from "@/components/blogcontent/RecentBlogs";
import LandingNavigation from "@/components/landing/LandingNavigation";
import { blogPosts } from "@/data/blog";

const BlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogPost = blogPosts.find((post) => post.id === Number(id));

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
