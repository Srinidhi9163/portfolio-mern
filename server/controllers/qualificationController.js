const Qualification = require("../models/Qualification");

exports.getQualifications = async (req, res) => {
  const data = await Qualification.find();
  res.json(data);
};