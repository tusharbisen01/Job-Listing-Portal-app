import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">

      <div className="hero-content">
        <h1>
          Find Your Dream Job <span>🚀</span>
        </h1>

        <p>
          Discover top companies, apply instantly, and track your career growth.
        </p>

        <div className="buttons">
          <button onClick={() => navigate("/jobs")}>Explore Jobs</button>
          <button className="outline" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>

    </div>
  );
}
