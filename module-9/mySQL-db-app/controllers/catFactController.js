const axios = require("axios");

// GET /api/catfacts/random
const getRandomCatFact = async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    res.json({ result: 200, fact: response.data.fact });
  } catch (err) {
    res.status(500).json({ result: 500, error: err.message });
  }
};

// GET /api/catfacts?limit=3
const getMultipleCatFacts = async (req, res) => {
  const limit = req.query.limit || 1;
  try {
    const response = await axios.get(
      `https://catfact.ninja/facts?limit=${limit}`
    );
    res.json({ result: 200, facts: response.data.data });
  } catch (err) {
    res.status(500).json({ result: 500, error: err.message });
  }
};

module.exports = { getRandomCatFact, getMultipleCatFacts };
