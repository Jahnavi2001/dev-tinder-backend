const express = require("express");

const { connectDB } = require("./config/database");

const User = require('./models/user')

const app = express();

// Reads JSON request and converts it into the Javascript Object and put JS object back into the request
app.use(express.json())

app.post('/signup', async (req, res) => {

  // Creating a new instance of the User model
  const user = new User(req.body)

  try {
    await user.save()
    res.send('User added successfully')
  } catch(err) {
    res.status(400).send('Error saving the user:' + err.message)
  }

})

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is successfully listening on port 3000");
    });
    
  })
  .catch((err) => {
    console.log("Database cannot be connected!");
  });
