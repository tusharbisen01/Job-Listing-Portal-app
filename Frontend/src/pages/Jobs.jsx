import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  // Dummy data (replace with API later)
  useEffect(() => {
    setJobs([
      { id: 1, title: "Frontend Developer", company: "Google", type: "Remote" },
      { id: 2, title: "Backend Developer", company: "Amazon", type: "Onsite" },
      { id: 3, title: "DevOps Engineer", company: "Microsoft", type: "Hybrid" },
    ]);
  }, []);

  const filtered = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div style={{ paddingTop: "120px", paddingInline: "40px" }}>
        <h1 className="title">Find Jobs</h1>

        {/* SEARCH */}
        <input
          className="glass input"
          placeholder="Search jobs..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* JOB LIST */}
        <div className="job-grid">
          {filtered.map((job, i) => (
            <motion.div
              key={job.id}
              className="card glass job-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <span>{job.type}</span>

              <button className="primary">Apply</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
