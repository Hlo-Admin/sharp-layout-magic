import { useState, useEffect } from "react";
import { X, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetCountries } from "react-country-state-city";

interface CostCalculatorPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CostCalculatorPopup = ({ isOpen, onClose }: CostCalculatorPopupProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("");
  const [selectedFreeZone, setSelectedFreeZone] = useState("");
  const [selectedOwners, setSelectedOwners] = useState<number | null>(null);
  const [selectedVisas, setSelectedVisas] = useState<number | null>(null);
  const [selectedOfficeSpace, setSelectedOfficeSpace] =
    useState("Virtual Office");
  const [selectedNationality, setSelectedNationality] = useState("");
  const [firstName, setFirstName] = useState("");
  const [cityOfResidence, setCityOfResidence] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [businessStartTime, setBusinessStartTime] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFreeZoneDropdownOpen, setIsFreeZoneDropdownOpen] = useState(false);
  const [isNationalityDropdownOpen, setIsNationalityDropdownOpen] =
    useState(false);
  const [countriesList, setCountriesList] = useState<any[]>([]);
  const [nationalitySearchQuery, setNationalitySearchQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz6BS0fIvfePFIHF7fymPEJqKIgx-GONz1zApGbZ9qTcJVxW-3OscYPDm-jHYwwkrx9Hg/exec";

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countries = await GetCountries();
        setCountriesList(countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const businessTypes = [
    "Trading",
    "Service",
    "Manufacturing",
    "Consulting",
    "Technology",
    "Healthcare",
    "Education",
    "Real Estate",
    "Finance",
    "Other",
  ];

  const freeZones = [
    "DMCC (Dubai Multi Commodities Centre)",
    "JAFZA (Jebel Ali Free Zone)",
    "Dubai Silicon Oasis",
    "Dubai Internet City",
    "Dubai Media City",
    "Sharjah Media City (Shams)",
    "Ajman Free Zone",
    "RAK Free Trade Zone",
    "Fujairah Free Zone",
    "IFZA (International Free Zone Authority)",
  ];

  const handleNext = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBusinessTypeSelect = (type: string) => {
    setSelectedBusinessType(type);
    setIsDropdownOpen(false);
  };

  const handleJurisdictionSelect = (jurisdiction: string) => {
    setSelectedJurisdiction(jurisdiction);
  };

  const handleFreeZoneSelect = (zone: string) => {
    setSelectedFreeZone(zone);
    setIsFreeZoneDropdownOpen(false);
  };

  const handleNationalitySelect = (nationality: string) => {
    setSelectedNationality(nationality);
    setIsNationalityDropdownOpen(false);
    setNationalitySearchQuery("");
  };

  // Filter countries based on search query
  const filteredCountries = countriesList.filter((country) =>
    country.name.toLowerCase().includes(nationalitySearchQuery.toLowerCase())
  );

  // Handle form submission to Google Sheets
  const handleSubmit = async () => {
    // Validation
    if (!email || !contactNumber) {
      toast.error(
        "Please fill in all required fields (Email and Contact Number)",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data
      const formData = new URLSearchParams();
      formData.append("formType", "costCalculator"); // Identify this as cost calculator form
      formData.append("businessType", selectedBusinessType);
      formData.append("jurisdiction", selectedJurisdiction);
      formData.append(
        "numberOfOwners",
        selectedOwners !== null ? selectedOwners.toString() : "0"
      );
      formData.append(
        "numberOfVisas",
        selectedVisas !== null ? selectedVisas.toString() : "0"
      );
      formData.append("officeSpaceType", selectedOfficeSpace);
      formData.append("nationality", selectedNationality);
      formData.append("firstName", firstName);
      formData.append("cityOfResidence", cityOfResidence);
      formData.append("contactNumber", contactNumber);
      formData.append("email", email);
      formData.append("businessStartTime", businessStartTime);

      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.result === "success") {
        toast.success(
          "Form submitted successfully! We'll send you a detailed cost estimate shortly.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      } else {
        throw new Error(result.error || "Submission failed");
      }

      // Reset form and close popup after a delay
      setTimeout(() => {
        onClose();
        // Reset all fields
        setCurrentStep(1);
        setSelectedBusinessType("");
        setSelectedJurisdiction("");
        setSelectedFreeZone("");
        setSelectedOwners(null);
        setSelectedVisas(null);
        setSelectedOfficeSpace("Virtual Office");
        setSelectedNationality("");
        setFirstName("");
        setCityOfResidence("");
        setContactNumber("");
        setEmail("");
        setBusinessStartTime("");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "There was an error submitting your form. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-[600px] max-w-[90vw] mx-4 relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
            BUSINESS-SETUP COST CALCULATOR
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between w-full">
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className="flex items-center flex-1">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    index + 1 <= currentStep
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                />
                {index < 8 && (
                  <div
                    className={`flex-1 h-0.5 mx-1 ${
                      index + 1 < currentStep ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="px-6 pb-6">
          {/* Step 1: Business Category */}
          {currentStep === 1 && (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  1. Choose your Business Category
                </h3>
                <p className="text-sm text-gray-500">
                  Select your UAE business activity to determine license,
                  location, and setup cost.
                </p>
              </div>

              {/* Business Type Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 border border-gray-100 rounded-lg text-left flex items-center justify-between bg-white hover:border-gray-400 transition-colors"
                  >
                    <span
                      className={
                        selectedBusinessType ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {selectedBusinessType || "Choose Your Business Type"}
                    </span>
                    <img src="/dropdown.png" alt="" className="w-3 h-3" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {businessTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleBusinessTypeSelect(type)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Step 2: Jurisdiction */}
          {currentStep === 2 && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2. Choose your preferred jurisdiction
                </h3>
                <p className="text-sm text-gray-600">
                  This will have the biggest impact on your final proposal, but
                  is also required based on your choice of activity and whether
                  you need to be based in the mainland or not.
                </p>
              </div>

              {/* Jurisdiction Options */}
              <div className="mb-6">
                <div className="space-y-3">
                  <button
                    onClick={() => handleJurisdictionSelect("Free Zones")}
                    className="w-full px-4 py-3 text-left transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight
                        className={`w-5 h-5 transition-colors ${
                          selectedJurisdiction === "Free Zones"
                            ? "text-[#007bff]"
                            : "text-blue-500"
                        }`}
                      />
                      <span
                        className={`font-bold text-lg transition-colors ${
                          selectedJurisdiction === "Free Zones"
                            ? "text-[#007bff]"
                            : "text-blue-500"
                        }`}
                      >
                        Free Zones
                      </span>
                    </span>
                  </button>

                  <button
                    onClick={() => handleJurisdictionSelect("Mainland")}
                    className="w-full px-4 py-3 text-left transition-colors"
                  >
                    <span
                      className={`font-bold text-2xl transition-colors ${
                        selectedJurisdiction === "Mainland"
                          ? "text-[#007bff]"
                          : "text-[#66b0ff]"
                      }`}
                    >
                      Mainland
                    </span>
                  </button>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Step 3: Number of Owners/Shareholders */}
          {currentStep === 3 && (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  3. How many owners/shareholders will your company have?
                </h3>
                <p className="text-sm text-gray-600">
                  The number of owners/shareholders your company will have can
                  help in identifying the most suitable legal structure for your
                  company, as well as the number of residence visas you will
                  require.
                </p>
              </div>

              {/* Number Selection */}
              <div className="mb-6">
                <div className="flex justify-left gap-9">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                    <button
                      key={number}
                      onClick={() => setSelectedOwners(number)}
                      className={`text-4xl font-bold transition-colors ${
                        selectedOwners === number
                          ? "text-blue-600"
                          : "text-blue-400"
                      } hover:text-blue-500`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Step 4: Number of Residence Visas */}
          {currentStep === 4 && (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  4. How many residence visas will you need?
                </h3>
                <p className="text-sm text-gray-600">
                  In addition to residence visas for your shareholders, you can
                  apply for residence visas for your employees and family
                  members.
                </p>
              </div>

              {/* Number Selection */}
              <div className="mb-6">
                <div className="flex justify-left gap-9">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                    <button
                      key={number}
                      onClick={() => setSelectedVisas(number)}
                      className={`text-4xl font-bold transition-colors ${
                        selectedVisas === number
                          ? "text-blue-600"
                          : "text-blue-400"
                      } hover:text-blue-500`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Step 5: Office Space Type */}
          {currentStep === 5 && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  5. What type of office space do you need?
                </h3>
                <p className="text-sm text-gray-600">
                  Depending on the nature of your business, will you need a
                  flexi-desk, a co-working space or an entire office space? This
                  is an important factor in calculating your total setup cost.
                </p>
              </div>

              {/* Office Space Options */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setSelectedOfficeSpace("Virtual Office")}
                    className={`w-full px-4 pt-3 text-left transition-colors ${
                      selectedOfficeSpace === "Virtual Office"
                        ? "text-blue-600"
                        : "text-blue-500"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      <span className="font-bold text-xs">Virtual Office</span>
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedOfficeSpace("Physical Office")}
                    className={`w-full px-4 pt-3 text-left transition-colors ${
                      selectedOfficeSpace === "Physical Office"
                        ? "text-blue-600"
                        : "text-blue-500"
                    }`}
                  >
                    <span className="font-bold text-xs">Physical Office</span>
                  </button>

                  <button
                    onClick={() => setSelectedOfficeSpace("Shop Front")}
                    className={`w-full px-4 pt-3 text-left transition-colors ${
                      selectedOfficeSpace === "Shop Front"
                        ? "text-blue-600"
                        : "text-blue-500"
                    }`}
                  >
                    <span className="font-bold text-xs">Shop Front</span>
                  </button>

                  <button
                    onClick={() => setSelectedOfficeSpace("Business Centre")}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      selectedOfficeSpace === "Business Centre"
                        ? "text-blue-600"
                        : "text-blue-500"
                    }`}
                  >
                    <span className="font-bold text-xs">Business Centre</span>
                  </button>

                  <button
                    onClick={() => setSelectedOfficeSpace("Warehouse")}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      selectedOfficeSpace === "Warehouse"
                        ? "text-blue-600"
                        : "text-blue-500"
                    }`}
                  >
                    <span className="font-bold text-xs">Warehouse</span>
                  </button>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Step 6: Nationality */}
          {currentStep === 6 && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  6. What's your Nationality?
                </h3>
                <p className="text-sm text-gray-600">
                  Your country of Nationality as per Legal Documents
                </p>
              </div>

              {/* Nationality Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality
                </label>
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsNationalityDropdownOpen(!isNationalityDropdownOpen)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left flex items-center justify-between bg-white hover:border-gray-400 transition-colors"
                  >
                    <span
                      className={
                        selectedNationality ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {selectedNationality || "Choose Your Nationality"}
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>

                  {isNationalityDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                      {/* Search Input */}
                      <div className="p-3 border-b border-gray-200 sticky top-0 bg-white">
                        <input
                          type="text"
                          value={nationalitySearchQuery}
                          onChange={(e) =>
                            setNationalitySearchQuery(e.target.value)
                          }
                          placeholder="Search country..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          autoFocus
                        />
                      </div>

                      {/* Countries List */}
                      <div className="max-h-60 overflow-y-auto">
                        {countriesList.length > 0 ? (
                          filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <button
                                key={country.id}
                                onClick={() =>
                                  handleNationalitySelect(country.name)
                                }
                                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                              >
                                {country.name}
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-gray-500 text-center">
                              No countries found
                            </div>
                          )
                        ) : (
                          <div className="px-4 py-3 text-gray-500 text-center">
                            Loading countries...
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Step 7: Full Name & City */}
          {currentStep === 7 && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  7. Your Full name & Current City
                </h3>
                <p className="text-sm text-gray-600">
                  Please provide your personal information for the business
                  setup process.
                </p>
              </div>

              {/* Input Fields */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Alexander"
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500 text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* City of Residence */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    value={cityOfResidence}
                    onChange={(e) => setCityOfResidence(e.target.value)}
                    placeholder="Russia"
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Step 8: Contact Information */}
          {currentStep === 8 && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  8. May I have your contact information to share the estimate
                  with you?
                </h3>
                <p className="text-sm text-gray-600">
                  We'll use this information to send you a detailed cost
                  estimate and follow up with you.
                </p>
              </div>

              {/* Input Fields */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="+1"
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500 text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="@"
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* Step 9: Business Start Time */}
          {currentStep === 9 && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  9. When do you plan to start your business?
                </h3>
                <p className="text-sm text-gray-600">
                  This helps us understand your timeline and provide the most
                  accurate cost estimate for your business setup.
                </p>
              </div>

              {/* Business Start Time Options */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setBusinessStartTime("This Month")}
                    className={`px-4 py-3 text-left transition-colors ${
                      businessStartTime === "This Month"
                        ? "text-blue-600"
                        : "text-blue-500"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      <span className="font-bold text-sm">This Month</span>
                    </span>
                  </button>

                  <button
                    onClick={() => setBusinessStartTime("Next Month")}
                    className={`px-4 py-3 text-left transition-colors ${
                      businessStartTime === "Next Month"
                        ? "text-blue-600"
                        : "text-blue-500"
                    }`}
                  >
                    <span className="font-bold text-sm">Next Month</span>
                  </button>

                  <button
                    onClick={() => setBusinessStartTime("Next 3 Months")}
                    className={`px-4 py-3 text-left transition-colors ${
                      businessStartTime === "Next 3 Months"
                        ? "text-blue-600"
                        : "text-blue-500"
                    }`}
                  >
                    <span className="font-bold text-sm">Next 3 Months</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-[#f7c332] text-gray-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#e6b02a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Form"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CostCalculatorPopup;
