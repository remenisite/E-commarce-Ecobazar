import React from "react";
import { FiTag } from "react-icons/fi";

const CouponCode = () => {
  return (
    <div className="w-[872px]">
      <div className="bg-white border flex items-center gap-[20px] border-[#E5E5E5] p-[20px] rounded-[8px] ">


            <h3 className="text-[20px] font-medium font-main text-text"> Coupon Code  </h3>

            <form className="w-[668px] flex justify-between  items-center border border-[#E5E5E5]  rounded-[46px] overflow-hidden">
          <input type="email" placeholder="Your email address" className="w-full px-[24px] text-[16px] font-normal font-main placeholder:text-[#999999] border-none outline-none" />
          <button type="submit" className="text-[16px] font-semibold font-main text-white bg-[#333333] hover:bg-green-500 rounded-[43px] py-[16px] px-[40px]" >  Coupon  </button>
        </form>
         
      </div>
    </div>
  );
};

export default CouponCode;
