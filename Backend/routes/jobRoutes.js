const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const auth = require("../middleware/auth");

// Public jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Apply job
router.post("/apply", auth, async (req, res) => {
  const Application = require("../models/Application");

  const app = new Application({
    userId: req.user.id,
    jobId: req.body.jobId,
    resume: req.body.resume
  });

  await app.save();
  res.json({ msg: "Applied successfully" });
});

module.exports = router;
