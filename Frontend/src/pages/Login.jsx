import React from "react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Navbar />

      <div className="center">
        <motion.div
          className="card glass login-box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
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

          <button className="primary">Login</button>
        </motion.div>
      </div>
    </div>
  );
}
