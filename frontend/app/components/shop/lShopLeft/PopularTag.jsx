import { FaTag } from "react-icons/fa";

export default function PopularTag() {
  const tags = [
    { name: "Healthy", active: false },
    { name: "Low fat", active: true },
    { name: "Vegetarian", active: false },
    { name: "Kid foods", active: false },
    { name: "Vitamins", active: false },
    { name: "Bread", active: false },
    { name: "Meat", active: false },
    { name: "Snacks", active: false },
    { name: "Tiffin", active: false },
    { name: "Lunch", active: false }, // corrected spelling
    { name: "Dinner", active: false },
    { name: "Breakfast", active: false }, // corrected spelling
    { name: "Fruit", active: false },
  ];

  return (
    <div className="w-[312px]">
      <h2 className="text-[20px] font-medium font-main text-text mb-4 ">  Popular Tag   </h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-[16px] py-[6px] rounded-full bg-[#F2F2F2] hover:bg-green hover:text-white cursor-pointer transition`}  >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
