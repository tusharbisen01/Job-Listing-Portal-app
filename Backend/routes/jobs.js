const router = require("express").Router();
const mongoose = require("mongoose");

const Job = mongoose.model("Job", {
  title: String,
  location: String,
  salary: String,
  description: String
});

router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;