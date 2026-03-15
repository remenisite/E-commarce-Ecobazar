import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="/order" element={<Order />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
