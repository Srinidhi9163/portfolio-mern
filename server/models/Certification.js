const mongoose = require("mongoose");

const certSchema = new mongoose.Schema({
  title: String,
  issuer: String,
  link: String
});

module.exports = mongoose.model("Certification", certSchema);