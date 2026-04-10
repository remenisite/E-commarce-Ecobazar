import { FaStar } from "react-icons/fa";

export default function RatingFilter() {

  return (
    <div className="w-[312px]">
      <h2 className="text-[20px] font-medium font-main text-text mb-4">Rating</h2>
      <div className="flex gap-[8px] items-center">
        <input type="checkbox" />
        <div className="flex items-center">
     <FaStar  className="text-[#FF8A00] text-[18px]"/>
     <FaStar  className="text-[#FF8A00] text-[18px]"/>
     <FaStar className="text-[#FF8A00] text-[18px]" />
     <FaStar className="text-[#FF8A00] text-[18px]" />
     <FaStar className="text-[#FF8A00] text-[18px]" /> 5.0
        </div>
      </div>
            <div className="flex gap-[8px] items-center">
        <input type="checkbox" />
        <div className="flex items-center">
     <FaStar className="text-[#FF8A00] text-[18px]" />
     <FaStar className="text-[#FF8A00] text-[18px]" />
     <FaStar className="text-[#FF8A00] text-[18px]" />
     <FaStar className="text-[#FF8A00] text-[18px]" /> 
     <FaStar className="text-[#CCCCCC] text-[18px]" />  4.0 & up
             </div>
      </div>
      <div className="flex gap-[8px] items-center">
        <input type="checkbox" />
        <div className="flex items-center">
     <FaStar className="text-[#FF8A00] text-[18px]" />
     <FaStar className="text-[#FF8A00] text-[18px]" />
     <FaStar className="text-[#FF8A00] text-[18px]" /> 
     <FaStar  className="text-[#CCCCCC] text-[18px]"/> 
     <FaStar className="text-[#CCCCCC] text-[18px]" />  3.0 & up
        </div>
      </div>
      <div className="flex gap-[8px] items-center">
        <input type="checkbox" />
        <div className="flex items-center">
     <FaStar  className="text-[#FF8A00] text-[18px]"/>
     <FaStar  className="text-[#FF8A00] text-[18px]"/> 
     <FaStar  className="text-[#CCCCCC] text-[18px]"/> 
     <FaStar  className="text-[#CCCCCC] text-[18px]"/> 
     <FaStar  className="text-[#CCCCCC] text-[18px]"/>  2.0 & up
        </div>
      </div>
      <div className="flex gap-[8px] items-center">
        <input type="checkbox" />
        <div className="flex items-center">
     <FaStar  className="text-[#FF8A00] text-[18px]"/> 
     <FaStar className="text-[#CCCCCC] text-[18px]" /> 
     <FaStar className="text-[#CCCCCC] text-[18px]" /> 
     <FaStar className="text-[#CCCCCC] text-[18px]" /> 
     <FaStar className="text-[#CCCCCC] text-[18px]" />  1.0 & up
        </div>
      </div>










    </div>
  );
}
