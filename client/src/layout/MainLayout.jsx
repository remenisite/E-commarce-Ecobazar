import React from "react";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
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
