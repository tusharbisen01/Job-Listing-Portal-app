export default function Dashboard() {
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h3>12</h3>
          <p>Applications</p>
        </div>

        <div className="stat-card">
          <h3>5</h3>
          <p>Saved Jobs</p>
        </div>

        <div className="stat-card">
          <h3>2</h3>
          <p>Interviews</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Recent Activity</h2>
        <ul>
          <li>Applied to Frontend Developer</li>
          <li>Saved Backend Role</li>
          <li>Interview scheduled</li>
        </ul>
      </div>
    </div>
  );
}
