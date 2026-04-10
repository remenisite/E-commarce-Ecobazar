import React from "react";
import Image from "next/image";

const ProductCategory = () => {
  return (
    <div className="border-[#E6E6E6] shadow border-[#E6E6E6]shadow-green bg-white hover:shadow-green rounded-[5px] pt-[16px] pb-[24px] text-center">
      {/* Image Section */}
      <Image
        src="/images/cateImg.png"
        alt="Fresh Fruit"
        width={200}
        height={200}
        className="flex justify-center"
      />

      {/* Text Section */}
      <h2 className="text-[18px] mt-[16px] font-medium font-main text-text">
        Fresh Fruit
      </h2>
    </div>
  );
};

export default ProductCategory;
