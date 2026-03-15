import React from "react";
import { Outlet } from "react-router";
import SidebarNavigation from "../components/layout/SidebarNavigation";

const MainLayout = () => {
  return (
    <div className="container flex gap-[24px]">
      <SidebarNavigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
