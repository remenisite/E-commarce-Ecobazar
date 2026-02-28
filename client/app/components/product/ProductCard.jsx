import { FaLock } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-[264px] h-[350px]  border-[#E6E6E6] rounded-[8px] hover:border hover:border-green shadow-md overflow-hidden group">
      <div className="hover:scale-110 duration-300">
        <Image
          src="/images/productImg.png"
          width={264}
          height={240}
          alt="productImg"
          className="w-full h-[240px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="m-[16px]">
        <h3 className="text-[14px] hover:text-green font-normal font-main text-[#4D4D4D]">
          Fresh Indian Malta
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-[16px] font-medium font-main text-text">
            $20.00
          </span>

          <button className="w-9 h-9 hover:bg-green hover:text-white flex items-center justify-center bg-gray-100 rounded-full transition">
            <HiOutlineShoppingBag className="text-[20px]" />
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center  text-orange-400 text-[20px]">
          ★★★★☆
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
