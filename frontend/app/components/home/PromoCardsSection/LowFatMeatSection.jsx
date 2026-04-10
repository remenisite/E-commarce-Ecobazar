"use client";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Button from "../../ui/Button";
export default function LowFatMeatSection() {
  return (
    <section className="w-[425px] rounded-[8px] text-center ">
      <div id="deals" className="pb-[294px] pt-[35px]">
        <p className="text-[14px] font-medium font-main text-white">Best Deals</p>
        <h2 className="mt-[16px] mb-[8px] text-[40px] font-semibold font-main text-white">Sale of the Month</h2>
        <Button size="sm" > Shop Now</Button>
 
      </div>
    </section>
  );
}
