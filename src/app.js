const express = require("express");

const { connectDB } = require("./config/database");

const User = require("./models/user");

const bcrypt = require("bcrypt");

const validator = require("validator");

const app = express();

const { validateSignupData } = require("./utils/validation");

const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");

const { userAuth } = require("./middlewares/auth");

// Reads JSON request and converts it into the Javascript Object and put JS object back into the request
app.use(express.json());

app.use(cookieParser());

// Signup API
app.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignupData(req.body);

    // Encrypt the password
    const passwordHash = await bcrypt.hash(req.body.password, 10);

    // Creating a new instance of a User model
    const user = new User({
      firstName: req.body.firstName,
      emailId: req.body.emailId,
      lastName: req.body.lastName,
      password: passwordHash,
    });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// Login API
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!validator.isEmail(emailId)) {
      throw new Error("Invalid Credentials");
    }

    const user = await User.findOne({ emailId });
    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await user.validatePassword(password)

    if (isPasswordValid) {
      // Create a JWT token
      const token = await user.getJWT()

      // Add the token to the cookie and send the response back to the user
      res.cookie("token", token, { expires: new Date(Date.now() + 900000) });

      res.send("Login Successfull!!");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// Profile API
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// Send connection request API
app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user.firstName + " Sent connection request");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
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
