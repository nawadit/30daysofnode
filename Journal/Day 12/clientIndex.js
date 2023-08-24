// Import Axios if you're using a bundler like webpack or if you're in a Node.js environment
// const axios = require('axios');

// Define the URL where you want to make the POST request
const url = "http://localhost:2000/groceries";

// Data you want to send in the POST request
const axios = require("axios");
const postData = {
  name: "Coffee",
  quantity: 34,
};

// Make the POST request using Axios
axios
  .post(url, postData)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
