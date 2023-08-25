// Importing necessary modules
const { Router } = require("express"); // Importing Router from the 'express' module
const router = Router(); // Creating an instance of the Router
const fs = require("node:fs"); // Importing the 'fs' module for file system operations

// Reading and parsing data from the JSON file
const data = JSON.parse(
  fs.readFileSync("./database.json", "utf-8", () =>
    console.log(`data is being read`)
  )
);

// Defining a GET route
router.get("", (req, res) => {
  const queries = req.query; // Extracting query parameters from the request
  let response = null; // Initializing the response variable

  // Looping through each query parameter
  for (const query in queries) {
    // Filtering data based on the query parameter value
    response = data.filter((fruit) => fruit[query] == queries[query]);
  }
  if(response.length)
  res.send(response); // Sending the response
  else
  res.send('404 data not found')
});

// Exporting the router
module.exports = router;
