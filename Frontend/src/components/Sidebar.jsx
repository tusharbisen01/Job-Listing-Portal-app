import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <h2 className="logo">JobPortal</h2>

      <nav>
        <Link className={pathname === "/jobs" ? "active" : ""} to="/jobs">Jobs</Link>
        <Link className={pathname === "/dashboard" ? "active" : ""} to="/dashboard">Dashboard</Link>
      </nav>
    </aside>
  );
}
