import React from "react";
import { FaChevronDown } from "react-icons/fa";

const BillingAddress = () => {
  return (
    <div className="">
      <div className="">
        
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Billing Address
          </h2>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                First name
              </label>
              <input
                type="text"
                defaultValue="Dennis"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Last name
              </label>
              <input
                type="text"
                defaultValue="Nzioki"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Company Name <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                defaultValue="dnx"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Street */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Street Address
            </label>
            <input
              type="text"
              defaultValue="4140 Park"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-4">
            
            {/* Country */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-1">
                Country / Region
              </label>
              <select className="w-full border rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Kenya</option>
                <option>Uganda</option>
                <option>Tanzania</option>
              </select>
              <FaChevronDown className="absolute right-3 top-10 text-gray-400 text-sm" />
            </div>

            {/* State */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-1">
                States
              </label>
              <select className="w-full border rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Nairobi DC</option>
                <option>Mombasa</option>
                <option>Kisumu</option>
              </select>
              <FaChevronDown className="absolute right-3 top-10 text-gray-400 text-sm" />
            </div>

            {/* Zip */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                defaultValue="20033"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="dennisnzioki@gmail.com"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="text"
                defaultValue="254 555-0123"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Button */}
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;