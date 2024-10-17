// Import the express
const express = require("express");

// a proper way of connectiong database
const connectDB = require('./config/database')

// Create an instance of express
const app = express();

// aquiring user.js file in app.js
const User = require('./models/user');

app.use(express.json());

// get user by emailId
app.get('/user', async(req, res) =>{
  const userEmail = req.body.emailId;

  try{
    const user = await User.find({emailId : userEmail})
    if(user.length === 0){
      res.status(404).send('user not found');
    }else{
      res.send(user);
    }
  }catch(error){
    res.send('something went wrong')
  }
})

app.post('/signup', async(req, res) =>{

  // creating a new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send('congratutaionals, user added successfully...');
  } catch (error) {
    res.status(400).send('error saving user')
  }
})

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("server started on port no 3000");
});
