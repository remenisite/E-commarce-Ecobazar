import { FaMapMarkerAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaHeart, FaShoppingBag, FaPhoneAlt, FaRegHeart } from "react-icons/fa";

import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";


const Header = () => {
  return (

    <>
    
    <header className="w-full py-[12px] bg-[#EDF2EE] text-[12px] font-normal font-main text-[#B3B3B3]">
      <div className="container flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <FiMapPin className="text-[16px] text-green" />
          <span className="hidden sm:inline text-[15px] font-normal font-main text-green">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <select className="px-4 py-2 text-[15px] font-normal font-main text-green">
          <option value="" className="text-[15px] font-normal font-main text-green">Eng</option>
          <option value="" className="text-[15px] font-normal font-main text-green">bangla</option>
          <option value="" className="text-[15px] font-normal font-main text-green">Hindi</option>
          <option value="" className="text-[15px] font-normal font-main text-green">Urdu</option>
        </select>


        

        </div>
      </div>
    </header>
    

          <div className="container flex items-center justify-between py-[27px] gap-4">
            <Link href="/"><Image src="/images/main-logo.png"width={200}  height={200} alt="navbar-logo" /></Link>
            <div className="hidden rounded-[6px] md:flex border border-gray-300 flex-1 max-w-xl mx-6">
              <IoSearchOutline className="text-[20px] " />
              <input
                type="text"
                placeholder="Search"
                className="w-full  text-[15px] font-normal font-main placeholder:text-[#808080] px-4 py-2 rounded-l-md outline-none"
              />
              <button className="bg-green text-[14px] font-semibold font-main text-white px-6 rounded-r-[6px]">
                Search
              </button>
            </div>
            <div className="flex items-center gap-6">
              <Link href={"wishList"}>
                <FaRegHeart className="text-[32px] cursor-pointer" />
              </Link>
              <div className="relative cursor-pointer">
                <Link href={"shoppingCart"}>
                  <HiOutlineShoppingBag className="text-[32px] cursor-pointer" />
                </Link>
                <span className="absolute -top-2 -right-2 bg-green text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"> 2  </span>
              </div>
              <div className="hidden md:block text-[11px] font-normal font-main">
                <p className="text-[#4D4D4D]">Shopping cart:</p>
                <p className="text-[14px] font-medium font-main text-text">
                  $57.00
                </p>
              </div>
            </div>
          </div>



    
    </>
  );
};

export default Header;
