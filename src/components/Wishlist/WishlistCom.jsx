import { FaTimes, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

const wishlistData = [
  {
    id: 1,
    name: "Green Capsicum",
    price: 14.99,
    oldPrice: 20.99,
    stock: "In Stock",
    image: "/images/capsicum.png",
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    price: 45.0,
    stock: "In Stock",
    image: "/images/cabbage.png",
  },
  {
    id: 3,
    name: "Fresh Sujapuri Mango",
    price: 9.0,
    stock: "Out of Stock",
    image: "/images/mango.png",
  },
];

const WishlistCom = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-[32px] font-semibold font-main text-text ">My Wishlist</h2>

      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50 text-left text-sm text-gray-500">
            <tr>
              <th className="p-4">PRODUCT</th>
              <th className="p-4">PRICE</th>
              <th className="p-4">STOCK STATUS</th>
              <th className="p-4"></th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {wishlistData.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain"
                  />
                  <span className="text-sm font-medium">{item.name}</span>
                </td>

                <td className="p-4 text-sm">
                  <span className="font-semibold">${item.price.toFixed(2)}</span>
                  {item.oldPrice && (
                    <span className="line-through text-gray-400 ml-2">
                      ${item.oldPrice}
                    </span>
                  )}
                </td>

                <td className="p-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      item.stock === "In Stock"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {item.stock}
                  </span>
                </td>

                <td className="p-4">
                  <button
                    className={`px-5 py-2 text-sm rounded-full ${
                      item.stock === "In Stock"
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Add to Cart
                  </button>
                </td>

                <td className="p-4">
                  <FaTimes className="text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Share */}
        <div className="flex items-center gap-4 p-4 border-t">
          <span className="text-sm">Share:</span>
          <div className="flex gap-3 text-gray-600">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCom;
