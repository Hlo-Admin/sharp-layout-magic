// src/components/ZohoPopup.tsx
import React, { useEffect, useState } from "react";
import ZohoScripts from "./ZohoScripts";

let openPopupCallback: (() => void) | null = null;

export const openZohoPopup = () => {
  openPopupCallback && openPopupCallback();
};

const ZohoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    openPopupCallback = () => setIsOpen(true);
    return () => {
      openPopupCallback = null;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://crm.zoho.com/crm/WebToLeadForm",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setIsOpen(false);
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  if (!isOpen) return null;

  const handleOverlayClick = () => setIsOpen(false);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling to overlay
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]"
      onClick={handleOverlayClick} // closes popup when clicking outside
    >
      <ZohoScripts />

      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative p-6"
        onClick={handleContentClick} // prevents overlay click closing
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6">Get Quote</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Hidden Zoho fields */}
          <input
            type="hidden"
            name="xnQsjsdp"
            value="8a9865ea623d811c01fce1d97af269f2f1d885fbd6428d83060be29a195615a1"
          />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="returnURL" value="null" />

          {/* Name */}
          <div>
            <label htmlFor="Last_Name" className="block text-sm font-medium">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Last Name"
              id="Last_Name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="Company" className="block text-sm font-medium">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Company"
              id="Company"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="Email" className="block text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Mobile */}
          <div>
            <label htmlFor="Mobile" className="block text-sm font-medium">
              Mobile
            </label>
            <input
              type="text"
              name="Mobile"
              id="Mobile"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Service Required */}
          <div>
            <label htmlFor="LEADCF3" className="block text-sm font-medium">
              Service Required <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="LEADCF3"
              id="LEADCF3"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="Description" className="block text-sm font-medium">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="Description"
              id="Description"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ZohoPopup;
