const htp = require('node:http')



const server = htp.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World')
    console.log(req)
})

server.listen(3000, ()=>{
    console.log('Server is now listening to port 3000. ')
})