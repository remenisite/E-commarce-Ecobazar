// OrderHistory.jsx
import React from "react";
import { FaEye } from "react-icons/fa";

const orders = [
  { id: "#738", date: "8 Sep, 2024", total: "$135.00 (5 Products)", status: "Processing" },
  { id: "#703", date: "24 May, 2020", total: "$25.00 (1 Product)", status: "on the way" },
  { id: "#130", date: "22 Oct, 2020", total: "$250.00 (4 Products)", status: "Completed" },
  { id: "#561", date: "1 Feb, 2020", total: "$35.00 (1 Products)", status: "Completed" },
  { id: "#536", date: "21 Sep, 2020", total: "$578.00 (13 Products)", status: "Completed" },
  { id: "#492", date: "22 Oct, 2020", total: "$345.00 (7 Products)", status: "Completed" },
];

const RecentOrder = () => {
  return (
    <div className="border-[#E5E5E5] border pb-[24px] px-[24px] pt-[16px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-medium font-main text-text">Recent Order History</h2>
        <button className="text-[16px] font-medium font-main text-green hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className=" text-[14px] font-medium font-main text-[#4D4D4D] bg-[#F2F2F2]">
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Total</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-[14px] font-normal font-main text-[#333333]">{order.id}</td>
                <td className="py-3 px-4 text-[14px] font-normal font-main text-[#333333]">{order.date}</td>
                <td className="py-3 px-4 text-[14px] font-medium font-main text-[#333333]">{order.total}</td>
                <td className="py-3 px-4 text-[14px] font-normal font-main text-[#333333]"> {order.status} </td>
                <td className="py-3 px-4 text-[16px] font-medium font-main text-green hover:underline"> View Details</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;