import { FaTimes, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import WishCart from "./WishCart";
import Breadcrumbs from "../utils/Breadcrumbs";

const WishlistCom = () => {
  return (
    <>
    <Breadcrumbs h2={"Wishlist"} />
    <div className="container text-center pt-[40px] pb-[80px] ">
      <h2 className="text-[32px] font-semibold mb-[32px] font-main text-text ">My Wishlist</h2>
      <div className="border border-[#E5E5E5] rounded-lg overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50 text-left text-[14px] font-medium font-main text-[#808080]">
            <tr>
              <th className="p-4">PRODUCT</th>
              <th className="p-4">PRICE</th>
              <th className="p-4">STOCK STATUS</th>
            </tr>
          </thead>
<WishCart />
<WishCart />
<WishCart />
          <div className="flex items-center pl-[24px] pb-[24px] pt-[12px] ">
            <p className="text-[14px] font-normal font-main text-text"> Share:</p>
            <a href="/" className='w-[40px] h-[40px] hover:bg-green hover:text-white rounded-full flex items-center justify-center'><FaFacebookF className="  text-[24px] cursor-pointer" /></a>
            <a href="/" className='w-[40px] h-[40px] hover:bg-green hover:text-white rounded-full flex items-center justify-center'><FaTwitter className="  text-[24px] cursor-pointer" /></a>
            <a href="/" className='w-[40px] h-[40px] hover:bg-green hover:text-white rounded-full flex items-center justify-center'><FaPinterestP className="  text-[24px] cursor-pointer" /></a>
            <a href="/" className='w-[40px] h-[40px] hover:bg-green hover:text-white rounded-full flex items-center justify-center'><FaInstagram className="  text-[24px] cursor-pointer" /></a>      
          </div>
        </table>
      </div>
    </div>
    </>

  );
};

export default WishlistCom;
