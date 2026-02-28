import Image from 'next/image'
import React from 'react'
import { IoStarSharp } from "react-icons/io5";


const SaleCom = () => {
  return (
    <>
          <div className="flex items-center gap-[12px]">
                <Image src={''} alt="" className="w-[102px] h-[102px] object-cover rounded-md"/>
                <div className="">
                  <h3 className="text-[14px] font-normal font-main text-[#4D4D4D] hover:text-green">Red Capsicum</h3>
                  <div className="flex items-center gap-2 mb-[8px] ">  
                    <span className=" text-[16px] font-semibold font-main text-text ">$32.00</span>
                    <span className="line-through text-[16px] font-normal font-main text-[#999999]"> $20.00 </span>
                  </div>
               <div className='flex items-center gap-[2px]'>
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
                </div>
              </div>
    </>
  )
}

export default SaleCom