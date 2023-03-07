const controller = require("../Controllers/Todo.controller");
const express = require("express");
const router = express.Router();

router
  .get("/", controller.getAllTodos)
  .post("/", controller.createTodo)
  .put("/:id", controller.updateTodo)
  .delete("/:id", controller.deleteTodo);

module.exports = router;
