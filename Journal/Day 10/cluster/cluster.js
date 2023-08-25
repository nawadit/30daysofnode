const cluster = require('node:cluster')
const OS = require('node:os')
const http = require("node:http");
// const { ppid } = require('node:process');

// console.log(OS.cpus().length)
if(cluster.isMaster){
    console.log(`master is running with ppid ${process.ppid}`)
    cluster.fork();
    // cluster.fork();
}
else{
    const server = http.createServer((req, res)=>{
        if(req.url == "/"){
            res.writeHead(200, "sucess", {'Content-Type':'text/plain'})
            res.end("homepage")
        }
        else if(req.url == '/slow-page'){
            for(let i = 0; i<60000000; i++){} //simulating long cpu work
             res.writeHead(200, "sucess", {'Content-Type':'text/plain'})
            res.end("slow-page")
        }
    })

    server.listen(3000, ()=>{
        console.log('server is running on port 3000')
    })

}