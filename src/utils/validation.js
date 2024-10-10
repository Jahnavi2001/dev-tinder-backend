const validator = require("validator");

function validateSignupData(req) {
  const { firstName, lastName, emailId, password } = req;
  if (!firstName || !lastName) {
    throw new Error("Invalid Name");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Invalid Email");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
}

module.exports = {
  validateSignupData,
};
