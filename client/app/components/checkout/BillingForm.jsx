"use client";

import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function BillingForm() {
  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Billing Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Your first name"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Your last name"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Company Name */}
          <div className="relative md:col-span-2">
            <FaBuilding className="absolute left-3 top-3.5 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Company name (optional)"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Street Address */}
          <div className="relative md:col-span-2">
            <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Street address"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Country */}
          <div>
            <select className="w-full border border-gray-300 rounded-lg py-2.5 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-black">
              <option>Select Country / Region</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>
          </div>

          {/* State */}
          <div>
            <select className="w-full border border-gray-300 rounded-lg py-2.5 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-black">
              <option>Select State</option>
              <option>California</option>
              <option>Texas</option>
              <option>New York</option>
            </select>
          </div>

          {/* Zip Code */}
          <div>
            <input
              type="text"
              placeholder="Zip Code"
              className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400 text-sm" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3.5 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="mt-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="differentAddress"
            className="w-4 h-4 border-gray-300 rounded"
          />
          <label
            htmlFor="differentAddress"
            className="text-sm text-gray-600"
          >
            Ship to a different address
          </label>
        </div>
      </div>
    </div>
  );
}