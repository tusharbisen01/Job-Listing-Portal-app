import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <ParticleBackground />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Find Your Dream Job 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The most modern job portal experience.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/jobs")}
        >
          Explore Jobs
        </motion.button>
      </section>

      {/* FEATURES */}
      <section className="features">
        {["Smart Search", "Fast Apply", "Dashboard", "Secure"].map((item, i) => (
          <motion.div
            className="card glass"
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </section>

    </div>
  );
}
