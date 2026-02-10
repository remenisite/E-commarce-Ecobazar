import { FaTimes, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import WishCart from "./WishCart";

const WishlistCom = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-[32px] font-semibold font-main text-text ">My Wishlist</h2>

      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50 text-left text-[14px] font-medium font-main text-[#808080]">
            <tr>
              <th className="p-4">PRODUCT</th>
              <th className="p-4">PRICE</th>
              <th className="p-4">STOCK STATUS</th>
              <th className="p-4"></th>
              <th className="p-4"></th>
            </tr>
          </thead>
<WishCart />

        </table>

        {/* Share */}
        {/* <div className="flex items-center gap-4 p-4 border-t">
          <span className="text-sm">Share:</span>
          <div className="flex gap-3 text-gray-600">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaInstagram />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WishlistCom;
