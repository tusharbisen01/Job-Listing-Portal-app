import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <h2 className="title">Dashboard</h2>

      <div className="grid">
        <div className="card">📄 Applications: 12</div>
        <div className="card">💾 Saved Jobs: 5</div>
        <div className="card">📅 Interviews: 2</div>
      </div>
    </div>
  );
}
