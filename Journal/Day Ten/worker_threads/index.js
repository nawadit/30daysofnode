const http = require("node:http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Homepage");
  } else if (req.url === "/slowpage") {
    const worker = new Worker('./worker_thread.js');
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`slow page j = ${j}`);
    });
  }
});

const port = process.env.PORT || 2000 //for deploying~

server.listen(port, () => {
  console.log(`server is listening in port no 2000`);
});

