import React from "react";
import HotDeals from "../utils/HotDeals";
import ProductCard from "../utils/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="py-[60px]">
      <div className="container">
        <HotDeals hotH2={"Featured Products"} />

        <div className="grid grid-cols-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
