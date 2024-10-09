// Import the express
const express = require("express");

// Create an instance of express
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    res.json('now you are on the first route');
    next();
  }
);

app.use(
  "/user",
  (req, res, next) => {
    res.json("hello suraj !");
    next();
  }
);

app.use(
  "/user",
  (req, res, next) => {
    res.json("hello Abhinav how are you");
    // next();
  }
);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("server started on port no 3000");
});
