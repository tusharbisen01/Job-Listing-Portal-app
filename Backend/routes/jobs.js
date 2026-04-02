const router = require("express").Router();

let jobs = [];

router.post("/", (req, res) => {
  jobs.push(req.body);
  res.json(jobs);
});

router.get("/", (req, res) => {
  res.json(jobs);
});

module.exports = router;
