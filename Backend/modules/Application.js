const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: String,
  jobId: String,
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
