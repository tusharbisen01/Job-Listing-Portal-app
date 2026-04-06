import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="app-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">JobPortal</h2>

        <nav>
          <Link to="/">🏠 Home</Link>
          <Link to="/jobs">💼 Jobs</Link>
          <Link to="/dashboard">📊 Dashboard</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {children}
      </main>

    </div>
  );
}
