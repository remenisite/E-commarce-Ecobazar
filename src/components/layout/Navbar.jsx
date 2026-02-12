import React from "react";
import { FaHeart, FaShoppingBag, FaPhoneAlt, FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";
import main_logo from "../../assets/images/main-logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white border-b">
        <div className="container">
          {/* Top Row */}
          <div className="flex items-center justify-between py-[27px] gap-4">
            {/* Logo */}
            <Link to={"/"}>
              <img src={main_logo} alt="main-logo" />
            </Link>

            {/* Search Bar */}
            <div className="hidden rounded-[6px] md:flex border border-gray-300 flex-1 max-w-xl mx-6">
              <IoSearchOutline className="text-[20px]" />

              <input
                type="text"
                placeholder="Search"
                className="w-full  text-[15px] font-normal font-main placeholder:text-[#808080] px-4 py-2 rounded-l-md outline-none"
              />
              <button className="bg-green text-[14px] font-semibold font-main text-white px-6 rounded-r-[6px]">
                Search
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <Link to={'wish'} ><FaRegHeart className="text-[32px] cursor-pointer" /></Link>
              

              <div className="relative cursor-pointer">
                <Link to={'/'} ><HiOutlineShoppingBag className="text-[32px] cursor-pointer" /></Link>
              <span className="absolute -top-2 -right-2 bg-green text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">  2  </span>
              </div>
              <div className="hidden md:block text-[11px] font-normal font-main">
                <p className="text-[#4D4D4D]">Shopping cart:</p>
                <p className="text-[14px] font-medium font-main text-text">$57.00</p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between py-[20px]  ">
            {/* Menu */}
            <nav className="hidden md:flex items-center gap-6 font-medium">
              <div className="flex items-center">
                <ul className="flex items-center justify-center gap-[32px]">
                  <li><Link to={'/'} className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"  >   Home <MdKeyboardArrowDown /></Link></li>
                  <li><Link to={'/'} className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"  >                   Shop <MdKeyboardArrowDown /></Link></li>
                  <li><Link to={'/'} className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"  >        Pages <MdKeyboardArrowDown /></Link></li>
                  <li><Link to={'/'} className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"  >       Blog <MdKeyboardArrowDown /></Link></li>
                  <li><Link to={'/about'} className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"  >   About Us</Link></li>
                  <li><Link to={'/contact'} className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"  >   Contact Us</Link></li>
                </ul>
              </div>
            </nav>
            {/* Phone */}
            <div className="flex items-center gap-2 font-medium">
              <FiPhoneCall className="text-[28px] text-text" />
              <span className="text-[14px] font-medium font-main text-text">(219) 555-0114</span>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
