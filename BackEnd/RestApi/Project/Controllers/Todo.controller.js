const Todo = require("../Models/Todo.model");

const getAllTodos = async (req, res) => {
  const todos = await Todo.findAll();
  res.send(todos);
};

const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.sendStatus(200);
};

const updateTodo = async (req, res) => {
  const todo = await Todo.findOne({ where: { id: req.params.id } });
  const result = await Todo.update(
    {
      title: req.body.title || todo.title,
      description: req.body.description || todo.description,
      completed: req.body.completed || todo.completed,
    },
    { where: { id: req.params.id } }
  );
  res.send(result);
};

const deleteTodo = async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
