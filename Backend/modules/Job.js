const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  type: String,
  description: String,
});

module.exports = mongoose.model("Job", jobSchema);
