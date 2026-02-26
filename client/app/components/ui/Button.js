import React from "react";

const baseStyles ="w-full inline-flex cursor-pointer items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary: "bg-green text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-[#F2F2F2] hover:bg-gray-200 focus:ring-gray-500",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const sizes = {
  sm: "px-[32px] py-[14px] text-[14px] font-semibold text-[#4D4D4D] font-main",
  md: " px-[32px] py-[14px] text-[14px] font-semibold text-[#4D4D4D] font-main",
  lg: "px-[32px] py-[14px] text-[16px] font-semibold font-main text-white",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;