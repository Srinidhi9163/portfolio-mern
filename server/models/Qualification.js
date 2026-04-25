const mongoose = require("mongoose");

const qualificationSchema = new mongoose.Schema({
  course: String,
  institute: String,
  status: String
});

module.exports = mongoose.model("Qualification", qualificationSchema);