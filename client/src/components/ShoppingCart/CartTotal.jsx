import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import Button from "../ui/Button";

const CartTotal = () => {


  return (
    <div className="w-full">
      <div className="bg-white border border-gray-200 p-[24px] rounded-[8px]">
        {/* Title */}
          <h2 className="text-[20px] font-medium font-main text-left text-text mb-[20px]"> Cart Total   </h2>


<div className="mb-[32px]">

        {/* Subtotal */}
        <div className="flex justify-between items-center py-3 text-sm sm:text-base">
          <span className=" text-[14px] font-normal font-main text-[#4D4D4D]">Subtotal:</span>
          <span className="text-[14px] font-medium font-main text-text">   $84.00   </span>
        </div>
        <hr className="border-gray-200" />

        {/* Shipping */}
        <div className="flex justify-between items-center py-3 text-sm sm:text-base">
          <span className=" text-[14px] font-normal font-main text-[#4D4D4D]">Shipping:</span>
          <span className="text-[14px] font-medium font-main text-text">  Free   </span>
        </div>
        <hr className="border-gray-200" />
        {/* Total */}
        <div className="flex justify-between items-center py-4 text-base sm:text-lg">
          <span className=" text-[16px] font-normal font-main text-[#4D4D4D]">Total:</span>
          <span className="text-[16px] font-semibold font-main text-text"> $84.00   </span>
        </div>
</div>
        <Button variant="primary" size="md" >Proceed to checkout</Button>
      </div>
    </div>
  );
};

export default CartTotal;
