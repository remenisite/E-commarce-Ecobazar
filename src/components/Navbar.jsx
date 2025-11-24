"use client";
import { FiSearch, FiChevronDown, FiBell, FiMessageSquare, FiMic } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import React from 'react'
import { Link } from "react-router";
import mainLogo from '../assets/images/main-logo.png'
import avater from '../assets/images/Avatar.png'

const Navbar = () => {
  return (
    <>


     <header className="">
      <div className="container">
        
        <div className="flex justify-between items-center">

        {/* Left Section */}
        <div className="flex items-center gap-[47px] ">
            
            <Link to={'/'} ><img src={mainLogo} alt="main-logo" /></Link>
          
          {/* Search Bar */}
          <div className="w-[360px] bg-[#F5F5FA] rounded-[12px] flex py-[14px] px-[12px]">
            <FiSearch className="text-[#7E7E8F] text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent focus:outline-none text-sm text-gray-700"
            />
            <FiMic className="text-[#7E7E8F] text-lg cursor-pointer" />
          </div>

          {/* Browse Dropdown */}
          <div className="flex items-center  cursor-pointer">
            <LuSquareArrowOutUpRight className="text-[#7E7E8F]" />
            <span className="text-[14px] font-semibold font-main pl-[11px] pr-[41px] text-[#7E7E8F]">Browse</span>
            <IoIosArrowDown className="text-[#C6CBD9]" />
          </div>
        </div>

        {/* Right Section */}
        <div className=" flex items-center gap-[48px]">
          <TiMessages className=" text-[#7E7E8F] text-xl cursor-pointer" />
          <FiBell className=" text-[#7E7E8F] text-xl cursor-pointer" />

          {/* User Avatar */}
          <img
            src={avater}
            alt="User"
            className="w-9 h-9 rounded-full border-2 border-white cursor-pointer"
          />
        </div>
        </div>

      </div>
    </header>
      
    </>
  )
}

export default Navbar
