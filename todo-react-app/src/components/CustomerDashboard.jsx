import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ------------------ MAIN COMPONENT ------------------
export default function CustomerDashboard() {
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 4500 },
    { month: "Apr", sales: 5000 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 2400 },
    { month: "Feb", revenue: 1398 },
    { month: "Mar", revenue: 9800 },
    { month: "Apr", revenue: 3908 },
  ];

  const statusData = [
    { name: "Active", value: 400 },
    { name: "Inactive", value: 250 },
    { name: "Pending", value: 100 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* ---------------- CONTENT ---------------- */}
      <main className="flex-grow max-w-7xl mx-auto p-8 space-y-10">
        {/* Title */}

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-semibold">Total Customers</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">1,250</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">860</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-semibold">Pending Issues</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">32</p>
          </motion.div>
        </div>

        {/* Grid: Bar + Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sales Bar Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Line Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Revenue Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10B981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Customer Status
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {statusData.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
