import { FaSlidersH } from "react-icons/fa";

export default function SearchHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4">
      {/* Filter Button */}
      <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
        <FaSlidersH />
        <span>Filter</span>
      </button>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-gray-700 font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          className="border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"  >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
      <p className="text-gray-600 font-medium">52 Results Found</p>
    </div>
  );
}
