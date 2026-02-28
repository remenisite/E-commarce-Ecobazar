"use client"

import CartTotal from "@/app/components/ShoppingCart/CartTotal";
import CouponCode from "@/app/components/ShoppingCart/CouponCode";
import ShoopingDetails from "@/app/components/ShoppingCart/ShoopingDetails";
import CmnHead from "@/app/components/utils/CmnHead";
import React from "react";

const ShoppingCart = () => {
  return (
    <section className="text-center">
      <CmnHead text={"My Shopping Cart"} />
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
