import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      {/* HERO */}
      <section className="hero">
        <div className="overlay" />

        <div className="hero-content">
          <h1>
            Land Your Dream Job <span>🚀</span>
          </h1>

          <p>
            Discover top opportunities, connect with companies, and build your future with confidence.
          </p>

          <div className="buttons">
            <button onClick={() => navigate("/jobs")}>
              Explore Jobs
            </button>

            <button className="outline" onClick={() => navigate("/login")}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Us</h2>

        <div className="feature-grid">
          <div className="card">
            <h3>🔍 Smart Search</h3>
            <p>Find jobs tailored to your skills instantly.</p>
          </div>

          <div className="card">
            <h3>⚡ Fast Apply</h3>
            <p>Apply to jobs in just one click.</p>
          </div>

          <div className="card">
            <h3>📊 Dashboard</h3>
            <p>Track your applications and interviews.</p>
          </div>

          <div className="card">
            <h3>🔐 Secure</h3>
            <p>Your data is safe and encrypted.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h2>10K+</h2>
          <p>Jobs Posted</p>
        </div>

        <div>
          <h2>5K+</h2>
          <p>Companies</p>
        </div>

        <div>
          <h2>20K+</h2>
          <p>Users</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Career Journey Today</h2>
        <button onClick={() => navigate("/jobs")}>
          Get Started
        </button>
      </section>

    </div>
  );
}
