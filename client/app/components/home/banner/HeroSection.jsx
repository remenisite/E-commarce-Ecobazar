"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="">
      <div className="container flex justify-between ">
        <div id="left_Hero" className=" w-[872px] rounded-[10px]">
          <div className="py-[155px] pl-[60px]">
          <h1 className="text-[48px] font-semibold font-main text-white">Fresh & Healthy <br /> Organic Food</h1>
         <p className="text-[20px] font-medium font-main mt-[28px] text-white"> Sale up to <span className="bg-[#FF8A00] text-white px-3 py-1 rounded-md ml-2 text-sm font-semibold">   30% OFF </span> </p>
         <p className="text-[14px] font-normal font-main mt-[8px] mb-[28px] text-white"> Free shipping on all your order.</p>
          <button className="mt-6 flex items-center  gap-2 bg-white  px-6 py-3 rounded-full text-[16px] font-semibold font-main text-green hover:bg-green-100 transition"> Shop now   <FaArrowRight /> </button>
          </div>
        </div>
        <div>
        <div id="right_u_hero" className=" w-[423px] rounded-[10px]">
          <div className="pt-[32px] pl-[32px] pb-[120px]">
            <h4 className="text-[14px] font-medium font-main text-text">Summer Sale</h4>
            <h3 className="text-[32px] font-semibold font-main mt-[8px] mb-[12px] text-text">75% OFF</h3>
            <p className="text-[14px] font-normal font-main text-[#666666]" >Only Fruit & Vegetable</p>
          <button className=" flex items-center gap-2 mt-[24px] rounded-full text-[16px] font-semibold font-main text-green"> Shop now   <FaArrowRight /> </button>
          </div>

        </div>
        <div id="right_d_hero" className=" w-[423px] rounded-[10px] mt-[24px] text-center">
          <div className="py-[70px] text-center">
            <p className="text-[14px] font-medium font-main text-white">Best Deal</p>
            <h4 className="text-[32px] font-semibold font-main mt-[12px] mb-[32px] text-white">Special Products Deal <br /> of the Month</h4>
          <button className=" flex justify-center items-center gap-2  rounded-full text-[16px] font-semibold font-main text-green"> Shop now   <FaArrowRight /> </button>

          </div>
        </div>
</div>
      </div>
    </section>
  );
}