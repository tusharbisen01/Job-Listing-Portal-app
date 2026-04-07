import { useEffect, useState } from "react";
import API from "../api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
  API.get("/jobs")
    .then(res => setJobs(res.data))
    .catch(() => setJobs([])); // ✅ prevents crash
}, []);

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || job.category === category)
  );

  return (
    <div>
      <h1 className="title">Jobs</h1>

      <div className="filters">
        <input
          placeholder="Search jobs..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>DevOps</option>
        </select>
      </div>

      <div className="grid">
        {filtered.map(job => (
          <div className="card job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>

            <button className="primary small">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
