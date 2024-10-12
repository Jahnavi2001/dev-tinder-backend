const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // Read the token from the req.cookies
    const { token } = req.cookies;

    if (!token) {
      throw new Error("Invalid Token");
    }

    // Validate the token
    const decodedData = await jwt.verify(token, "DEV@Tinder$179");

    // Find the user
    const user = await User.findById(decodedData._id);

    if (!user) {
      throw new Error("User does not exist");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

module.exports = {
  userAuth,
};
