import React from "react";

import Image from "next/image";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Robert Fox",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    image: "/images/testiIMG.png",
  },
];

const TesttimonalCard = () => {
  return (
    <>
      <div className=" mt-[32px] ">
        {testimonials.map((t, i) => (
          <div key={i} className="p-[24px] bg-white shadow-md rounded-lg">
            <FaQuoteLeft className="text-green-500 text-3xl " />
            <p className="text-[14px] font-normal font-main text-[#4D4D4D] my-[16px]">
              {t.text}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[12px] ">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[16px] font-medium font-main text-text">
                    {t.name}
                  </h3>
                  <p className="text-[14px] font-normal font-main text-[#999999]">
                    Customer
                  </p>
                </div>
              </div>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TesttimonalCard;
