const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello, world!");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is the about page.");
    res.end();
  } else if (req.url === "/contact") {
    res.write("This is the contact page.");
    res.end();
  } else {
    res.write("404 Not Found");
    res.end();
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
