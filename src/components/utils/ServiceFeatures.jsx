import React from "react";
import { FaTruck, FaHeadset, FaLock, FaUndo } from "react-icons/fa";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaTruck className="text-green-500 text-3xl" />,
      title: "Free Shipping",
      description: "Free shipping on all your order",
    },
    {
      icon: <FaHeadset className="text-green-500 text-3xl" />,
      title: "Customer Support 24/7",
      description: "Instant access to Support",
    },
    {
      icon: <FaLock className="text-green-500 text-3xl" />,
      title: "100% Secure Payment",
      description: "We ensure your money is safe",
    },
    {
      icon: <FaUndo className="text-green-500 text-3xl" />,
      title: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee",
    },
  ];

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-[40px] mt-[24px] mb-[60px] bg-white shadow-md rounded-lg">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex gap-[16px] items-center"
        >
          {feature.icon}
          <div>

          <h3 className=" text-[16px] font-semibold font-main text-text">
            {feature.title}
          </h3>
          <p className=" text-[14px] font-normal font-main text-[#999999]">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
