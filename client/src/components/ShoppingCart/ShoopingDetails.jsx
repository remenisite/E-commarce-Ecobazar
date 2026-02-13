import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import wishCartImg from "../../assets/images/wishCartImg.png"
import Button from "../ui/Button";



const wishlistData = [
  {
    id: 1,
    name: "Green Capsicum",
    price: 14.99,
    image: wishCartImg,
    Subtotal: 70.00,
    quantity:1
  },
    {
    id: 2,
    name: "Green Capsicum",
    price: 14.99,
    image: wishCartImg,
    Subtotal: 70.00,
    quantity:1
  },


];

const ShoopingDetails = () => {

  return (
    <div className=" w-[872px] p-4 sm:p-6">
      <div className=" border border-[#E5E5E5] rounded-xl overflow-hidden">
        {/* Header */}
        <div className=" py-[16px] pl-[20px] grid grid-cols-4 text-[14px] font-medium font-main text-[#808080]">
          <div className="col-span-6">PRODUCT</div>
          <div className="col-span-2 text-center">PRICE</div>
          <div className="col-span-2 text-center">QUANTITY</div>
          <div className="col-span-2 text-center">SUBTOTAL</div>
        </div>


        {wishlistData.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 px-4 sm:px-6 py-5 border-t"  >
            <div className="col-span-4 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-gray-700 font-medium">
                {item.name}
              </span>
            </div>

            <div className="col-span-2 text-gray-700 text-center font-medium">
                     ${item.price}
            </div>

          
            <div className="col-span-2 flex justify-center">
              <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 gap-3">
                <button
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100"
                >
                  <FiMinus size={14} />
                </button>

                <span className="text-sm font-medium w-5 text-center">
                  {item.quantity}
                </span>

                <button
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>

            <div className="col-span-2 flex items-center justify-center gap-4">
              <span className="text-gray-800 font-semibold">
                {item.Subtotal}
              </span>

              <button
                className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"
              >
                <FiX size={14} />
              </button>
            </div>
          </div>
        ))}

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 py-6 border-t ">

            <Button variant="secondary" >  Return to shop</Button>
            <Button variant="secondary" size="md" > Update Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ShoopingDetails;
