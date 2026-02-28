// components/PriceFilter.jsx
import { FaCircle } from "react-icons/fa";

export default function PriceFilter() {
  return (
    <div className="w-[312px]">
      {/* Title */}
      <h2 className="text-[20px] font-medium font-main text-text mb-4">Price</h2>

      {/* Slider Track */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full mb-4">
        {/* Active Range */}
        <div className="absolute left-[10%] right-[20%] h-2 bg-green-500 rounded-full"></div>

        {/* Left Handle */}
        <FaCircle className="absolute -top-2 left-[10%] text-green-600 text-xl cursor-pointer" />

        {/* Right Handle */}
        <FaCircle className="absolute -top-2 right-[20%] text-green-600 text-xl cursor-pointer" />
      </div>

      {/* Price Display */}
      <p className="text-[14px] font-normal font-main text-[#4D4D4D]">Price: <span className="font-medium font-main text-text"> 50 – 1,500</span></p>
    </div>
  );
}
