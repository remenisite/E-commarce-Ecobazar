"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Users, DollarSign, Package } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4000 },
  { name: "May", sales: 6000 },
];

export default function DashboardHome() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button>Download Report</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-sm rounded-2xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Sales</p>
              <h2 className="text-xl font-bold">$12,450</h2>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </CardContent>
        </Card>

        <Card className="shadow-sm rounded-2xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Orders</p>
              <h2 className="text-xl font-bold">320</h2>
            </div>
            <ShoppingCart className="w-8 h-8 text-blue-500" />
          </CardContent>
        </Card>

        <Card className="shadow-sm rounded-2xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Customers</p>
              <h2 className="text-xl font-bold">1,200</h2>
            </div>
            <Users className="w-8 h-8 text-purple-500" />
          </CardContent>
        </Card>

        <Card className="shadow-sm rounded-2xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Products</p>
              <h2 className="text-xl font-bold">85</h2>
            </div>
            <Package className="w-8 h-8 text-orange-500" />
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card className="shadow-sm rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card className="shadow-sm rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="py-2">Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3">#1234</td>
                <td>John Doe</td>
                <td className="text-green-500">Completed</td>
                <td>$120</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">#1235</td>
                <td>Jane Smith</td>
                <td className="text-yellow-500">Pending</td>
                <td>$80</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">#1236</td>
                <td>Alex Brown</td>
                <td className="text-red-500">Cancelled</td>
                <td>$60</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
