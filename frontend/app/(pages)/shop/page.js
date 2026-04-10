import LeftCom from "@/app/components/shop/LeftCom";
import SearchHeader from "@/app/components/shop/SearchHeader";
import ShopPages from "@/app/components/shop/ShopRight/ShopPages";
import Breadcrumbs from "@/app/components/utils/Breadcrumbs";
import React from "react";

const Shop = () => {
  return (
    <>
      <Breadcrumbs h2={"Vegetables"} />
      <div className="container">
        <SearchHeader />

        <div className="flex justify-between gap-[24px]">
          <LeftCom />
          <ShopPages />
        </div>
      </div>
    </>
  );
};

export default Shop;
