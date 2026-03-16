import React from "react";
import { FaCamera } from "react-icons/fa";

const AccountSettings = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          Account Settings
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                First name
              </label>
              <input
                type="text"
                defaultValue="Dennis"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Nzioki"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                defaultValue="dennisnzioki@gmail.com"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                defaultValue="254 555-0123"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              Save Changes
            </button>
          </div>

          {/* Profile Image Section */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://i.pravatar.cc/200"
              alt="profile"
              className="w-40 h-40 rounded-full object-cover border"
            />

            <button className="flex items-center gap-2 border border-green-500 text-green-500 px-5 py-2 rounded-full hover:bg-green-50 transition">
              <FaCamera />
              Choose Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;