import React from "react";
import BlogContent from "@/components/blogcontent/BlogContent";
import RecentBlogs from "@/components/blogcontent/RecentBlogs";
import LandingNavigation from "@/components/landing/LandingNavigation";


const BlogPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <LandingNavigation />
      <BlogContent />
      <RecentBlogs />
    </main>
  );
};

export default BlogPage;
