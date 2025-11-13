import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <>
        <Helmet>
          <title>Blog Post Not Found | Go Kite PRO</title>
          <meta
            name="description"
            content="The requested blog post could not be found."
          />
        </Helmet>
        <main className="max-w-7xl mx-auto px-4 py-10">
          <LandingNavigation />
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold">Blog post not found</h1>
          </div>
        </main>
      </>
    );
  }

  // Generate keywords from blog tag, title, and key topics
  const generateKeywords = () => {
    const baseKeywords = [
      blogPost.tag,
      "Dubai business setup",
      "UAE company formation",
      "Go Kite PRO",
    ];

    // Extract key phrases from title
    const titleWords = blogPost.title
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 3);

    return [...baseKeywords, ...titleWords].join(", ");
  };

  // Get the full URL for canonical and OG tags
  const currentUrl = window.location.href;
  const siteUrl = window.location.origin;
  const imageUrl = blogPost.mainImage?.startsWith("http")
    ? blogPost.mainImage
    : `${siteUrl}${blogPost.mainImage}`;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{blogPost.title} | Go Kite PRO Blog</title>
        <meta name="title" content={`${blogPost.title} | Go Kite PRO Blog`} />
        <meta name="description" content={blogPost.description} />
        <meta name="keywords" content={generateKeywords()} />
        <meta name="author" content={blogPost.author} />
        <meta name="publish-date" content={blogPost.date} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:title"
          content={`${blogPost.title} | Go Kite PRO Blog`}
        />
        <meta property="og:description" content={blogPost.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Go Kite PRO" />
        <meta property="article:published_time" content={blogPost.date} />
        <meta property="article:author" content={blogPost.author} />
        <meta property="article:tag" content={blogPost.tag} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta
          name="twitter:title"
          content={`${blogPost.title} | Go Kite PRO Blog`}
        />
        <meta name="twitter:description" content={blogPost.description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <LandingNavigation />
        <BlogContent blogData={blogPost} />
        <RecentBlogs />
      </main>
    </>
  );
};

export default BlogPage;
