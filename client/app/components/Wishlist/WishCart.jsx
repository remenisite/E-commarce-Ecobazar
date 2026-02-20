import React from "react";
import Image from "next/image";
import {
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
const wishlistData = [
  {
    id: 1,
    name: "Green Capsicum",
    price: 14.99,
    oldPrice: 20.99,
    stock: "In Stock",
    image: "/images/wishCartImg.png",
  },
];

const WishCart = () => {
  return (
    <>
      <tbody>
        {wishlistData.map((item) => (
          <tr key={item.id} className="border-t border-[#E5E5E5]">
            <td className="p-4 flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="object-contain"
              />
              <span className="text-[16px] font-normal font-main text-text">
                {item.name}
              </span>
            </td>

            <td className="p-4 text-[16px] font-medium font-main text-text">
              <span className="">${item.price.toFixed(2)}</span>{" "}
              <span className="line-through text-gray-400 ml-2">
                {" "}
                ${item.oldPrice}{" "}
              </span>
            </td>
            <td className="p-4">
              <span className="text-[14px] font-normal font-main text-green bg-[#20b5251f] py-1 px-2 ">
                {" "}
                {item.stock}{" "}
              </span>
            </td>
            <td className="p-4">
              <button className="text-[14px] font-semibold font-main text-white bg-green rounded-[43px] py-[14px] px-[32px]">
                {" "}
                Add to Cart{" "}
              </button>
            </td>
            <td className="p-4">
              <button className=" w-[22px] h-[22px] rounded-full flex items-center justify-center border border-[#CCCCCC]">
                <FaTimes className="text-[#666666] cursor-pointer" />{" "}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default WishCart;
