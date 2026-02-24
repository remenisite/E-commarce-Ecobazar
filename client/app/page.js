"use client"

import React from "react";
import ServiceFeatures from "./components/utils/ServiceFeatures";
import CategoryProduct from "./components/home/CategoryProduct";
import PopularProducts from "./components/home/PopularProducts";
import FeaturedProducts from "./components/home/FeaturedProducts";
import LatestNews from "./components/home/LatestNews";
import Testimonial from "./components/home/Testimonial";
import VectorIcon from "./components/home/VectorIcon";
import Instragram from "./components/home/Instragram";
import Banner from "./components/home/Banner";
import SummerSaleBanner from "./components/home/SummerSaleBanner";
import NewsletterSection from "./components/utils/NewsletterSection";


const Home = () => {
  return (
    <div className="">
      <Banner />
      <ServiceFeatures />
      <CategoryProduct />
      <PopularProducts />
      <SummerSaleBanner />
      <FeaturedProducts />
      <LatestNews />
      <Testimonial />
      <VectorIcon />
      <Instragram />
    </div>
  );
};

export default Home;
