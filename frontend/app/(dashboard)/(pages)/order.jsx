import React from "react";
import OrderHistory from "../components/order/OrderHistory";
import RecentOrder from "../components/dashboard/RecentOrder";

const Order = () => {
  return (
    <div id="order" className="w-full">
      <OrderHistory />
    </div>
  );
};

export default Order;
