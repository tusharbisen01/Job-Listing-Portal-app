import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>JobPortal</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </nav>
  );
}
