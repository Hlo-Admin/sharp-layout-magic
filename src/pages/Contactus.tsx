import React from "react";
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

                <form className="space-y-10">
                  <div className="grid md:grid-cols-3 gap-6">
                    {contactData.hero.fields.map((field, i) => (
                      <div key={i}>
                        <label className="block text-gray-600 mb-2 text-sm font-medium">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required={field.required}
                          className="w-full border-b border-gray-500 focus:border-gray-800 focus:outline-none py-2 text-gray-700"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-gray-600 mb-2 text-sm font-medium">
                      {contactData.hero.messageLabel}
                    </label>
                    <textarea
                      required
                      className="w-full border-b border-gray-300 focus:border-gray-800 focus:outline-none py-2 text-gray-700 h-28 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center bg-sky-700 text-white px-6 py-3 rounded-full hover:bg-sky-800 transition font-medium"
                  >
                    {contactData.hero.buttonText}
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
            <form className="md:w-1/2 flex flex-col sm:flex-row justify-center md:justify-end">
              <input
                type="email"
                placeholder={contactData.newsletter.placeholder}
                required
                className="flex-1 px-4 py-2 rounded-md bg-[#33A0C4] placeholder-white text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-sky-700 font-medium px-6 py-2 rounded-md hover:bg-sky-100 transition"
              >
                {contactData.newsletter.button}
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
