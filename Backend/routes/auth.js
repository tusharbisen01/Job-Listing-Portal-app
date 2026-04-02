const router = require("express").Router();   // ✅ THIS WAS MISSING
const User = require("../modules/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send("User not found");

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(400).send("Wrong password");

    const token = jwt.sign(
      { id: user._id },
      "secret123",
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;   // ✅ ALSO REQUIRED
