import React from "react";
import ShoopingDetails from "../components/ShoppingCart/ShoopingDetails";
import CouponCode from "../components/ShoppingCart/CouponCode";
import CartTotal from "../components/ShoppingCart/CartTotal";

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
