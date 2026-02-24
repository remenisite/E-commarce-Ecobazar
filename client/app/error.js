"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/app/components/utils/Breadcrumbs";

const Error = () => {
  return (
    <div>
      <Breadcrumbs h2={"404 Error Page"} />
      <div className="flex justify-center py-[80px]">
        <div className="text-center">
          <Image
            src="/images/errorImg.png"
            alt="errimg"
            width={400}
            height={300}
          />
          <h2 className="text-[40px] mt-[32px] mb-[20px] font-semibold font-main text-text">
            Oops! page not found
          </h2>
          <h4 className="text-[16px] font-medium font-main text-[#808080] w-[612px] text-center">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            Maecenas sagittis tortor at metus mollis
          </h4>
          <Link
            href={"/"}
            className="text-[16px] mt-[40px] font-semibold font-main text-white bg-green hover:bg-green-500 rounded-[43px] py-[16px] px-[40px]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
