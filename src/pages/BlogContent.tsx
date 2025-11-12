import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogContent from "@/components/blogcontent/BlogContent";
import RecentBlogs from "@/components/blogcontent/RecentBlogs";
import LandingNavigation from "@/components/landing/LandingNavigation";
import { blogPosts } from "@/data/blog";

// Helper function to create URL-friendly slug from title
const createSlug = (title: string): string => {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // Trim hyphens
    .substring(0, 80); // Limit to 80 characters
};

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

  // Generate slug for the blog post
  const blogSlug = createSlug(blogPost.title);

  // Parse date to ISO format (convert "November 3, 2025" to "2025-11-03")
  const parseDate = (dateStr: string): string => {
    try {
      const date = new Date(dateStr);
      return date.toISOString();
    } catch {
      console.warn(`Unable to parse date: ${dateStr}`);
      return new Date().toISOString(); // Fallback to current date
    }
  };

  const isoDate = parseDate(blogPost.date);

  // Generate keywords from blog tag, title, description, and key topics
  const generateKeywords = (): string => {
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

    // Extract key phrases from description
    const descWords = blogPost.description
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 4)
      .slice(0, 5);

    return [...new Set([...baseKeywords, ...titleWords, ...descWords])].join(
      ", "
    );
  };

  // Get the full URL for canonical and OG tags
  const siteUrl = "https://www.gokitepro.com";
  const currentUrl = `${siteUrl}/blog/${blogId}-${blogSlug}`;
  const imageUrl = blogPost.mainImage?.startsWith("http")
    ? blogPost.mainImage
    : `${siteUrl}${blogPost.mainImage}`;

  // Social media links
  const sameAsLinks = [
    "https://www.facebook.com/gokitepro",
    "https://www.linkedin.com/company/gokitepro",
  ];

  // Article Schema (JSON-LD)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogPost.title,
    image: [imageUrl],
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: blogPost.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Go Kite PRO",
      logo: {
        "@type": "ImageObject",
        url: "https://www.gokitepro.com/wp-content/uploads/2025/03/gokitepro-logo.png",
      },
      sameAs: sameAsLinks,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
    description: blogPost.description,
    keywords: generateKeywords(),
  };

  // Breadcrumb Schema (JSON-LD)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blogPost.title,
        item: currentUrl,
      },
    ],
  };

  // Detect if content has FAQ sections
  const hasFAQ = blogPost.sections?.some(
    (section) =>
      section.title.toLowerCase().includes("faq") ||
      section.title.toLowerCase().includes("frequently asked") ||
      section.title.toLowerCase().includes("questions")
  );

  // Detect if content has How-To/Step sections
  const hasHowTo = blogPost.sections?.some(
    (section) =>
      section.title.toLowerCase().includes("how to") ||
      section.title.toLowerCase().includes("step") ||
      section.content.toLowerCase().includes("step 1:")
  );

  // FAQ Schema (conditional)
  const faqSchema = hasFAQ
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blogPost.sections
          ?.filter(
            (section) =>
              section.title.toLowerCase().includes("faq") ||
              section.title.toLowerCase().includes("question")
          )
          .map((section) => ({
            "@type": "Question",
            name: section.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: section.content.substring(0, 500),
            },
          })),
      }
    : null;

  // HowTo Schema (conditional)
  const howToSchema = hasHowTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: blogPost.title,
        description: blogPost.description,
        image: imageUrl,
        step: blogPost.sections
          ?.filter(
            (section) =>
              section.title.toLowerCase().includes("step") ||
              section.content.toLowerCase().includes("step ")
          )
          .map((section, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: section.title,
            text: section.content.substring(0, 300),
          })),
      }
    : null;

  // Check if blog is Dubai/UAE specific
  const isDubaiSpecific =
    blogPost.title.toLowerCase().includes("dubai") ||
    blogPost.title.toLowerCase().includes("uae") ||
    blogPost.description.toLowerCase().includes("dubai");

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{blogPost.title} | Go Kite PRO Blog</title>
        <meta name="title" content={`${blogPost.title} | Go Kite PRO Blog`} />
        <meta name="description" content={blogPost.description} />
        <meta name="keywords" content={generateKeywords()} />
        <meta name="author" content={blogPost.author} />
        <meta name="publish-date" content={isoDate} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:title"
          content={`${blogPost.title} | Go Kite PRO Blog`}
        />
        <meta property="og:description" content={blogPost.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Go Kite PRO" />
        <meta property="article:published_time" content={isoDate} />
        <meta property="article:modified_time" content={isoDate} />
        <meta property="article:author" content={blogPost.author} />
        <meta property="article:tag" content={generateKeywords()} />

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

        {/* Alternate/hreflang */}
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />
        <link rel="alternate" href={currentUrl} hrefLang="en" />

        {/* Robots & Additional SEO */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Geo Meta (for Dubai-specific content) */}
        {isDubaiSpecific && (
          <>
            <meta name="geo.region" content="AE-DU" />
            <meta name="geo.placename" content="Dubai" />
            <meta name="geo.position" content="25.2048;55.2708" />
            <meta name="ICBM" content="25.2048, 55.2708" />
          </>
        )}

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
        {howToSchema && (
          <script type="application/ld+json">
            {JSON.stringify(howToSchema)}
          </script>
        )}
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
