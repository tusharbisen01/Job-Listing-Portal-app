import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">JobPortal</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="glass">
          <h1>
            Build Your <span>Dream Career</span> 🚀
          </h1>
          <p>AI-powered job discovery platform for modern professionals</p>

          <div className="buttons">
            <Link to="/jobs">
              <button className="primary">Explore Jobs</button>
            </Link>

            <Link to="/login">
              <button className="secondary">Get Started</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Platform Highlights</h2>

        <div className="grid">
          <div className="card">
            <h3>⚡ AI Matching</h3>
            <p>Smart job recommendations based on your profile</p>
          </div>

          <div className="card">
            <h3>📊 Analytics</h3>
            <p>Track applications and performance insights</p>
          </div>

          <div className="card">
            <h3>🔐 Secure Auth</h3>
            <p>JWT-based secure authentication system</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Job Portal • Designed for Professionals</p>
      </footer>

    </div>
  );
}
