
### Today I learned a little aboout express and how to handel request (GET request).
#### Introduction:
Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js. The module exports a function which we can call in other to work with express in our application.

#### Working:
You should call the function exported by express module and then call methods to write code as required. 

` const express = require('express')
const app = express()`

and now you can do things like:

``app.listen(port_no, ()=>{conosle.log(`express app listening to port ${port-no}`)})``

#### Handeling GET requests

GET request are the type of requests that a client makes to a server in order to retrieve some kind of resource from the database/ server. You can use express to handel your get requests like how I've done here.

`` app.get('/path', (req, res)=>{
//your code here
//res.sent(resource here)
})
``
