import React, { useState } from "react";
import {
  Clock,
  Phone,
  ChevronLeft,
  ChevronRight,
  Globe,
  X,
} from "lucide-react";

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

  const handleBookSlot = () => {
    if (!email || !phone || !selectedDate) {
      alert("Please fill in all fields and select a date");
      return;
    }

    const bookingData = {
      email,
      phone,
      date: selectedDate,
      month: monthNames[config.month],
      year: config.year,
      service: config.serviceName,
      duration: config.duration,
    };

    console.log("Booking Data:", bookingData);
    alert(
      `Booking confirmed for ${monthNames[config.month]} ${selectedDate}, ${
        config.year
      }`
    );
  };

  return (
    <div className="flex bg-white rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 z-10 text-red-500 hover:text-red-600 transition-colors"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Left Panel */}
      <div className="w-2/5 p-8 bg-white border-r border-gray-200 flex flex-col">
        <div className="mb-6">
          <p className="text-gray-600 text-sm mb-2">{config.businessName}</p>
          <h1 className="text-2xl font-bold text-gray-900">
            {config.serviceName}
          </h1>
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center text-gray-700">
            <Clock className="w-5 h-5 mr-3 text-gray-500" />
            <span className="font-medium">{config.duration}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Phone className="w-5 h-5 mr-3 text-gray-500" />
            <span className="font-medium">{config.callType}</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-900 font-semibold mb-4">
            Book your free consultation Now:
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border-2 border-yellow-400 rounded-lg focus:outline-none focus:border-yellow-500 text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Phone Number*
            </label>
            <div className="flex border-2 border-yellow-400 rounded-lg overflow-hidden">
              <span className="px-4 py-2.5 bg-white text-gray-700 border-r border-gray-300 font-medium">
                +
              </span>
              <input
                type="tel"
                placeholder="Contact Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 focus:outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm mt-auto pt-6">
          <button className="text-blue-600 hover:underline transition-colors">
            Cookie settings
          </button>
          <button className="text-gray-700 hover:underline transition-colors">
            Report abuse
          </button>
        </div>
      </div>

      {/* Right Panel - Calendar */}
      <div className="w-3/5 p-8 bg-white relative">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Select a Date & Time
        </h2>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-lg font-semibold text-gray-900">
            {monthNames[config.month]} {config.year}
          </span>
          <button
            onClick={handleNextMonth}
            className="p-2 bg-yellow-300 hover:bg-yellow-400 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Calendar Header */}
        <div className="grid grid-cols-7 gap-2 mb-3">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-semibold text-gray-600 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {calendarDays.map((day, idx) => (
            <button
              key={idx}
              onClick={() => day.date && setSelectedDate(day.date)}
              disabled={!day.date}
              className={`
                  aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-colors
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-full mb-6 transition-colors shadow-sm"
        >
          Book Slot
        </button>

        {/* Timezone */}
        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm font-semibold text-gray-900 mb-3">Time zone</p>
          <div className="flex items-center text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
            <Globe className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm">
              {config.timezone} ({config.timezoneTime})
            </span>
            <ChevronRight className="w-4 h-4 ml-auto text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
