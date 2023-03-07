const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const todoRouter = require("./Routes/Todo.routes");

// Parsing the JSON format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow Cross Origin Resource Sharing
app.use(cors());

// API Routes
app.use("/api/todos", todoRouter);

// Server
app.listen(3001, () => {
  console.log("Listening on http://localhost:3000/");
});
