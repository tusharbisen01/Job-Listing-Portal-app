const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const auth = require("../middleware/auth");

// Get jobs (protected)
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Add job (optional)
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.send("Job added");
});

module.exports = router;
