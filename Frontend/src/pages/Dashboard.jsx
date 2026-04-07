import React from "react";
export default function Dashboard() {
  return (
    <div>
      <h1 className="title">Dashboard</h1>

      <div className="stats">
        <div className="card stat">
          <h2>12</h2>
          <p>Applications</p>
        </div>

        <div className="card stat">
          <h2>5</h2>
          <p>Saved Jobs</p>
        </div>

        <div className="card stat">
          <h2>2</h2>
          <p>Interviews</p>
        </div>
      </div>
    </div>
  );
}
