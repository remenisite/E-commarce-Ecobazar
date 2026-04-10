import React from "react";
import CategoryMenu from "./lShopLeft/CategoryMenu";
import PriceFilter from "./lShopLeft/PriceFilter";
import RatingFilter from "./lShopLeft/RatingFilter";
import PopularTag from "./lShopLeft/PopularTag";
import SaleProducts from "./lShopLeft/SaleProducts";

const LeftCom = () => {
  return (
    <div>
      <CategoryMenu />
      <PriceFilter />
      <RatingFilter />
      <PopularTag />
      <SaleProducts />
    </div>
  );
};

export default LeftCom;
