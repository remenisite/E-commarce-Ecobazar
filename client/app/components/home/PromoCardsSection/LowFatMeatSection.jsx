"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function LowFatMeatSection({
  title = "Low-Fat Meat",
  subtitle = "85% Fat Free",
  price = "$79.99",
  image = "/meat.png",
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl text-white bg-black px-8 pt-10 pb-40 text-center">
      
      {/* Top Text */}
      <p className="text-xs uppercase tracking-widest text-gray-400">
        {subtitle}
      </p>

      <h2 className="text-3xl font-bold mt-2 mb-2">
        {title}
      </h2>

      <p className="text-gray-400 mb-6">
        Started at{" "}
        <span className="text-yellow-400 font-semibold">
          {price}
        </span>
      </p>

      {/* Button */}
      <button className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
        Shop Now <FiArrowRight size={16} />
      </button>

      {/* Bottom Image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="absolute bottom-0 left-0 w-full object-contain"
      />
    </div>
  );
}