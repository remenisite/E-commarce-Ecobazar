import React from "react";
import cateImg from '../../assets/images/cateImg.png'

const ProductCategory = () => {
  return (
    <div className="border-[#E6E6E6] shadow border-[#E6E6E6]shadow-green bg-white hover:shadow-green rounded-[5px] pt-[16px] pb-[24px] text-center">
      {/* Image Section */}
      <img  src={cateImg} alt="Fresh Fruit" className="flex justify-center" />

      {/* Text Section */}
      <h2 className="text-[18px] mt-[16px] font-medium font-main text-text">
        Fresh Fruit
      </h2>

    </div>
  );
};

export default ProductCategory;
