import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://YOUR_EC2_IP:5000/api/jobs")
      .then(res => setJobs(res.data));
  }, []);

  return (
    <div>
      <h1>Job Portal</h1>
      {jobs.map((job, i) => (
        <p key={i}>{job.title}</p>
      ))}
    </div>
  );
}

export default App;
