

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

//pm2 start noCluster.js -i 0 

//this didn't work, I dunno why but it keeps saying status stopped. 