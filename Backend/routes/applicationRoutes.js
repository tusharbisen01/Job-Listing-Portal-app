const express = require("express");
const router = express.Router();
const Application = require("../modules/Application");
const auth = require("../middleware/auth");

/* APPLY */
router.post("/apply/:jobId", auth, async (req, res) => {
  const app = new Application({
    userId: req.user.id,
    jobId: req.params.jobId,
  });

  await app.save();
  res.send("Applied");
});

/* MY APPLICATIONS */
router.get("/my-applications", auth, async (req, res) => {
  const apps = await Application.find({ userId: req.user.id });
  res.json(apps);
});

module.exports = router;
