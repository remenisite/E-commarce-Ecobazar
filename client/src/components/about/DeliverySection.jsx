import React from "react";
import { FaCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import orgdlImg from "../../assets/images/orgdlImg.png";

const DeliverySection = () => {
  return (
    <div className="container flex " >
      <div className="">
        {/* Heading */}
        <h2 className="text-[48px] font-semibold font-main text-text">
          We Delivered, You <br /> Enjoy Your Order.
        </h2>

        {/* Description */}
        <p className="text-[16px] font-normal font-main text-[#666666] w-[536px]">
          Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices
          consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac
          mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget
          elementum.
        </p>

        {/* Features List */}
        <ul className=" space-y-3">
          <li className="flex items-center gap-3 text-[14px] font-normal font-main text-[#666666]">
            <FaCheck className="text-green-600 text-sm" />
            Sed in metus pellentesque.
          </li>
          <li className="flex items-center gap-3 text-[14px] font-normal font-main text-[#666666]">
            <FaCheck className="text-green-600 text-sm" />
            Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
          </li>
          <li className="flex items-center gap-3 text-[14px] font-normal font-main text-[#666666]">
            <FaCheck className="text-green-600 text-sm" />
            Maecenas ut nunc fringilla erat varius.
          </li>
        </ul>

        {/* Button */}
        <button className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition duration-300">
          Shop Now
          <FiArrowRight className="text-lg" />
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={orgdlImg}
          alt="Delivery Man"
          className="w-full max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default DeliverySection;
