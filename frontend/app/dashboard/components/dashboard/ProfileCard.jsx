import React from "react";
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="grid grid-cols-2 gap-[24px]">
      
      {/* Profile Card */}
      <div className="border-[#E5E5E5] border rounded-[8px] text-center py-[32px]">
        <div className="text-center flex justify-center">  <img src="https://i.pravatar.cc/150"   alt="profile" className="w-[120px] h-[120px] rounded-full mb-4" /> </div>
        <h2 className="text-[20px] font-medium font-main text-text">Dennis Nzioki</h2>
        <p className="text-[14px] font-normal font-main text-[#808080] mt-[2px] mb-[10px]">Customer</p>
        <button className="text-[16px] font-medium font-main text-green hover:underline"> Edit Profile </button>
        </div>

      {/* Billing Address */}
      <div className="border-[#E5E5E5] border rounded-[8px] pl-[32px]  py-[32px]">
        <h3 className="text-[14px] font-medium font-main text-[#999999]"> BILLING ADDRESS </h3>
        <h2 className="text-[18px] font-medium font-main text-text mt-[18px] mb-[8px]">Dennis Nzioki</h2>
          <p className="text-[14px] font-normal font-main text-[#666666]"> 4140 Parker Rd. Allentown, New Runda <br /> 31134 </p>
          <p className="text-[16px] font-normal font-main text-text my-[8px]"> dennisnzioki@gmail.com </p>
          <p className="text-[16px] font-normal font-main text-text">  254 555-0110 </p>
        <button className="text-[16px] font-medium font-main text-green hover:underline mt-[20px]">Edit Address   </button>
      </div>
    </div>
  );
};

export default ProfileCard;