import React from "react";
import SidebarNavigation from "../components/layout/SidebarNavigation.jsx";
import ProfileCard from "../components/dashboard/ProfileCard.jsx";
import OrderHistory from "../components/dashboard/OrderHistory.jsx";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="">
        <ProfileCard />
        <OrderHistory />
      </div>
    </div>
  );
};

export default Dashboard;
