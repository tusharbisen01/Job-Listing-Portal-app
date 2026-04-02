import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://YOUR_EC2_IP:5000/api/jobs")
      .then(res => setJobs(res.data));
  }, []);

  return (
    <div className="container">
      <h1>🚀 Job Portal</h1>

      {jobs.map((job, i) => (
        <div className="card" key={i}>
          <h3>{job.title}</h3>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
