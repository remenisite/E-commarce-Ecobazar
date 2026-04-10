import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const LeftSection = () => {
  return (
    <>
      <div className=" bg-white shadow w-[312px]">
      <div className=" px-[20px]">
        <div className=" py-[24px] text-center flex justify-center flex-col items-center">
          <FaMapMarkerAlt className="text-[41px] text-green" />
            <p className="text-[16px] font-normal  font-main text-[#333333] mt-[16px] ">2715 Ash Dr. San Jose, South <br /> Dakota 83475</p>
        </div>
           <div className=" py-[24px]  text-center flex items-center flex-col border-t border-b ">
          <FaEnvelope className="text-[41px] text-green" />
            <p className="text-[16px] font-normal  font-main text-[#333333] mt-[16px] ">Proxy@gmail.com <br /> Help.proxy@gmail.com</p>
        </div>
           <div className=" py-[24px] text-center flex justify-center flex-col items-center">
          <FaPhoneAlt className="text-[41px] text-green" />
            <p className="text-[16px] font-normal  font-main text-[#333333] mt-[16px] ">(219) 555-0114 <br /> (164) 333-0487</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
