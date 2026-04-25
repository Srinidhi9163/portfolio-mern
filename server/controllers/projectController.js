const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};