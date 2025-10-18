import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { openZohoPopup } from "../common/ZohoCrm";
import { Button } from "react-day-picker";

const HeroFooterSection = () => {
  return (
    <section className="bg-white text-center pt-16 pb-4 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6">
        Make Everything Possible
      </h1>

      {/* Capsule Button */}
      <div className="inline-block bg-white border border-gray-200 rounded-full py-4 px-8 text-xl font-semibold text-black shadow-sm mb-4">
        Want to start in UAE
      </div>

      {/* Subheading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#3790AE] mb-8">
        Business
      </h2>

      {/* CTA Button */}
      <div className="flex justify-center mb-16">
        <button
          onClick={() => openZohoPopup()}
          className="relative bg-[#F0BA1A] text-black font-semibold text-lg py-3 px-6 rounded-full flex items-center gap-4 shadow-lg hover:scale-105 transition"
        >
          Let's Talk!
          <span className="w-8 h-8 rounded-full bg-white border-2 border-[#F0BA1A] flex items-center justify-center text-black">
            <ArrowRight className="w-4 h-4 bg-black rounded-sm text-white" />
          </span>
        </button>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-800 max-w-5xl mx-auto items-center">
        {/* Left Column - Email */}
        <div className="text-center md:text-left">
          <h4 className="font-medium mb-1">Official Mail</h4>
          <a href="mailto:info@gokitepro.com" className="underline">
            info@gokitepro.com
          </a>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h4 className="font-medium mb-1">Social Media</h4>
          <div className="flex gap-4">
            <a href="#">twitter</a>
            <a href="#">dribbble</a>
            <a href="#">linkedin</a>
          </div>
        </div>

        {/* Portfolio */}
        <div className="text-center md:text-left">
          <h4 className="font-medium mb-1">Our Portfolio</h4>
          <a href="#" className="hover:underline">
            Case Study, Our Works →
          </a>
        </div>

        {/* CTA Black Button */}
        <div className="text-center md:text-right w-80">
          <button
            onClick={() => openZohoPopup()}
            className="inline-flex items-center bg-black text-white px-5 py-3 rounded-xl font-medium hover:bg-gray-900"
          >
            Get Quote for your business Setup{" "}
            <span className="ml-2 text-yellow-400">↗</span>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-xs text-gray-500">
        © Copyright 2026 - Gokite Pro
      </div>
    </section>
  );
};

export default HeroFooterSection;
