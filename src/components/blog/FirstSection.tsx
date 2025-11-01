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
    <div className="mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 ">
            All Articles
          </h2>
          <br />
          <br />

          <p className="text-gray-600  ">
            We share common trends, strategies ideas, opinions, short & long
            stories from the
            <br /> team behind company.
          </p>
          <br />
          <br />
        </div>

        {/* Articles Grid - Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {featuredPosts.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog-content/${blog.id}?page=${currentPage}`}
                className="relative group cursor-pointer transition-transform hover:scale-105"
              >
                <div className="relative h-100 rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-[16/9] w-full">
                    <img
                      src={blog.cardImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Featured Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      FEATURED
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8">
                          <img
                            src={blog.avatar}
                            alt=""
                            className="w-8 h-8 rounded-full "
                          />
                        </span>
                        <span className="text-sm font-medium">
                          {blog.author}
                        </span>
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs text-gray-300">
                          Verified writer
                        </span>
                      </div>
                      <span className="text-sm">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom Row - Regular Posts */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {regularPosts.map((blog, index) => (
              <Link
                key={blog.id}
                to={`/blog-content/${blog.id}?page=${currentPage}`}
                className="relative group cursor-pointer transition-transform hover:scale-105"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-[3/4] w-full">
                    <img
                      src={blog.cardImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8">
                          <img
                            src={blog.avatar || getAvatar(index)}
                            alt=""
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        </span>
                        <span className="text-sm font-medium">
                          {blog.author}
                        </span>
                        <svg
                          className="w-4 h-4 text-green-400"
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
                      <span className="text-sm">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {getVisiblePages().map((page, index) => {
                if (typeof page === "string") {
                  // Render ellipsis
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-4 py-2 text-gray-700 font-medium"
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
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
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
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FirstSection;
