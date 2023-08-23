// Import the Express.js library
const express = require("express");

// Create an instance of the Express server
const server = express();

// Specify the port number for the server to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => console.log(`Server running on port ${port}`));

// Define a route for handling GET requests to "/json"
server.get("/json", (req, res) => {
  // Respond with a JSON array containing two objects
  res.send([
    { name: "nawadit", age: 20 },
    { name: "suyog", age: 19 },
  ]);
});
