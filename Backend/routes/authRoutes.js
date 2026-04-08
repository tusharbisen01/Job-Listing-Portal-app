const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../modules/User");

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Register request:", email);

    // check if user already exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).send("User already exists");

    // hash password
    const hashed = await bcrypt.hash(password, 10);

    // create user
    const user = new User({
      email,
      password: hashed,
    });

    await user.save();

    res.send("User created successfully ✅");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send("Invalid credentials");

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

module.exports = router;
