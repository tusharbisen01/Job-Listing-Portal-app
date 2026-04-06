import React, { useEffect, useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs")
      .then(res => setJobs(res.data))
      .catch(() => alert("Error fetching jobs"));
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="title">Available Jobs</h2>

      <div className="grid">
        {jobs.map(job => (
          <div key={job._id} className="card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button className="primary">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
