const bcrypt = require("bcrypt");
const express = require("express");
const validator = require("validator");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");
const User = require("../models/user");

// Profile View API
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// Profile Edit API
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }
    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.send(`${loggedInUser.firstName}, your profile updated successfully!!`);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// Profile Forgot Password API
profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    const { password } = req.body;
    if(!validator.isStrongPassword(password)) {
      throw new Error('Please enter strong password: ' + password)
    }
    const newPasswordHash = await bcrypt.hash(password, 10);
    const loggedInUser = req.user;
    loggedInUser['password'] = newPasswordHash
    await loggedInUser.save()

    // We can also use findByIdAndUpdate
    // await User.findByIdAndUpdate(
    //   loggedInUser._id,
    //   { password: newPasswordHash },
    //   {
    //     runValidators: true,
    //   }
    // );
    res.send("Password updated successfully!!");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

module.exports = profileRouter;
