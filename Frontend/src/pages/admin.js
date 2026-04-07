import { useState } from "react";
import API from "../api";

function Admin() {
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  const addJob = async () => {
    await API.post(
      "/jobs",
      { title, location: "India" },
      {
        headers: { Authorization: token }
      }
    );

    alert("Job Added");
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <input onChange={e => setTitle(e.target.value)} placeholder="Job Title" />
      <button onClick={addJob}>Add Job</button>
    </div>
  );
}

export default Admin;
