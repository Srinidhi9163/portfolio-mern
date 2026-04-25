const router = require("express").Router();
const { getCertifications } = require("../controllers/certificationController");

// GET certifications
router.get("/", getCertifications);

module.exports = router;