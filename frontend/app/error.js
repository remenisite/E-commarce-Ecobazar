"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/app/components/utils/Breadcrumbs";
import Button from "./components/ui/Button";

const Error = () => {
  return (
    <div>
      <Breadcrumbs h2={"404 Error Page"} />
      <div className="flex justify-center py-[80px]">
        <div className="text-center">
          <Image
            src="/images/errorImg.png"
            alt="errimg"
            width={600}
            height={400}
          />
          <h2 className="text-[40px] mt-[32px] mb-[20px] font-semibold font-main text-text">
            Oops! page not found
          </h2>
          <h4 className="text-[16px] font-medium font-main text-[#808080] text-center mb-[30px]">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. <br />
            Maecenas sagittis tortor at metus mollis
          </h4>
          <Button variant="primary" size="md">Back to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
