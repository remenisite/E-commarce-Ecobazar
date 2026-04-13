import { FaArrowRight } from "react-icons/fa";

const HotDeals = ({hotH2 }) => {
  return (
    <div className="mb-[32px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] font-semibold font-main text-text">
          {hotH2}
        </h2>
        <button className="flex items-center gap-2 text-[16px] font-medium font-main text-green hover:underline">
          View All
          <FaArrowRight className="text-xs sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default HotDeals;
