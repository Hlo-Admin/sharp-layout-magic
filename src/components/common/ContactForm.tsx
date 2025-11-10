import React, { useState, useEffect } from "react";
import { MessageCircle, X, Minimize2 } from "lucide-react";

// Extend window interface for Zoho form functions
declare global {
  interface Window {
    checkMandatory6925095000000684092?: () => boolean;
    validateEmail6925095000000684092?: () => boolean;
  }
}

const ContactForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset submitted state when form closes
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Load Zoho analytics script and setup validation functions when form opens
  useEffect(() => {
    if (isOpen) {
      // Load analytics script
      const script = document.createElement("script");
      script.id = "wf_anal";
      script.src =
        "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=22c300072c308785edac1fb6440f4685ff25cc3032a947b488e8248767737e828a2a6fc08b61a10fbdc163a75a3f7ba6gid3e096d1e3826aec627497eaf4f8588e887abb384c20e655fb98210525e8e5f8egid04845a7b49b6da94e8cc3ba800838de9ae1041e16a4ba9f10338a7f610cf173cgid9aa33048b4c73d92b137adefcf8110cb313533376aa755f7aec926faa0a91a92&tw=78cfc503226719a89e2027fcc295ff057a370e48a7b55fbecc6cdb0817018cdf";
      script.async = true;
      document.head.appendChild(script);

      // Setup validation functions
      window.validateEmail6925095000000684092 = function () {
        const form = document.forms[
          "WebToLeads6925095000000684092"
        ] as HTMLFormElement;
        const emailFld = form.querySelectorAll(
          "[type=email]"
        ) as NodeListOf<HTMLInputElement>;
        for (let i = 0; i < emailFld.length; i++) {
          const emailVal = emailFld[i].value;
          if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
            const atpos = emailVal.indexOf("@");
            const dotpos = emailVal.lastIndexOf(".");
            if (
              atpos < 1 ||
              dotpos < atpos + 2 ||
              dotpos + 2 >= emailVal.length
            ) {
              alert("Please enter a valid email address.");
              emailFld[i].focus();
              return false;
            }
          }
        }
        return true;
      };

      window.checkMandatory6925095000000684092 = function () {
        const mndFileds = [
          "Company",
          "Last Name",
          "Email",
          "Description",
          "LEADCF3",
        ];
        const fldLangVal = [
          "Company",
          "Your Name",
          "Email",
          "Your Message",
          "Service Required",
        ];
        const form = document.forms[
          "WebToLeads6925095000000684092"
        ] as HTMLFormElement;

        for (let i = 0; i < mndFileds.length; i++) {
          const fieldObj = form[mndFileds[i]] as HTMLInputElement;
          if (fieldObj) {
            if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
              alert(fldLangVal[i] + " cannot be empty.");
              fieldObj.focus();
              return false;
            }
          }
        }
        if (!window.validateEmail6925095000000684092?.()) {
          return false;
        }
        const submitBtn = document.querySelector(
          ".contact-form-container .form-submit"
        ) as HTMLButtonElement;
        if (submitBtn) {
          submitBtn.setAttribute("disabled", "true");
        }
        return true;
      };

      return () => {
        const existingScript = document.getElementById("wf_anal");
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
        // Cleanup validation functions
        delete window.validateEmail6925095000000684092;
        delete window.checkMandatory6925095000000684092;
      };
    }
  }, [isOpen]);

  return (
    <>
      {/* Contact Form Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{ backgroundColor: "#60d9fb" }}
          className="fixed bottom-6 right-6 z-50 hover:opacity-90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Open contact form"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Contact Form Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300">
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(90deg, #60d9fb 0%, #4facfe 100%)",
            }}
            className="text-white p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Contact Us</h3>
                <p className="text-xs opacity-90">Let's discuss your needs</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded"
                aria-label="Minimize form"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Form Content */}
          {!isMinimized && (
            <div className="max-h-96 overflow-y-auto">
              <div
                id="crmWebToEntityForm"
                className="zcwf_lblLeft crmWebToEntityForm"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  maxWidth: "800px",
                  padding: "20px",
                }}
              >
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
                <meta
                  httpEquiv="content-type"
                  content="text/html;charset=UTF-8"
                />
                <form
                  id="webform6925095000000684092"
                  action="https://crm.zoho.com/crm/WebToLeadForm"
                  name="WebToLeads6925095000000684092"
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault();

                    try {
                      // Validate form
                      if (!window.checkMandatory6925095000000684092?.()) {
                        return false;
                      }

                      setIsSubmitting(true);

                      // Collect form data
                      const form = e.currentTarget;
                      const formData = new FormData(form);

                      // Submit to Zoho
                      await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
                        method: "POST",
                        body: formData,
                        mode: "no-cors", // Zoho doesn't return CORS headers
                      });

                      // Show success message
                      setIsSubmitted(true);
                      setIsSubmitting(false);

                      // Reset form
                      form.reset();

                      console.log("Form submitted successfully");
                    } catch (error) {
                      console.error("Form submission error:", error);
                      setIsSubmitting(false);
                      alert(
                        "There was an error submitting the form. Please try again."
                      );
                    }
                  }}
                  acceptCharset="UTF-8"
                >
                  {/* Hidden Fields */}
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xnQsjsdp"
                    value="8a9865ea623d811c01fce1d97af269f2f1d885fbd6428d83060be29a195615a1"
                  />
                  <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xmIwtLD"
                    value="b7005e491d8f5015c25f287483774a3b4d99d7a4105c2600e038f76f5bacc815c43047c61a6067d8069edf8244a55a0d"
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="actionType"
                    value="TGVhZHM="
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="returnURL"
                    value="null"
                  />

                  <style>{`
                    .contact-form-container {
                      font-family: Arial, sans-serif;
                    }
                    .contact-form-container .form-title {
                      font-size: 16px;
                      font-weight: bold;
                      margin-bottom: 15px;
                      color: #333;
                    }
                    .contact-form-container .form-row {
                      margin-bottom: 12px;
                    }
                    .contact-form-container .form-label {
                      display: block;
                      font-size: 12px;
                      font-weight: 500;
                      margin-bottom: 4px;
                      color: #333;
                    }
                    .contact-form-container .form-input {
                      width: 100%;
                      padding: 8px 10px;
                      border: 1px solid #c0c6cc;
                      border-radius: 4px;
                      font-size: 12px;
                      box-sizing: border-box;
                    }
                    .contact-form-container .form-textarea {
                      width: 100%;
                      padding: 8px 10px;
                      border: 1px solid #c0c6cc;
                      border-radius: 4px;
                      font-size: 12px;
                      min-height: 60px;
                      resize: vertical;
                      box-sizing: border-box;
                      font-family: Arial, sans-serif;
                    }
                    .contact-form-container .form-submit {
                      background: #60d9fb !important;
                      color: white !important;
                      border: none;
                      padding: 8px 20px;
                      border-radius: 4px;
                      cursor: pointer;
                      font-size: 12px;
                      margin-right: 8px;
                      transition: all 0.2s;
                    }
                    .contact-form-container .form-submit:hover:not(:disabled) {
                      background: #4fc3e7 !important;
                    }
                    .contact-form-container .form-submit:disabled {
                      background: #9ca3af !important;
                      cursor: not-allowed;
                      opacity: 0.6;
                    }
                    .contact-form-container .form-reset {
                      background: #f5f5f5;
                      color: #333;
                      border: 1px solid #c0c6cc;
                      padding: 8px 20px;
                      border-radius: 4px;
                      cursor: pointer;
                      font-size: 12px;
                    }
                    .contact-form-container .required {
                      color: red;
                    }
                  `}</style>

                  <div className="contact-form-container">
                    {isSubmitted ? (
                      // Success Message
                      <div
                        style={{ textAlign: "center", padding: "40px 20px" }}
                      >
                        <div
                          style={{
                            width: "60px",
                            height: "60px",
                            background: "#10b981",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 20px",
                          }}
                        >
                          <svg
                            style={{
                              width: "32px",
                              height: "32px",
                              color: "white",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#1f2937",
                            marginBottom: "12px",
                          }}
                        >
                          Thank You!
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#6b7280",
                            marginBottom: "8px",
                            lineHeight: "1.6",
                          }}
                        >
                          Thank you for submitting your response.
                        </p>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#6b7280",
                            lineHeight: "1.6",
                          }}
                        >
                          We will reach out to you soon.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setIsOpen(false);
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#4fc3e7")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "#60d9fb")
                          }
                          style={{
                            marginTop: "24px",
                            background: "#60d9fb",
                            color: "white",
                            border: "none",
                            padding: "10px 24px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: "500",
                            transition: "background 0.2s",
                          }}
                        >
                          Close
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="form-title">Get in Touch</div>

                        <div className="form-row">
                          <label htmlFor="Last_Name" className="form-label">
                            Your Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="Last_Name"
                            name="Last Name"
                            className="form-input"
                            maxLength={80}
                            required
                          />
                        </div>

                        <div className="form-row">
                          <label htmlFor="Company" className="form-label">
                            Company <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="Company"
                            name="Company"
                            className="form-input"
                            maxLength={200}
                            required
                          />
                        </div>

                        <div className="form-row">
                          <label htmlFor="Email" className="form-label">
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            id="Email"
                            name="Email"
                            className="form-input"
                            maxLength={100}
                            required
                          />
                        </div>

                        <div className="form-row">
                          <label htmlFor="Mobile" className="form-label">
                            Mobile
                          </label>
                          <input
                            type="text"
                            id="Mobile"
                            name="Mobile"
                            className="form-input"
                            maxLength={30}
                          />
                        </div>

                        <div className="form-row">
                          <label htmlFor="LEADCF3" className="form-label">
                            Service Required <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="LEADCF3"
                            name="LEADCF3"
                            className="form-input"
                            maxLength={255}
                            required
                          />
                        </div>

                        <div className="form-row">
                          <label htmlFor="Description" className="form-label">
                            Your Message <span className="required">*</span>
                          </label>
                          <textarea
                            id="Description"
                            name="Description"
                            className="form-textarea"
                            required
                          />
                        </div>

                        <input type="hidden" name="aG9uZXlwb3Q" value="" />

                        <div className="form-row">
                          <input
                            type="submit"
                            id="formsubmit"
                            className="form-submit"
                            value={isSubmitting ? "Submitting..." : "Submit"}
                            disabled={isSubmitting}
                          />
                          <input
                            type="reset"
                            className="form-reset"
                            value="Reset"
                            disabled={isSubmitting}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ContactForm;
