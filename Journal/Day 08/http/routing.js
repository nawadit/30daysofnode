const htp = require("node:http");
const fs = require("node:fs");
const jsonFile = require("./jsonfile.json")

const server = htp.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      let html = fs.readFileSync("./index.html", "utf-8");
      let name = "Nawadit";
      html = html.replace("{{name}}", name);
      res.end(html);
      break;
    case "/json" :
        res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(jsonFile));
  }
});

server.listen(3015, () => {
  console.log("Server is now listening to port 3015. ");
});
