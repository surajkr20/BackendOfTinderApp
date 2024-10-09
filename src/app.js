
// Import the express
const express = require('express');

// Create an instance of express
const app = express();

// routing using (?, +, (), *) 

app.get('/about', (req, res) =>{
    res.send("this is your about data")
})

// using of question mark(? previes letter is optional)
app.get('/ab?c',(req, res) =>{
    res.send("connection successful")
})
// + means you increase the no of b multiple times but response is send same
app.get('/ab+c',(req, res) =>{
    res.send("connection successful 2")
})

// * means use can any letters, words sentences between ab and c, it will be perfectly work
app.get('/ab*c',(req, res) =>{
    res.send("connection multiple times 3")
})

// you can use any word etc before fly and end with fly
app.get(/.*fly$/,(req, res) =>{
    res.send("connection multiple times 4")
})

// means you can any word, latter sentence between //, and you see the result is same.
app.get(/a/,(req, res) =>{
    res.send("connection multiple times 5")
})

// data from url
app.get('/user',(req, res) =>{
    console.log(req.query)
    res.send("it's a user data")
})

app.get('/user/:707',(req, res) =>{
    console.log(req.params)
    res.send("another data")
})

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("server started on port no 3000");
});
