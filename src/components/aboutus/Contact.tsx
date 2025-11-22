import React, { useEffect, useState } from "react";
import { ArrowRight, Linkedin, Facebook, Instagram } from "lucide-react";

import { openZohoPopup } from "../common/ZohoCrm";
// Button import removed as it's not used

const HeroFooterSection = () => {
  const labels = ["Business", "Real Estate", "Project", "Paperwork"];
  const [labelIndex, setLabelIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLabelIndex((prev) => (prev + 1) % labels.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
      <h2 className="text-3xl sm:text-4xl font-bold text-[#3790AE] mb-8 transition-opacity duration-300">
        {labels[labelIndex]}
      </h2>

      {/* CTA Button */}
      <div className="flex justify-center mb-16">
        <button
          onClick={() => openZohoPopup()}
          className="relative bg-[#F0BA1A] text-black font-semibold text-lg py-3 px-6 rounded-full flex items-center gap-4 shadow-lg hover:scale-105 transition"
        >
          Let's Talk!
          <span className="w-8 h-8 rounded-full bg-white border-2 border-[#F0BA1A] flex items-center justify-center text-black">
            <ArrowRight className="w-4 h-4 rounded-full text-black" />
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
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/people/Go-Kite-PRO/61578056361465/"
              target="_blank"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/go-kite-pro/"
              target="_blank"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/gokitepro/"
              target="_blank"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
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
      {/* <div className="mt-10 text-xs text-gray-500">
        © Copyright 2026 - Gokite Pro
      </div> */}
    </section>
  );
};

export default HeroFooterSection;
