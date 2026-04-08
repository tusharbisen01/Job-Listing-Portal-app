import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      <ParticleBackground />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Find Your Dream Job 🚀</h1>

          <p>
            Discover opportunities, connect with companies,
            and build your future with confidence.
          </p>

          <div className="buttons">
            <button onClick={() => navigate("/jobs")}>
              Explore Jobs
            </button>

            <button className="outline" onClick={() => navigate("/login")}>
              Get Started
            </button>
          </div>
        </motion.div>
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

      {/* STATS */}
      <section className="stats">
        <div><h2>10K+</h2><p>Jobs</p></div>
        <div><h2>5K+</h2><p>Companies</p></div>
        <div><h2>20K+</h2><p>Users</p></div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Career Journey Today</h2>
        <button onClick={() => navigate("/jobs")}>
          Get Started
        </button>
      </section>

    </div>
  );
}
