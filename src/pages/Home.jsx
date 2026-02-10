import React from "react";
import PopularProducts from "../components/home/PopularProducts";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CategoryProduct from "../components/home/CategoryProduct";
import ServiceFeatures from "../components/utils/ServiceFeatures";
import VectorIcon from "../components/home/VectorIcon";
import Testimonial from "../components/testimonial/Testimonial";


const Home = () => {
  return (
    <div className="container">

      <ServiceFeatures />


      <CategoryProduct />
      <PopularProducts />
      <FeaturedProducts />

      <Testimonial />

      <VectorIcon />


    </div>
  );
};

export default Home;
