import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const Breadcrumbs = ({ h2 }) => {
  return (
    <div id="Breadcrumbs" className=" py-[48px]">
      <div className="container flex gap-[12px] items-center">
        <Link to={"/"}>
          <GrHomeRounded className="text-[24px] text-[#808080]" />
        </Link>
        <IoIosArrowForward className="text-[#808080]" />
        <Link to={"/"} className="text-[16px] font-normal font-main text-green">
          {h2}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumbs;
