"use client";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import heroImg from "../../../public/images/heroImg.png"
import Button from "../ui/Button";



const Banner = () => {
  return (
       <section id="banner" className="py-[72px]">

      <div className="container flex justify-between">
        <Image src={heroImg} alt="heroImg"  width={742} height={498}/>
        <div>
          <h5 className="text-[14px] font-medium font-main text-green">Welcome to shopery</h5>
          <h1 className="mt-[8px] mb-[28px] text-[72px] font-semibold font-main text-text">Fresh & Healthy <br /> Organic Food</h1>
          <h3 className="text-[32px] font-normal font-main text-text">Sale up to <span className="text-[#FF8A00] font-semibold">30% OFF</span></h3>
          <p className="mt-[12px] mb-[32px] text-[14px] font-mormal font-main text-[#808080]">Free shipping on all your order. we deliver, you enjoy</p>
          <div className="w-[190px]">
          <Button >Shop now <GoArrowRight /></Button>

          </div>
        </div>
      </div>

  
    
    </section>
  );
};

export default Banner;
