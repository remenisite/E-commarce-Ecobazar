import React from "react";
import Image from "next/image";
import { FaEnvelope, FaTimes } from "react-icons/fa";

const Popup = () => {
  return (
    <div className="w-[872px] bg-white shadow-2xl rounded-[8px] relative">
      <div className="flex items-center p-[10px]">
        {/* Left Image Section */}
        <div className="">
          <Image
            src="/images/popupImg.png"
            alt="Newsletter"
            width={354}
            height={380}
            className="object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="py-[40px] px-[40px]">
          {/* Close Icon */}
          <button className=" absolute top-[20px] right-[20px]">
            <FaTimes className="text-[45px] text-text" />
          </button>

          <h2 className="text-[40px] font-semibold font-main text-center text-[#999999]">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-[12px] mb-[24px] text-center">
            Subscribe to our newlletter and Save your 20% money with discount
            code today.
          </p>

          {/* Input + Button */}

          <form className="flex justify-between  items-center bg-white shadow  rounded-[46px] border-[#E6E6E6] rounded overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-[24px] text-[16px] font-normal font-main placeholder:text-[#808080] border-none outline-none"
            />
            <button
              type="submit"
              className="text-[16px] font-semibold font-main text-white bg-green hover:bg-green-500 rounded-[43px] py-[16px] px-[40px]"
            >
              Subscribe
            </button>
          </form>

          {/* Checkbox */}
          <div className=" flex justify-center items-center mt-[50px]">
            <input type="checkbox" id="hidePopup" className="mr-2" />
            <label
              htmlFor="hidePopup"
              className="text-[16px] font-normal font-main text-[#666666]"
            >
              Do not show this window
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
