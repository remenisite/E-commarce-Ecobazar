"Use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaHeart, FaShoppingBag, FaPhoneAlt, FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";


import { TfiUser } from "react-icons/tfi";



const Navbar = () => {
  return (
    <>

     <nav className="container flex items-center justify-between py-[27px] gap-4">

            <div className="flex items-center">
              <ul className="flex items-center justify-center gap-[32px]">
                <li> <Link href={"/"} className="text-[16px] font-medium font-main text-[#666666] flex items-center gap-1"  >  Home  </Link> </li>
                <li> <Link href={"/shop"} className="text-[16px] font-medium font-main text-[#666666] flex items-center gap-1"  >  Shop <MdKeyboardArrowDown /> </Link> </li>
                {/* <li> <Link href={"/"} className="text-[16px] font-medium font-main text-[#666666] flex items-center gap-1"  >  Pages <MdKeyboardArrowDown /> </Link> </li> */}
                <li> <Link href={"/"} className="text-[16px] font-medium font-main text-[#666666] flex items-center gap-1"  >  Blog  </Link> </li>
                <li> <Link href={"/about"} className="text-[16px] font-medium font-main text-[#666666] flex items-center gap-1"  >   About Us <MdKeyboardArrowDown /> </Link> </li>
              </ul>
            </div>
            
            <Link href="/"><Image src="/images/main-logo.png"width={200}  height={200} alt="navbar-logo" /></Link>
               <div className="flex items-center gap-2 font-medium"> <FiPhoneCall className="text-[28px] text-text" /> <span className="text-[14px] font-medium font-main text-text">(219) 555-0114 </span>  </div>
               <div className="flex items-center gap-[20px]" >
                <div><FiSearch className="text-[32px] cursor-pointer" /></div>
                <Link href={'wishList'} > <FaRegHeart className="text-[32px] cursor-pointer" /></Link>
                <div className="relative cursor-pointer">
                <Link href={"shoppingCart"}><HiOutlineShoppingBag className="text-[32px] cursor-pointer" /> </Link>
                <span className="absolute -top-2 -right-2 bg-green text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"> 2  </span> </div>

                <Link href={'signin'} > <TfiUser className="text-[32px] cursor-pointer" /></Link>
               </div>
          </nav>

    </>
  );
};

export default Navbar;
