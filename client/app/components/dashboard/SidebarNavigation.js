"use client";

import {
  FiGrid,
  FiRefreshCw,
  FiHeart,
  FiShoppingBag,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export default function SidebarNavigation() {
  return (
    <div className="w-[260px] bg-white rounded-xl border p-5">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Navigation</h2>

      <ul className="space-y-2">

        {/* Active Item */}
        <li className="flex items-center gap-3 px-3 py-2 bg-gray-200 border-l-4 border-green-500 text-gray-800 rounded-md cursor-pointer">
          <FiGrid size={18} />
          Dashboard
        </li>

        <li className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-md cursor-pointer">
          <FiRefreshCw size={18} />
          Order History
        </li>

        <li className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-md cursor-pointer">
          <FiHeart size={18} />
          Wishlist
        </li>

        <li className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-md cursor-pointer">
          <FiShoppingBag size={18} />
          Shopping Cart
        </li>

        <li className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-md cursor-pointer">
          <FiSettings size={18} />
          Settings
        </li>

        <li className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-md cursor-pointer">
          <FiLogOut size={18} />
          Log-out
        </li>

      </ul>
    </div>
  );
}