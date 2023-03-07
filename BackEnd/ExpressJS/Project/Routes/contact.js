const express = require("express");
const router = express.Router();

// Contact routes on http://localhost:3000/contact/
router
  .get("/", (req, res) => {
    res.send("Contact Page!");
  })
  .get("/user/:userName", (req, res) => {
    res.send("Contact to the user: " + req.params.userName);
  });

module.exports = router;
