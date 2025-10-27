import React from "react";

const RecentBlogs: React.FC = () => {
  const recentBlogs = [
    {
      id: 1,
      date: "October 19, 2022",
      author: "By admin",
      title: "The Impact of Technology on the Visa processing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/blog/blogr1.png",
    },
    {
      id: 2,
      date: "October 19, 2022",
      author: "By admin",
      title: "Search of Serenity Tranquil Retreats and Escapes",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/blog/blogr2.png",
    },
    {
      id: 3,
      date: "October 19, 2022",
      author: "By admin",
      title: "Road to Adventure Embarking on New Horizons",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/blog/blogr3.png",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 uppercase tracking-wide">
        Recent Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
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
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;
