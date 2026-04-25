const router = require("express").Router();
const { getQualifications } = require("../controllers/qualificationController");

// GET qualifications
router.get("/", getQualifications);

module.exports = router;