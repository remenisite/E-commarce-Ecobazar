import React from "react";
import { FiInfo } from "react-icons/fi";

const AdditionalInfo = () => {
  return (
    <div className="w-full bg-gray-100 p-6">
      <div className="max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <FiInfo className="text-gray-700 text-xl" />
          <h2 className="text-xl font-semibold text-gray-800">
            Additional Info
          </h2>
        </div>

        {/* Order Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Order Notes (Optional)
          </label>

          <textarea
            rows="4"
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="w-full rounded-md border border-gray-300 bg-white p-4 text-sm 
                       placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;