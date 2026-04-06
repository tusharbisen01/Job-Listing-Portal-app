import React, { useEffect, useState } from "react";
import API from "../api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <div key={job._id} className="card">
          {job.title}
        </div>
      ))}
    </div>
  );
}
