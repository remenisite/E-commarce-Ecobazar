"use client"

import CartTotal from "@/app/components/ShoppingCart/CartTotal";
import CouponCode from "@/app/components/ShoppingCart/CouponCode";
import ShoopingDetails from "@/app/components/ShoppingCart/ShoopingDetails";
import React from "react";

const ShoppingCart = () => {
  return (
    <section className="text-center">
      <h2 className="text-[32px] font-semibold font-main text-text">
        My Shopping Cart
      </h2>
      <div className="container flex">
        <div>
          <ShoopingDetails />
          <CouponCode />
        </div>
        <CartTotal />
      </div>
    </section>
  );
};

export default ShoppingCart;
