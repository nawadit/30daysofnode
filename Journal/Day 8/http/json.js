const htp = require("node:http");

const server = htp.createServer((req, res) => {
  const superHero = {
    fName: "Bruce",
    lName: "Wayne",
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
  console.log(req);
});

server.listen(3001, () => {
  console.log("Server is now listening to port 3001. ");
});
