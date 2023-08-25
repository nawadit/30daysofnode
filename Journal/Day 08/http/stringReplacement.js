const htp = require("node:http");
const fs = require('node:fs')

const server = htp.createServer((req, res) => {
    
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync('./index.html', 'utf-8')
    let name = 'Nawadit'
    html = html.replace('{{name}}', name)
    res.end(html)
  
 
});

server.listen(3005, () => {
  console.log("Server is now listening to port 3005. ");
});
