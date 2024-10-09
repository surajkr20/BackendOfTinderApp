// Import the express
const express = require("express");
const {AdminAuth, UserAuth} = require('./middlewares/Auth')

// Create an instance of express
const app = express();

app.use('/admin',AdminAuth);
app.use('/admin',UserAuth);

// Route that will be accessed if user is authorized
app.get('/user', UserAuth, (req, res) => {
    res.send('welcome user brother you are already an authorized person');
});

app.post('/user/login', AdminAuth, (req, res) =>{
    res.send('congratulations your are successfully loged in')
})

app.get('/admin/allData',(req, res) =>{
    // logic of checking if the request is authorized
    const token = 'xyz';
    const adminAuthorized = token === 'xyz';
    if(adminAuthorized){
        res.json('welcome Abhinav, you are already authorized person');
    }else{
        res.status(404).send("sorry you are an unauthorized person! please get back")
    }
    res.send('acepted you inmitation')
})

app.get('/user/admin/delete',(req, res) =>{
    // logic of checking if the request is authorized
    const token = 'xyzz';
    const adminAuthorized = token === 'xyz';
    if(adminAuthorized){
        res.json('you unauthorized person is deleted');
    }else{
        res.status(404).send("sorry we can't proceed")
    }
})

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("server started on port no 3000");
});
