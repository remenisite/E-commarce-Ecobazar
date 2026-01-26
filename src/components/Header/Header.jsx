import { FaMapMarkerAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full py-[12px] bg-[#333333] text-[12px] font-normal font-main text-[#B3B3B3]">
      <div className="container flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-300" />
          <span className="hidden sm:inline">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Eng</span>
            <MdKeyboardArrowDown />
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <span>USD</span>
            <MdKeyboardArrowDown />
          </div>

          <span className="cursor-pointer ">
            <a href="/signin" className=" hover:text-white">Sign In</a>/
            <a href="/signup" className=" hover:text-white">Sign Up</a>
              
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
