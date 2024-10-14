// Import the express
const express = require("express");

// connectiong database
require('./config/database')

// Create an instance of express
const app = express();


// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("server started on port no 3000");
});
