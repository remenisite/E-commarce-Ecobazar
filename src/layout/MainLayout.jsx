import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NewsletterSection from "../components/utils/NewsletterSection";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default MainLayout;
