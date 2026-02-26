import React from "react";
import { FaRegCircle, FaCircle } from "react-icons/fa";

const OrderSummary = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Order Summary
      </h2>

      {/* Product 1 */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Green Capsicum"
            className="w-12 h-12 object-contain"
          />
          <p className="text-gray-700 text-sm">
            Green Capsicum x5
          </p>
        </div>
        <p className="text-gray-800 font-medium">$70.00</p>
      </div>

      {/* Product 2 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Red Capsicum"
            className="w-12 h-12 object-contain"
          />
          <p className="text-gray-700 text-sm">
            Red Capsicum x1
          </p>
        </div>
        <p className="text-gray-800 font-medium">$14.00</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Pricing */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span>$84.00</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Shipping:</span>
          <span className="text-gray-800 font-medium">Free</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-700 font-medium">Total:</span>
        <span className="text-xl font-bold text-gray-900">$84.00</span>
      </div>

      {/* Payment Method */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Payment Method
      </h3>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <FaCircle className="text-green-500 text-lg" />
          <span className="text-gray-700 text-sm">Cash on Delivery</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaRegCircle className="text-green-500 text-lg" />
          <span className="text-gray-700 text-sm">Paypal</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaRegCircle className="text-gray-400 text-lg" />
          <span className="text-gray-700 text-sm">Amazon Pay</span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-full font-medium">
        Place Order
      </button>

    </div>
  );
};

export default OrderSummary;