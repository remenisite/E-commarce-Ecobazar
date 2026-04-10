// components/CategoryMenu.jsx
import { FaCircle } from "react-icons/fa";

export default function CategoryMenu() {
  const categories = [
    { name: "Fresh Fruit", count: 25, active: false },
    { name: "Vegetables", count: 150, active: true },
    { name: "Cooking", count: 54, active: false },
    { name: "Snacks", count: 47, active: false },
    { name: "Beverages", count: 43, active: false },
    { name: "Beauty & Health", count: 38, active: false },
    { name: "Bread & Bakery", count: 15, active: false },
  ];

  return (
    <div className="w-[312px]">
      <h2 className="text-[20px] font-medium font-main text-text">All Categories</h2>
      <ul className="space-y-3">
        {categories.map((cat, index) => (
          <li
            key={index}
            className={`flex items-center justify-between cursor-pointer px-2 py-1 rounded-md transition ${
              cat.active ? "bg-green-100 text-green-700 font-medium" : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <FaCircle
                className={`text-xs ${
                  cat.active ? "text-green-600" : "text-gray-400"
                }`}
              />
              <span>{cat.name}</span>
            </div>
            <span className="text-sm">{cat.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
