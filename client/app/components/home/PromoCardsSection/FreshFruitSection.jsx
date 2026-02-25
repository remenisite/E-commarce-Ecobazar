"use client";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
export default function SaleOfMonthCard() {
  return (
    <section id="deals" className="w-full flex justify-center py-16 bg-gray-100">
      <div className="relative w-[360px] rounded-2xl overflow-hidden shadow-2xl">
      
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center px-8 pt-10 pb-40 relative">
          <p className="text-xs uppercase tracking-widest text-blue-100 mb-2">
            Best Deals
          </p>

          <h2 className="text-3xl font-bold mb-6">Sale of the Month</h2>

          <button className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 transition px-6 py-3 rounded-full text-sm font-semibold shadow-md">
            Shop Now
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
