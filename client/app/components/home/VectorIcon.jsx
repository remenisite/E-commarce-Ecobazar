import React from "react";

import Image from "next/image";

const icons = [
  "/images/Vector1.png",
  "/images/vector2.png",
  "/images/vector3.png",
  "/images/vector4.png",
  "/images/vector5.png",
  "/images/vector6.png",
];

const VectorIcon = () => {
  return (
    <div className="container grid grid-cols-6 gap-[120px] py-[60px]">
      {icons.map((src, idx) => (
        <p key={idx}>
          <Image
            src={src}
            alt={`vector-icon-${idx + 1}`}
            width={80}
            height={80}
          />
        </p>
      ))}
    </div>
  );
};

export default VectorIcon;
