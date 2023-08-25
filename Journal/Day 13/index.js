const express = require('express')
const app = express();
const myRouter = require('./router.js')

app.use(myRouter)
app.listen(3000, ()=>console.log(`app is listening on port 3000`))
