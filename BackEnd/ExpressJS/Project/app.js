// Require Routes
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");

// Set up ExpressJS
const express = require("express");
const app = express();

// Use routes from Routes directory
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

// Create server on port 3000
app.listen(3000, () => {
  console.log("Listening on http://localhost:3000\n");
  console.log(
    "Try to vist these pages: \n" +
      "Homepage: http://localhost:3000/\n" +
      "About user: http://localhost:3000/about/user/Bob\n" +
      "Contact to user: http://localhost:3000/contact/user/Bob\n"
  );
});
