const express = require("express");
const router = express.Router();

// About routes on http://localhost:3000/about/
router
  .get("/", (req, res) => {
    res.send("About Page!");
  })
  .get("/user/:userName", (req, res) => {
    res.send("About the user: " + req.params.userName);
  });

module.exports = router;
