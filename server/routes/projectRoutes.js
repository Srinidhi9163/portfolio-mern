const router = require("express").Router();
const { getProjects } = require("../controllers/projectController");

// GET all projects
router.get("/", getProjects);

module.exports = router;