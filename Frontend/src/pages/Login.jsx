import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import API from "../api";   // ✅ IMPORTANT

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", {
        email,
        password,
      });

      // store token
      localStorage.setItem("token", res.data.token);

      alert("Login successful 🚀");
      window.location.href = "/dashboard";

    } catch (err) {
      alert(err.response?.data || "Login failed ❌");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="center">
        <motion.div className="card glass login-box">
          <h2>Login</h2>

          <input
            placeholder="Email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="primary" onClick={handleLogin}>
            Login
          </button>
        </motion.div>
      </div>
    </div>
  );
}
