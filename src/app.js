// Import the express
const express = require("express");

// Create an instance of express
const app = express();

// handling multiple response
app.use(
  "/user",
  (req, res, next) => {
    // res.json({ firstName: "Abhinav", lastName: "bhardwaaj" });
    next();
  },
  (req, res, next) => {
    // res.json("respone 2!");
    next();
  },
  (req, res, next) => {
    res.json("respone 3rd");
    next();                         //it's expexting one routes more handler
  }
);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("server started on port no 3000");
});
