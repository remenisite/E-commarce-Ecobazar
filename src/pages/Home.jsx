import React from "react";
import PopularProducts from "../components/home/PopularProducts";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CategoryProduct from "../components/home/CategoryProduct";
import ServiceFeatures from "../components/utils/ServiceFeatures";
import VectorIcon from "../components/home/VectorIcon";
import Testimonial from "../components/home/Testimonial";
import Instragram from "../components/home/Instragram";

const Home = () => {
  return (
    <div className="">
      <ServiceFeatures />

      <CategoryProduct />
      <PopularProducts />
      <FeaturedProducts />

      <Testimonial />

      <VectorIcon />
      <Instragram />
    </div>
  );
};

export default Home;
