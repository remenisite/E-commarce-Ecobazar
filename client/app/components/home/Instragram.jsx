"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Instragram = () => {
  return (
    <section className="pb-[60px]">
      <div className="container text-center">
        <h2 className="text-[32px] font-semibold font-main text-text mb-[32px]">
          {" "}
          Follow us on Instagram{" "}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <Link
              href={"#"}
              key={index}
              className="relative group overflow-hidden rounded-[12px]"
            >
              <Image
                src="/images/InstagramImg.png"
                alt="insta-Img"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2b572ecc] text-white z-999 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <FaInstagram size={28} />{" "}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instragram;
