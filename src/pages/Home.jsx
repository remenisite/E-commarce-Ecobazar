import React from "react";
import PopularProducts from "../components/home/PopularProducts";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CategoryProduct from "../components/home/CategoryProduct";
import ServiceFeatures from "../components/utils/ServiceFeatures";

const Home = () => {
  return (
    <div className="container">

      <ServiceFeatures />


      <CategoryProduct />
      <PopularProducts />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
