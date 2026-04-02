const router = require("express").Router();   // ✅ REQUIRED
const auth = require("../middleware/auth");

let jobs = [];

// CREATE JOB (protected)
router.post("/", auth, (req, res) => {
  jobs.push(req.body);
  res.json(jobs);
});

// GET JOBS
router.get("/", (req, res) => {
  res.json(jobs);
});

module.exports = router;   // ✅ REQUIRED
