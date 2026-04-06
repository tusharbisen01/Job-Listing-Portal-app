import React from "react";

export default function Home() {
  return (
    <div>
      <header className="navbar">
        <h2>JobPortal</h2>
        <div>
          <a href="/login">Login</a>
          <a href="#" className="btn">Register</a>
        </div>
      </header>

      <section className="hero">
        <h1>Find Your Dream Job 🚀</h1>
        <p>A modern platform connecting talent with opportunity</p>
        <button>Explore Jobs</button>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="grid">
          <div className="card">🔐 Authentication</div>
          <div className="card">🔍 Job Search</div>
          <div className="card">👤 Profile</div>
          <div className="card">📄 Applications</div>
          <div className="card">📋 Listings</div>
          <div className="card">📊 Dashboard</div>
        </div>
      </section>
    </div>
  );
}
