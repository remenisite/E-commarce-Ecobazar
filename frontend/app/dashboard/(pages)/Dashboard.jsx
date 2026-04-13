import React from "react";
import ProfileCard from "../components/dashboard/ProfileCard";
import RecentOrder from "../components/dashboard/RecentOrder";


const Dashboard = () => {
  return (
    <div className="container">
      <div className="">
        <ProfileCard />
        <RecentOrder />
      </div>
    </div>
  );
};

export default Dashboard;
