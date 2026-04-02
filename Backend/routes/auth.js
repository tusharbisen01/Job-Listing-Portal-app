const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("User not found");

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).send("Wrong password");

  const token = jwt.sign(
    { id: user._id, email: user.email },
    "secret123",
    { expiresIn: "1d" }
  );

  res.json({ token });
});
