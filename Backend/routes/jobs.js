const auth = require("../middleware/auth");

router.post("/", auth, (req, res) => {
  jobs.push(req.body);
  res.json(jobs);
});
