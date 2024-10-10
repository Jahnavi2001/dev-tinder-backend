const express = require("express");

const { connectDB } = require("./config/database");

const User = require("./models/user");

const app = express();

// Reads JSON request and converts it into the Javascript Object and put JS object back into the request
app.use(express.json());

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// Find all users by email
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({ emailId: req.body.emailId });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong: " + err.message);
  }
});

// Find one user by email
app.get("/userOne", async (req, res) => {
  try {
    const user = await User.findOne({ emailId: req.body.emailId });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong: " + err.message);
  }
});

// Find user by id
app.get("/userById", async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    // const user = await User.findById({ _id: req.body._id})
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong: " + err.message);
  }
});

// Feed API - GET /feed - Get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong: " + err.message);
  }
});

// Delete a user
app.delete("/user", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.body.userId);
    // const user = await User.findByIdAndDelete({_id: req.body.userId})
    res.send("Deleted user successfully");
  } catch (err) {
    res.status(400).send("Something went wrong: " + err.message);
  }
});

// Update a user
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["age", "skills", "photoUrl", "gender", "skills"]
    const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k))
    if(!isUpdateAllowed) { 
      throw new Error('Update not allowed')
    }
    if(data.skills.length > 10) {
      throw new Error('Skills must not greater than 10')
    }
    const user = await User.findByIdAndUpdate(userId, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log("user:", user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Update Failed: " + err.message);
  }
});

// Update a user using email
app.patch("/userByEmail", async (req, res) => {
  const emailId = req.body.emailId;
  const data = req.body;
  try {
    const user = await User.findOneAndUpdate({ emailId }, data);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong: " + err.message);
  }
});

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
