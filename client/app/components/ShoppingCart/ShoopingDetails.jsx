import Button from "../ui/Button";
import ShoppingCom from "./ShoppingCom";




const ShoopingDetails = () => {

  return (
    <div className=" w-[872px] ">
      <div className=" border border-[#E5E5E5] rounded-xl overflow-hidden">
        <div className=" py-[16px] pl-[20px]  text-[14px] font-medium font-main text-[#808080]">
          <div className="col-span-6">PRODUCT</div>
          <div className="col-span-2 text-center">PRICE</div>
          <div className="col-span-2 text-center">QUANTITY</div>
          <div className="col-span-2 text-center">SUBTOTAL</div>
        </div>

        <ShoppingCom />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 py-6 border-t ">
            <Button variant="secondary" >  Return to shop</Button>
            <Button variant="secondary" size="md" > Update Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ShoopingDetails;
