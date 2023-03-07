const express = require("express");
const router = express.Router();

const User = require("../Models/User");

router
  .get("/", (req, res) => {
    User.findAll().then((users) => {
      res.send(users);
    });
  })
  .post("/", (req, res) => {
    User.create({
      name: req.body.name,
      age: req.body.age,
    }).then((user) => {
      res.send(user);
    });
  });

module.exports = router;
