import { useEffect, useState } from "react";
import API from "../api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/jobs").then(res => setJobs(res.data));
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="page-title">Jobs</h1>

      {/* FILTER BAR */}
      <div className="filters">
        <input
          placeholder="Search jobs..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select>
          <option>All</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>DevOps</option>
        </select>
      </div>

      {/* JOB LIST */}
      <div className="job-grid">
        {filteredJobs.map(job => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>

            <button className="primary small">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
