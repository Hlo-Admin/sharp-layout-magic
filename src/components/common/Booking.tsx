import React, { useState } from "react";
import {
  Clock,
  Phone,
  ChevronLeft,
  ChevronRight,
  Globe,
  X,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BookingConfig {
  businessName: string;
  serviceName: string;
  duration: string;
  callType: string;
  year: number;
  month: number; // 0-11 (January = 0)
  availableDates: number[];
  timezone: string;
  timezoneTime: string;
}

interface BookingPopupProps {
  onClose?: () => void;
}

const BookingPopup = ({ onClose }: BookingPopupProps = {}) => {
  // Dynamic configuration - Change these values as needed
  const [config, setConfig] = useState<BookingConfig>({
    businessName: "Go kite Pro.",
    serviceName: "Business Service",
    duration: "30 min",
    callType: "Phone call",
    year: 2024,
    month: 3, // April (0-indexed)
    availableDates: [23, 24, 25, 26, 29, 30],
    timezone: "Central European Time",
    timezoneTime: "8:11pm",
  });

  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz6BS0fIvfePFIHF7fymPEJqKIgx-GONz1zApGbZ9qTcJVxW-3OscYPDm-jHYwwkrx9Hg/exec";

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate calendar days for the selected month
  const generateCalendarDays = () => {
    const firstDay = new Date(config.year, config.month, 1).getDay();
    const daysInMonth = new Date(config.year, config.month + 1, 0).getDate();

    const days: Array<{ date: number | null }> = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ date: null });
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: i });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const getDateStyle = (date: number | null) => {
    if (!date) return "invisible";
    if (date === selectedDate) return "bg-blue-600 text-white font-semibold";
    if (config.availableDates.includes(date))
      return "bg-cyan-200 text-gray-900 font-medium hover:bg-cyan-300 cursor-pointer";
    return "text-gray-900 hover:bg-gray-100 cursor-pointer";
  };

  const handlePrevMonth = () => {
    setConfig((prev) => ({
      ...prev,
      month: prev.month === 0 ? 11 : prev.month - 1,
      year: prev.month === 0 ? prev.year - 1 : prev.year,
    }));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setConfig((prev) => ({
      ...prev,
      month: prev.month === 11 ? 0 : prev.month + 1,
      year: prev.month === 11 ? prev.year + 1 : prev.year,
    }));
    setSelectedDate(null);
  };

  const handleBookSlot = async () => {
    // Validation
    if (!email || !phone || !selectedDate) {
      toast.error("Please fill in all fields and select a date", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data
      const formData = new URLSearchParams();
      formData.append("formType", "booking"); // Identify this as booking form
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("date", selectedDate.toString());
      formData.append("month", monthNames[config.month]);
      formData.append("year", config.year.toString());
      formData.append(
        "fullDate",
        `${monthNames[config.month]} ${selectedDate}, ${config.year}`
      );
      formData.append("service", config.serviceName);
      formData.append("duration", config.duration);
      formData.append("callType", config.callType);
      formData.append("timezone", config.timezone);

      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.result === "success") {
        toast.success(
          `Booking confirmed for ${monthNames[config.month]} ${selectedDate}, ${
            config.year
          }!`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );

        // Reset form after a delay
        setTimeout(() => {
          setEmail("");
          setPhone("");
          setSelectedDate(null);
          if (onClose) {
            onClose();
          }
        }, 2000);
      } else {
        throw new Error(result.error || "Booking failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error(
        "There was an error submitting your booking. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden relative">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 z-10 text-red-500 hover:text-red-600 transition-colors"
        onClick={onClose}
      >
        <X className="w-4 h-4" />
      </button>

      {/* Left Panel */}
      <div className="w-2/5 p-4 bg-white border-r border-gray-200 flex flex-col">
        <div className="mb-3">
          <p className="text-gray-600 text-xs mb-1">{config.businessName}</p>
          <h1 className="text-lg font-bold text-gray-900">
            {config.serviceName}
          </h1>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span className="font-medium text-sm">{config.duration}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Phone className="w-4 h-4 mr-2 text-gray-500" />
            <span className="font-medium text-sm">{config.callType}</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-900 font-semibold mb-2 text-sm">
            Book your free consultation Now:
          </p>

          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-900 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1.5 text-xs border-2 border-yellow-400 rounded-lg focus:outline-none focus:border-yellow-500 text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-900 mb-1">
              Phone Number*
            </label>
            <div className="flex border-2 border-yellow-400 rounded-lg overflow-hidden">
              <span className="px-2 py-1.5 text-sm bg-white text-gray-700 border-r border-gray-300 font-medium">
                +
              </span>
              <input
                type="tel"
                placeholder="Contact Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-2 py-1.5 text-xs focus:outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs mt-auto pt-3">
          <button className="text-blue-600 hover:underline transition-colors">
            Cookie settings
          </button>
          <button className="text-gray-700 hover:underline transition-colors">
            Report abuse
          </button>
        </div>
      </div>

      {/* Right Panel - Calendar */}
      <div className="w-3/5 p-4 bg-white relative">
        <h2 className="text-base font-bold text-gray-900 mb-3">
          Select a Date & Time
        </h2>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handlePrevMonth}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-sm font-semibold text-gray-900">
            {monthNames[config.month]} {config.year}
          </span>
          <button
            onClick={handleNextMonth}
            className="p-1 bg-yellow-300 hover:bg-yellow-400 rounded-full transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-800" />
          </button>
        </div>

        {/* Calendar Header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center text-[10px] font-semibold text-gray-600 py-1"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1 mb-3">
          {calendarDays.map((day, idx) => (
            <button
              key={idx}
              onClick={() => day.date && setSelectedDate(day.date)}
              disabled={!day.date}
              className={`
                  aspect-square flex items-center justify-center rounded-full text-xs font-medium transition-colors
                  ${getDateStyle(day.date)}
                `}
            >
              {day.date}
            </button>
          ))}
        </div>

        {/* Book Slot Button */}
        <button
          onClick={handleBookSlot}
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 text-sm rounded-full mb-3 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Booking..." : "Book Slot"}
        </button>

        {/* Timezone */}
        <div className="border-t border-gray-200 pt-2">
          <p className="text-xs font-semibold text-gray-900 mb-2">Time zone</p>
          <div className="flex items-center text-gray-700 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
            <Globe className="w-3 h-3 mr-1.5 text-gray-600" />
            <span className="text-xs">
              {config.timezone} ({config.timezoneTime})
            </span>
            <ChevronRight className="w-3 h-3 ml-auto text-gray-600" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookingPopup;
