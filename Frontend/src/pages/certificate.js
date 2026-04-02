import { useState } from "react";
import axios from "axios";

function Certificate() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const search = async () => {
    const res = await axios.get(`http://YOUR_EC2_IP:5000/api/certificate/${id}`);
    setData(res.data);
  };

  return (
    <div className="container">
      <h2>Certificate Verification</h2>

      <input onChange={e => setId(e.target.value)} placeholder="Enter ID" />
      <button onClick={search}>Search</button>

      {data && <p>{data.name} - {data.course}</p>}
    </div>
  );
}

export default Certificate;
