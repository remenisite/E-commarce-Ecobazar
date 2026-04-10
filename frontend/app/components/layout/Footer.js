"use client";

import {
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaApplePay,
  FaLock,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-text">
      <div className="container">
        <div className="flex justify-between py-[60px] ">
          <div className="md:col-span-1">
            <Link href={"#"}>
              {" "}
              <Image
                src="/images/footerLogo.png"
                width={200}
                height={100}
                alt="footer-logo"
              />{" "}
            </Link>
            <p className="text-[14px] font-normal font-main text-[#808080] w-[336px] my-[16px] leading-relaxed">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna <br /> congue nec.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-medium font-main text-white border-b border-green">
                (219) 555-0114
              </span>
              <p className="text-[14px] font-normal font-main text-[#808080]">
                or
              </p>
              <span className="text-[14px] font-medium font-main text-white border-b border-green">
                Proxy@gmail.com
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-[16px] font-medium font-main text-white mb-4">
              My Account
            </h4>
            <ul className="space-y-2 text-[14px] font-normal font-main text-[#999999] ">
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  {" "}
                  My Account
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Shopping Cart
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Wishlist
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[16px] font-medium font-main text-white mb-4 ">
              Helps
            </h4>
            <ul className="space-y-2 text-[14px] font-normal font-main text-[#999999]">
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Contact
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Faqs
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Terms & Condition
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Privacy Policy
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[16px] font-medium font-main text-white mb-4">
              Proxy
            </h4>
            <ul className="space-y-2 text-[14px] font-normal font-main text-[#999999]">
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  {" "}
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  {" "}
                  Shop
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  {" "}
                  Product
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Track Order
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[16px] font-medium font-main text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-[14px] font-normal font-main text-[#999999]">
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  Fruit & Vegetables
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  {" "}
                  Meat & Fish
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  {" "}
                  Bread & Bakery
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-white">
                  {" "}
                  Beauty & Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 "></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-[24px]">
          <p className="text-[14px] font-normal font-main text-[#808080]">
            {" "}
            Ecobazar eCommerce © 2021. All Rights Reserved{" "}
          </p>
          <div className="flex items-center gap-3">
            <FaApplePay className="text-3xl text-white" />
            <FaCcVisa className="text-3xl text-white" />
            <FaCcDiscover className="text-3xl text-white" />
            <FaCcMastercard className="text-3xl text-white" />
            <div className="flex items-center gap-1 border border-gray-600 px-2 py-1 rounded">
              <FaLock className="text-green-500" />
              <span className="text-xs text-white">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
