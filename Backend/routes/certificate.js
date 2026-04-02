const router = require("express").Router();

let certificates = [
  { id: "123", name: "Tushar", course: "DevOps" }
];

router.get("/:id", (req, res) => {
  const cert = certificates.find(c => c.id === req.params.id);
  res.json(cert || { message: "Not found" });
});

module.exports = router;
