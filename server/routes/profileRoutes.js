const router = require("express").Router();
const { getProfile } = require("../controllers/profileController");

// GET profile data
router.get("/", getProfile);

module.exports = router;