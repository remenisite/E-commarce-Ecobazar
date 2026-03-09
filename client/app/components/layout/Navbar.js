"Use client";

import React from "react";

import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white border-b">
        <div className="container">
          <nav className="  hidden md:flex justify-between py-[20px] items-center gap-6 font-medium">
            <div className="flex items-center">
              <ul className="flex items-center justify-center gap-[32px]">
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] font-medium font-main text-[#666666] flex items-center gap-1"
                  >
                    Home <MdKeyboardArrowDown />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/shop"}
                    className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"
                  >
                    Shop <MdKeyboardArrowDown />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/checkout"}
                    className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"
                  >
                    {" "}
                    Pages <MdKeyboardArrowDown />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"
                  >
                    {" "}
                    Blog <MdKeyboardArrowDown />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"
                  >
                    {" "}
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className="text-[14px] font-medium font-main text-[#666666] flex items-center gap-1"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2 font-medium">
              <FiPhoneCall className="text-[28px] text-text" />
              <span className="text-[14px] font-medium font-main text-text">
                (219) 555-0114
              </span>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
