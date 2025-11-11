import React, { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import LandingNavigation from "@/components/landing/LandingNavigation";
import Footer from "@/components/common/Footer";

const contactData = {
  hero: {
    subtitle: "Get Started",
    heading: "Get in touch with us.",
    subheading: "We're here to assist you.",
    fields: [
      { label: "Your Name", type: "text", required: true },
      { label: "Email Address", type: "email", required: true },
      { label: "Phone Number (optional)", type: "tel", required: false },
    ],
    messageLabel: "Message",
    buttonText: "Leave us a Message →",
    socials: ["facebook", "instagram", "twitter"],
  },
  contactInfo: {
    title: "Contact Info",
    heading: "We are always happy to assist you",
    columns: [
      {
        email: "info@gokitepro.com",
        hours: "Assistance hours:\nMonday - Friday 6 am to 8 pm EST",
      },
      {
        mobile: "+971 50 357 8847",
        landline: "04 232 4514",
        hours: "Assistance hours:\nMonday - Friday 6 am to 8 pm EST",
      },
    ],
  },
  newsletter: {
    title: "Subscribe to our Newsletter",
    description:
      "Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.",
    placeholder: "Enter your email",
    button: "Subscribe",
  },
};

const ContactUs: React.FC = () => {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Newsletter Form State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbz6BS0fIvfePFIHF7fymPEJqKIgx-GONz1zApGbZ9qTcJVxW-3OscYPDm-jHYwwkrx9Hg/exec";

  // Handle Contact Form Input Change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Contact Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Create form data to match the Apps Script's e.parameter structure
      const formDataToSend = new URLSearchParams();
      formDataToSend.append("formType", "contact"); // Identify this as contact form
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append("message", formData.message);
      // timestamp will be automatically added by the Apps Script

      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.result === "success") {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Sorry, something went wrong. Please try again.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Newsletter Form Submit
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);
    setNewsletterStatus({ type: null, message: "" });

    try {
      // Create form data for newsletter
      const formDataToSend = new URLSearchParams();
      formDataToSend.append("formType", "newsletter"); // Identify this as newsletter form
      formDataToSend.append("email", newsletterEmail);
      // timestamp will be automatically added by the Apps Script

      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.result === "success") {
        setNewsletterStatus({
          type: "success",
          message: "Successfully subscribed to our newsletter!",
        });
        setNewsletterEmail("");
      } else {
        throw new Error(result.error || "Subscription failed");
      }
    } catch (error) {
      setNewsletterStatus({
        type: "error",
        message: "Failed to subscribe. Please try again.",
      });
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <>
      <LandingNavigation />
      <div className="flex flex-col items-center w-full text-gray-800">
        {/* Hero / Form Section */}
        <section className="w-full bg-gray-100 py-20 px-6 md:px-8">
          <div className="max-w-8xl mx-auto bg-white shadow-md rounded-xl px-8 md:px-12 py-16">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Left - Form */}
              <div className="md:col-span-2">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
                  {contactData.hero.subtitle}
                </p>
                <h1 className="text-5xl font-bold mb-1 leading-tight">
                  {contactData.hero.heading}
                </h1>
                <h2 className="text-5xl font-bold mb-12 text-gray-900 leading-tight">
                  {contactData.hero.subheading}
                </h2>

                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2 text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full border-b border-gray-500 focus:border-gray-800 focus:outline-none py-2 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2 text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border-b border-gray-500 focus:border-gray-800 focus:outline-none py-2 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2 text-sm font-medium">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-500 focus:border-gray-800 focus:outline-none py-2 text-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 mb-2 text-sm font-medium">
                      {contactData.hero.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full border-b border-gray-300 focus:border-gray-800 focus:outline-none py-2 text-gray-700 h-28 resize-none"
                    ></textarea>
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-md ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-sky-700 text-white px-6 py-3 rounded-full hover:bg-sky-800 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : contactData.hero.buttonText}
                  </button>
                </form>
              </div>

              {/* Right - Social Icons */}
              <div className="flex md:flex-col justify-start items-center md:items-end mt-10 md:mt-0 space-x-6 md:space-x-0 md:space-y-6">
                {contactData.hero.socials.map((social, index) => {
                  const Icon =
                    social === "facebook"
                      ? Facebook
                      : social === "instagram"
                      ? Instagram
                      : Twitter;
                  return (
                    <div
                      key={index}
                      className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-gray-100 transition cursor-pointer"
                      aria-label={social}
                    >
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="w-full bg-gray-100 border-t border-gray-200 pt-16 pb-16 px-6 md:px-8">
          <div className="max-w-8xl mx-auto">
            <p className="text-gray-500 uppercase tracking-wider text-sm mb-2">
              {contactData.contactInfo.title}
            </p>
            <h2 className="text-3xl font-semibold mb-10">
              {contactData.contactInfo.heading}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="font-medium mb-1">
                  {contactData.contactInfo.columns[0].email}
                </p>
                <p className="text-gray-500 whitespace-pre-line">
                  {contactData.contactInfo.columns[0].hours}
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">
                  Mobile: {contactData.contactInfo.columns[1].mobile}
                </p>
                <p className="font-medium mb-1">
                  Landline: {contactData.contactInfo.columns[1].landline}
                </p>
                <p className="text-gray-500 whitespace-pre-line">
                  {contactData.contactInfo.columns[1].hours}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full bg-[#3790AE] py-14 px-6 md:px-12 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            {/* Left - Text content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-3">
                {contactData.newsletter.title}
              </h2>
              <p className="text-sky-100">
                {contactData.newsletter.description}
              </p>
            </div>

            {/* Right - Form */}
            <div className="md:w-1/2 flex flex-col justify-center md:justify-end">
              <form
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder={contactData.newsletter.placeholder}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 rounded-md bg-[#33A0C4] placeholder-white text-white focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isNewsletterSubmitting}
                  className="bg-white text-sky-700 font-medium px-6 py-2 rounded-md hover:bg-sky-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isNewsletterSubmitting
                    ? "Subscribing..."
                    : contactData.newsletter.button}
                </button>
              </form>
              {newsletterStatus.type && (
                <div
                  className={`mt-3 p-3 rounded-md text-sm ${
                    newsletterStatus.type === "success"
                      ? "bg-white/20 text-white"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {newsletterStatus.message}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
