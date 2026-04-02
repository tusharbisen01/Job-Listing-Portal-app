const router = require("express").Router();
const auth = require("../middleware/auth");
const Job = require("../models/Job");

// CREATE JOB
router.post("/", auth, async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET JOBS
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
