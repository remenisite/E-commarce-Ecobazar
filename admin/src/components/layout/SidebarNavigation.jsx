"use client";

import { 
  FiGrid, 
  FiRefreshCw, 
  FiHeart, 
  FiShoppingCart, 
  FiSettings, 
  FiLogOut 
} from "react-icons/fi";

export default function SidebarNavigation() {
  return (
    <div className="w-[312px]  rounded-lg border border-gray-200 ">
      <h2 className="text-[24px] font-semibold font-main text-text mt-[24px] pl-[20px] mb-[16px]">  Navigation  </h2>

      <ul className="space-y-2">

        {/* Dashboard */}
        <li className="flex items-center gap-3 pl-[20px] py-[16px] text-[22px] font-normal font-main text-[#666666] hover:text-[22px] hover:text-text hover:bg-[#EDF2EE] hover:border-l-4 border-green  cursor-pointer">
          <FiGrid />
          <span>Dashboard</span>
        </li>

        {/* Order History */}
        <li className="flex items-center gap-3  pl-[20px] py-[16px] text-[22px] font-normal font-main text-[#666666] hover:text-[22px] hover:text-text hover:bg-[#EDF2EE] hover:border-l-4 border-green  cursor-pointer">
          <FiRefreshCw  className="text-[24px]" />
          <span>Order History</span>
        </li>

        {/* Wishlist */}
        <li className="flex items-center gap-3  pl-[20px] py-[16px] text-[22px] font-normal font-main text-[#666666] hover:text-[22px] hover:text-text hover:bg-[#EDF2EE] hover:border-l-4 border-green  cursor-pointer">
          <FiHeart  className="text-[24px]" />
          <span>Wishlist</span>
        </li>

        {/* Shopping Cart */}
        <li className="flex items-center gap-3  pl-[20px] py-[16px] text-[22px] font-normal font-main text-[#666666] hover:text-[22px] hover:text-text hover:bg-[#EDF2EE] hover:border-l-4 border-green  cursor-pointer">
          <FiShoppingCart  className="text-[24px]" />
          <span>Shopping Cart</span>
        </li>

        {/* Settings */}
        <li className="flex items-center gap-3  pl-[20px] py-[16px] text-[22px] font-normal font-main text-[#666666] hover:text-[22px] hover:text-text hover:bg-[#EDF2EE] hover:border-l-4 border-green  cursor-pointer">
          <FiSettings  className="text-[24px]" />
          <span>Settings</span>
        </li>

        {/* Logout */}
        <li className="flex items-center gap-3  pl-[20px] py-[16px] text-[22px] font-normal font-main text-[#666666] hover:text-[22px] hover:text-text hover:bg-[#EDF2EE] hover:border-l-4 border-green  cursor-pointer">
          <FiLogOut  className="text-[24px]" />
          <span>Log-out</span>
        </li>

      </ul>
    </div>
  );
}