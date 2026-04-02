import { useState } from "react";
import axios from "axios";

function Admin() {
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  const addJob = async () => {
    await axios.post(
      "http://YOUR_EC2_IP:5000/api/jobs",
      { title },
      { headers: { Authorization: token } }
    );

    alert("Job Added");
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <input placeholder="Job Title" onChange={e => setTitle(e.target.value)} />
      <button onClick={addJob}>Add Job</button>
    </div>
  );
}

export default Admin;
