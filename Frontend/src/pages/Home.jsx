import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h1>Find Your Dream Job 🚀</h1>
        <p>Connecting talent with opportunity</p>
        <Link to="/jobs">
          <button className="primary">Explore Jobs</button>
        </Link>
      </section>

      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="grid">
          <div className="card">🔐 Secure Login</div>
          <div className="card">⚡ Fast Search</div>
          <div className="card">📊 Smart Dashboard</div>
        </div>
      </section>
    </div>
  );
}
