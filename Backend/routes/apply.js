const router = require("express").Router();
const mongoose = require("mongoose");

const Application = mongoose.model("Application", {
  userId: String,
  jobId: String
});

router.post("/", async (req, res) => {
  const app = new Application(req.body);
  await app.save();
  res.json(app);
});

router.get("/", async (req, res) => {
  const apps = await Application.find();
  res.json(apps);
});

module.exports = router;