const statingTime = Date.now()
const https = require('node:https')
const maxCalls = 16
;

for(let iteration = 0; iteration<maxCalls; iteration++){

    https.request('https://www.google.com', res =>{
        res.on('data', ()=>{});
        res.on('end', ()=>{
            console.log(`Request: ${iteration+1},`, Date.now() - statingTime)
        })
    }).end()
}