const express = require("express");
const router = express.Router();
const catFactController = require("../controllers/catFactController");

// GET /api/catfacts/random
router.get("/random", catFactController.getRandomCatFact);

// GET /api/catfacts?limit=3
router.get("/", catFactController.getMultipleCatFacts);

module.exports = router;
