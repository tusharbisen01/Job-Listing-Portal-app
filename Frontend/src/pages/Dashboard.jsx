import React from "react";
import Dashboard from "./pages/Dashboard";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const stats = [
    { title: "Applications", value: 12 },
    { title: "Saved Jobs", value: 5 },
    { title: "Interviews", value: 2 },
  ];

  return (
    <div>
      <Navbar />

      <div style={{ paddingTop: "120px", paddingInline: "40px" }}>
        <h1 className="title">Dashboard</h1>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="card glass stat-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h2>{stat.value}</h2>
              <p>{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
