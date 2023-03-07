const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRouter = require("./Routes/User.routes");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.listen(3001, () => {
  console.log("REST API running on port 3000.");
});
