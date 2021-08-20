const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf8");
  // const objData = JSON.parse(data);

  if (req.url == "/") {
    res.end("hello from the home side");
  } else if (req.url == "/about") {
    res.end("hello from the about side");
  } else if (req.url == "/contact") {
    res.end("hello from the contact side");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "Content-type": "application/json" });
    // res.end(objData[0].phone);
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 error page </h1>");
  }
});

server.listen(8000, () => {
  console.log("listenning on port 8000");
});
