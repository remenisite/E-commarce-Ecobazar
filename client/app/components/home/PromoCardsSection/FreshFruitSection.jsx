"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function FreshFruitCard({
  title = "100% Fresh Fruit",
  subtitle = "Summer Sale",
  discount = "64% OFF",
  image = "/apples.png",
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-yellow-400 px-8 pt-10 pb-40 text-center">
      
      {/* Top Text */}
      <p className="text-xs uppercase tracking-widest text-gray-800">
        {subtitle}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {title}
      </h2>

      <p className="mt-3 mb-6 text-gray-800">
        Up to{" "}
        <span className="bg-black text-white text-xs px-3 py-1 rounded">
          {discount}
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
        priority
      />
    </div>
  );
}