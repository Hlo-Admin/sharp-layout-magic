import React from "react";
import Mail from "/blog/mail.png";

const Sidebar: React.FC = () => {
  return (
    <aside className="sticky top-4 lg:top-6 h-fit bg-white shadow-sm border border-gray-100 rounded-md p-6 flex flex-col items-center">
      {/* Icon */}
      <img src={Mail} alt="Mail Icon" className="w-12 h-12 mb-4" />

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">
        Do you have more questions?
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        End-to-end payments and financial management in a single solution. Meet
        the right platform to help realize.
      </p>

      {/* Button */}
      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2.5 rounded transition-colors">
        Shoot a Direct Mail
      </button>
    </aside>
  );
};

export default Sidebar;
