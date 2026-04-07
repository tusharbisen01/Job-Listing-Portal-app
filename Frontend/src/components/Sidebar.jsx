import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const active = (path) => pathname === path ? "active" : "";

  return (
    <aside className="sidebar">
      <h2 className="logo">JobPortal</h2>

      <nav>
        <Link className={active("/")} to="/">Home</Link>
        <Link className={active("/jobs")} to="/jobs">Jobs</Link>
        <Link className={active("/dashboard")} to="/dashboard">Dashboard</Link>
      </nav>
    </aside>
  );
}
