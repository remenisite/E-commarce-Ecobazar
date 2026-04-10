"use client";

import React from 'react'
import Button from '../ui/Button';

const SummerSaleBanner = () => {
  return (
        <div id='summer' className="container rounded-[10px] py-[60px] pl-[830px] ">

            <h4 className='text-[16px] font-medium font-main text-white'>Summer Sale</h4>
            <h2 className='text-[56px] font-normal font-main mt-[12px] mb-[16px] text-white'><span className='font-semibold text-[#FF8A00]'>37%</span>  OFF</h2>
            <h5 className='text-[16px] font-medium font-main mb-[28px] text-white'>Free on all your order, Free Shipping and  30 days <br /> money-back guarantee</h5>
<div className='w-[195px]'>

            <Button >Shop now =</Button>
</div>

        </div>
  )
}

export default SummerSaleBanner