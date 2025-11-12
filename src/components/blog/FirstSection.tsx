import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import img3 from "/blog/work.png";
import img4 from "/blog/drone.png";
import img5 from "/blog/phone.png";
import img6 from "/landingpage/round2.png";
import img7 from "/landingpage/round22.png";
import img8 from "/landingpage/round33.png";
import { blogPosts } from "@/data/blog";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Helper function to create URL-friendly slug from title
const createSlug = (title: string, id: number) => {
  const slug = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // Trim hyphens
    .substring(0, 80); // Limit to 80 characters
  return `${id}-${slug}`;
};

function FirstSection() {
  const postsPerPage = 5; // 2 featured + 3 regular
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get page from URL params or default to 1
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const initialPage =
    pageFromUrl >= 1 && pageFromUrl <= totalPages ? pageFromUrl : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Sync state when URL params change (e.g., when navigating back from blog content page)
  useEffect(() => {
    const urlPage = parseInt(searchParams.get("page") || "1", 10);
    const validPage = urlPage >= 1 && urlPage <= totalPages ? urlPage : 1;
    if (validPage !== currentPage) {
      setCurrentPage(validPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [searchParams, totalPages, currentPage]);

  // Update URL when page changes (but don't create history entry for internal page changes)
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (newPage > 1) {
      setSearchParams({ page: newPage.toString() }, { replace: false });
    } else {
      setSearchParams({}, { replace: false });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const featuredPosts = currentPosts.slice(0, 2);
  const regularPosts = currentPosts.slice(2, 5);

  const handlePrevious = () => {
    const newPage = Math.max(currentPage - 1, 1);
    handlePageChange(newPage);
  };

  const handleNext = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    handlePageChange(newPage);
  };

  const handlePageClick = (page: number) => {
    handlePageChange(page);
  };

  // Get avatar for regular posts (cycle through available avatars)
  const getAvatar = (index: number) => {
    const avatars = [img6, img7, img8];
    return avatars[index % avatars.length];
  };

  // Calculate visible page numbers (show 5 at a time with ellipsis)
  const getVisiblePages = () => {
    const maxVisiblePages = 5;
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      const startPage =
        Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
      const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

      // Show ellipsis before current range if needed
      if (startPage > 2) {
        pages.push("...");
      }

      // Show current range (but not first or last page as they're always shown)
      for (
        let i = Math.max(2, startPage);
        i <= Math.min(totalPages - 1, endPage);
        i++
      ) {
        pages.push(i);
      }

      // Show ellipsis after current range if needed
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="mt-20 sm:mt-32 lg:mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            All Articles
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
            We share common trends, strategies ideas, opinions, short & long
            stories from the team behind company.
          </p>
        </div>

        {/* Articles Grid - Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {featuredPosts.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${createSlug(blog.title, blog.id)}`}
                className="relative group cursor-pointer transition-transform hover:scale-105 w-full"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg w-full">
                  <div className="aspect-[16/9] w-full relative overflow-hidden">
                    <img
                      src={blog.cardImage}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Featured Tag */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-blue-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs font-semibold uppercase tracking-wide">
                      FEATURED
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-3 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                          <img
                            src={blog.avatar}
                            alt=""
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                          />
                        </span>
                        <span className="text-xs sm:text-sm font-medium truncate">
                          {blog.author}
                        </span>
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs text-gray-300 hidden sm:inline">
                          Verified writer
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom Row - Regular Posts */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {regularPosts.map((blog, index) => (
              <Link
                key={blog.id}
                to={`/blog/${createSlug(blog.title, blog.id)}`}
                className="relative group cursor-pointer transition-transform hover:scale-105 w-full"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg w-full">
                  <div className="aspect-[3/4] w-full relative overflow-hidden">
                    <img
                      src={blog.cardImage}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 leading-tight line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-3 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                          <img
                            src={blog.avatar || getAvatar(index)}
                            alt=""
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                          />
                        </span>
                        <span className="text-xs sm:text-sm font-medium truncate">
                          {blog.author}
                        </span>
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 sm:mt-12 px-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-2 py-2 sm:px-4 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
              {getVisiblePages().map((page, index) => {
                if (typeof page === "string") {
                  // Render ellipsis
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-2 py-2 sm:px-4 text-gray-700 font-medium text-sm sm:text-base"
                    >
                      {page}
                    </span>
                  );
                }
                // Render page number button
                return (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-2 sm:px-4 rounded-lg font-medium transition-colors text-sm sm:text-base min-w-[40px] sm:min-w-[44px] ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-2 py-2 sm:px-4 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FirstSection;
