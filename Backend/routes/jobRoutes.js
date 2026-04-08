const express = require("express");
const router = express.Router();
const Job = require("../modules/Job");

router.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.send("Job added");
});

module.exports = router;
