"use client";

import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SaleOfMonthCard() {
  // Example countdown (static 2 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center py-16 bg-gray-100">
      <div className="relative w-[360px] rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Blue Gradient Background */}
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center px-8 pt-10 pb-40 relative">
          
          <p className="text-xs uppercase tracking-widest text-blue-100 mb-2">
            Best Deals
          </p>

          <h2 className="text-3xl font-bold mb-6">
            Sale of the Month
          </h2>

          {/* Countdown */}
          <div className="flex justify-center gap-4 mb-6">
            {["days", "hours", "mins", "secs"].map((unit, index) => (
              <div key={index} className="text-center">
                <p className="text-xl font-semibold">
                  {String(timeLeft[unit] || 0).padStart(2, "0")}
                </p>
                <p className="text-[10px] uppercase text-blue-100 tracking-wider">
                  {unit}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 transition px-6 py-3 rounded-full text-sm font-semibold shadow-md">
            Shop Now
            <FiArrowRight size={16} />
          </button>
        </div>

        {/* Bottom Image */}
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src="/fruits.png" // place image in public folder
            alt="Fresh Fruits"
            width={400}
            height={250}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}