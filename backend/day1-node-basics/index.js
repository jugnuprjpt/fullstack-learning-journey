const http = require("http");

const server = http.createServer((req, res) => {
  // Home Route
  if (req.url === "/") {
    res.write("Welcome to Home Page");
    res.end();
  }

  // About Route
  else if (req.url === "/about") {
    res.write("Welcome to About Page");
    res.end();
  }

  // Contact Route
  else if (req.url === "/contact") {
    res.write("Welcome to Contact Page");
    res.end();
  } else if (req.url === "/services") {
    res.write("Welcome to Services Page");
    res.end();
  }

  // Not Found Route
  else {
    res.write("404 Page Not Found");
    res.end();
  }
});

const fs = require("fs");

fs.writeFileSync("testok.txt", "Hello Node jugnu");

const path = require("path");

console.log(path.basename(__filename));

server.listen(5000, () => console.log("sever Running on port 5000"));
