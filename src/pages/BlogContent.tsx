import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogContent from "@/components/blogcontent/BlogContent";
import RecentBlogs from "@/components/blogcontent/RecentBlogs";
import LandingNavigation from "@/components/landing/LandingNavigation";
import Footer from "@/components/common/Footer";
import YellowTopNav from "@/components/common/YellowTopNav";
import { blogPosts } from "@/data/blog";

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find blog post by slug - strip any number prefix and match by slug content only
  const blogPost = blogPosts.find((post) => {
    if (!slug || !post.slug) return false;

    // Remove any leading number prefix (format: "id-slug" or just "slug")
    const slugWithoutPrefix = slug.replace(/^\d+-/, "");

    // Match by slug property directly (exact match)
    return post.slug === slugWithoutPrefix;
  });

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
        <div className="min-h-screen">
          <YellowTopNav />
          <div className="relative pt-2">
            <LandingNavigation />
          </div>
          <main className="max-w-7xl mx-auto px-4 py-10">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold">Blog post not found</h1>
            </div>
          </main>
        </div>
      </>
    );
  }

  // Get keywords - use blogPost.keywords if available, otherwise generate
  const getKeywords = () => {
    if ((blogPost as any).keywords) {
      return (blogPost as any).keywords;
    }
    // Fallback to generated keywords
    const baseKeywords = [
      blogPost.tag,
      "Dubai business setup",
      "UAE company formation",
      "Go Kite PRO",
    ];
    const titleWords = blogPost.title
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 3);
    return [...baseKeywords, ...titleWords].join(", ");
  };

  // Get OG description - use blogPost.ogDescription if available, otherwise use description
  const getOgDescription = () => {
    if ((blogPost as any).ogDescription) {
      return (blogPost as any).ogDescription;
    }
    return blogPost.description;
  };

  // Get Twitter description - use blogPost.twitterDescription if available, otherwise use description
  const getTwitterDescription = () => {
    if ((blogPost as any).twitterDescription) {
      return (blogPost as any).twitterDescription;
    }
    return blogPost.description;
  };

  // Get article tags - use blogPost.articleTags if available, otherwise use tag
  const getArticleTags = () => {
    if ((blogPost as any).articleTags) {
      return (blogPost as any).articleTags;
    }
    return blogPost.tag;
  };

  // Get the full URL for canonical and OG tags
  const currentUrl = window.location.href;
  const siteUrl = window.location.origin;
  const imageUrl = blogPost.mainImage?.startsWith("http")
    ? blogPost.mainImage
    : `${siteUrl}${blogPost.mainImage}`;
  const publishedDate = new Date(blogPost.date);
  const datePublishedIso = isNaN(publishedDate.getTime())
    ? blogPost.date
    : publishedDate.toISOString();

  // Function to replace placeholders in schema objects
  const replaceSchemaPlaceholders = (schemaObj: any): any => {
    if (typeof schemaObj === "string") {
      return schemaObj
        .replace(/\{\{title\}\}/g, blogPost.title)
        .replace(/\{\{currentUrl\}\}/g, currentUrl)
        .replace(/\{\{imageUrl\}\}/g, imageUrl)
        .replace(/\{\{datePublished\}\}/g, datePublishedIso)
        .replace(/\{\{author\}\}/g, blogPost.author);
    }
    if (Array.isArray(schemaObj)) {
      return schemaObj.map((item) => replaceSchemaPlaceholders(item));
    }
    if (schemaObj && typeof schemaObj === "object") {
      const result: any = {};
      for (const key in schemaObj) {
        result[key] = replaceSchemaPlaceholders(schemaObj[key]);
      }
      return result;
    }
    return schemaObj;
  };

  // Get schemas from blog post if available
  const blogSchemas = blogPost.schema
    ? {
        faqSchema: blogPost.schema.faqSchema
          ? replaceSchemaPlaceholders(blogPost.schema.faqSchema)
          : null,
        breadcrumbSchema: blogPost.schema.breadcrumbSchema
          ? replaceSchemaPlaceholders(blogPost.schema.breadcrumbSchema)
          : null,
        articleSchema: blogPost.schema.articleSchema
          ? replaceSchemaPlaceholders(blogPost.schema.articleSchema)
          : null,
        howToSchema: blogPost.schema.howToSchema
          ? replaceSchemaPlaceholders(blogPost.schema.howToSchema)
          : null,
      }
    : null;

  return (
    <>
      <Helmet>
        {/* ---------- SEO META ---------- */}
        <title>{`${blogPost.title} | Go Kite PRO Blog`}</title>
        <meta name="title" content={`${blogPost.title} | Go Kite PRO Blog`} />
        <meta name="description" content={blogPost.description} />
        <meta name="keywords" content={getKeywords()} />
        <meta name="author" content={blogPost.author} />
        <meta name="publish-date" content={blogPost.date} />
        <meta property="article:modified_time" content={blogPost.date} />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" href={currentUrl} hrefLang="en-ae" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta
          property="og:title"
          content={`${blogPost.title} | Go Kite PRO Blog`}
        />
        <meta property="og:description" content={getOgDescription()} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Go Kite PRO" />
        <meta property="article:published_time" content={blogPost.date} />
        <meta property="article:author" content={blogPost.author} />
        <meta property="article:tag" content={getArticleTags()} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta
          name="twitter:title"
          content={`${blogPost.title} | Go Kite PRO Blog`}
        />
        <meta name="twitter:description" content={getTwitterDescription()} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Additional SEO */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="language" content="English" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="revisit-after" content="7 days" />

        {/* ---------- SCHEMAS ---------- */}
        {blogSchemas?.howToSchema && (
          <script type="application/ld+json">
            {JSON.stringify(blogSchemas.howToSchema)}
          </script>
        )}
        {blogSchemas?.faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(blogSchemas.faqSchema)}
          </script>
        )}
        {blogSchemas?.breadcrumbSchema && (
          <script type="application/ld+json">
            {JSON.stringify(blogSchemas.breadcrumbSchema)}
          </script>
        )}
        {blogSchemas?.articleSchema && (
          <script type="application/ld+json">
            {JSON.stringify(blogSchemas.articleSchema)}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen">
        <YellowTopNav />
        <div className="relative pt-2">
          <LandingNavigation />
        </div>
        <main className="max-w-7xl mx-auto px-4 py-10">
          <BlogContent blogData={blogPost} />
          <RecentBlogs />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
