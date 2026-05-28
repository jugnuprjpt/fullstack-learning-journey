const http = require("http");

const server = http.createServer((req, res) => {
  (res.write("Hello Jugnu"), res.end());
});

const fs = require("fs");

fs.writeFileSync("testok.txt", "Hello Node jugnu");

const path = require("path");

console.log(path.basename(__filename));

server.listen(5000, () => console.log("sever Running on port 5000"));
