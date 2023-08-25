const htp = require("node:http");
const fs = require('node:fs')

const server = htp.createServer((req, res) => {
    
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream('./index.html', 'utf-8').pipe(res)
  
 
});

server.listen(3002, () => {
  console.log("Server is now listening to port 3002. ");
});
