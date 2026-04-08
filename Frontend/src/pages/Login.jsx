import { useState } from "react";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await API.post("/login", { email, password });
    localStorage.setItem("token", res.data.token);
    alert("Login success");
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
