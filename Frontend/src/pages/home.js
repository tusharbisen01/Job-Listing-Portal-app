import { useEffect, useState } from "react";
import API from "../api";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div className="container">
      <h1>🚀 Job Portal</h1>

      {jobs.map(job => (
        <div className="card" key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
