import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const featuredPosts = currentPosts.slice(0, 2);
  const regularPosts = currentPosts.slice(2, 5);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get avatar for regular posts (cycle through available avatars)
  const getAvatar = (index: number) => {
    const avatars = [img6, img7, img8];
    return avatars[index % avatars.length];
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
                to={`/blog-content/${blog.id}`}
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
                        <span>
                          <img src={blog.avatar} alt="" />
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
                to={`/blog-content/${blog.id}`}
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
                        <span>
                          <img src={blog.avatar || getAvatar(index)} alt="" />
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
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
                )
              )}
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
