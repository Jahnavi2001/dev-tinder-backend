const bcrypt = require("bcrypt");
const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const validator = require("validator");
const { validateSignupData } = require("../utils/validation");

// Signup API
authRouter.post("/signup", async (req, res) => {
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
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!validator.isEmail(emailId)) {
      throw new Error("Invalid Credentials");
    }

    const user = await User.findOne({ emailId });
    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      // Create a JWT token
      const token = await user.getJWT();

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

// Logout API
authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  }).send("Logout Successfull!!");
});

module.exports = authRouter;
