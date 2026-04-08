import { useEffect, useState } from "react";
import API from "../api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then(res => setJobs(res.data));
  }, []);

  const apply = async (id) => {
    await API.post(`/apply/${id}`);
    alert("Applied");
  };

  return (
    <div>
      <h2>Jobs</h2>

      {jobs.map(job => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <button onClick={() => apply(job._id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}
