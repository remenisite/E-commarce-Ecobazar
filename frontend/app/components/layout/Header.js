"use client"

import { useSearchParams } from "next/navigation";
import { FiMapPin } from "react-icons/fi";


const Header = () => {
    const searchParams = useSearchParams();
  const currentQuery = searchParams.get("query") || "";
  return (

    <>
    
    <header className="w-full py-[12px] bg-[#EDF2EE] text-[12px] font-normal font-main text-[#B3B3B3]">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-[16px] text-green" />
          <span className="hidden sm:inline text-[15px] font-normal font-main text-green">  Store Location: Lincoln- 344, Illinois, Chicago, USA </span>
        </div>
        <div className="">
          <select className="px-4 py-2 text-[15px] font-normal font-main text-green">
          <option value="" className="text-[15px] font-normal font-main text-green">Eng</option>
          <option value="" className="text-[15px] font-normal font-main text-green">bangla</option>
          <option value="" className="text-[15px] font-normal font-main text-green">Hindi</option>
          <option value="" className="text-[15px] font-normal font-main text-green">Urdu</option>
        </select>
                    <input
              type="search"
              name="query"
              defaultValue={currentQuery}
              placeholder="Search products..."
              className="h-full w-full border-0 bg-transparent px-2 text-sm outline-none"
            />
             <select className="px-4 py-2 text-[15px] font-normal font-main text-green">
          <option  className="text-[15px] font-normal font-main text-green">Usd</option>
          <option  className="text-[15px] font-normal font-main text-green">Bdt</option>
          <option  className="text-[15px] font-normal font-main text-green">Riyal</option>
          <option className="text-[15px] font-normal font-main text-green">Urdu</option>
        </select>
        </div>
      </div>
    </header>
    

         



    
    </>
  );
};

export default Header;
