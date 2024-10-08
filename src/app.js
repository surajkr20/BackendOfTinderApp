
// Import the express
const express = require('express');

// Create an instance of express
const app = express();

// First route: responds to requests made to the root URL "/"
app.get("/", (req, res) => {
    res.send("hello from the server");
});

// Second route: responds to requests made to "/hello"
app.get("/hello", (req, res) => {
    res.send("hello hello hello.....");
});

app.get("/test", (req, res) => {
    res.send("hello test.....");
});

app.get("/contact", (req, res) => {
    res.send("hello contact me.....");
});

// creating multiples routes
app.use('/user',(req, res) =>{
    res.send('i am from user')
})

app.get('/user',(req, res) =>{
    res.send({firsname : 'suraj', lastName : 'kumar'})
})

app.post('/user',(req, res) =>{
    console.log({firsname : 'suraj', lastName : 'kumar'})
    res.send("user data")
})

app.delete('/user',(req, res) =>{
    res.send("deleted successfully")
})


// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("server started on port no 3000");
});
