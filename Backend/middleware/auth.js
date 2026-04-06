const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied");

  const verified = jwt.verify(token, process.env.JWT_SECRET);
  req.user = verified;

  next();
}

module.exports = auth;
