const express = require("express");
const router = express.Router();

// Default routes on http://localhost:3000/
router.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = router;
