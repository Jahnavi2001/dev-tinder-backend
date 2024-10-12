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

function validateEditProfileData(req) {
  const allowedEditFields = [
    "emailId",
    "skills",
    "about",
    "photoUrl",
    "firstName",
    "lastName",
    "age",
    "gender",
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );
  return isEditAllowed;
}

module.exports = {
  validateSignupData,
  validateEditProfileData,
};
