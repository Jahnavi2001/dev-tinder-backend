const mongoose = require("mongoose");

const validator = require("validator")

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      required: true
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if(!validator.isEmail(value)) {
          throw new Error('Invalid Email' + value)
        }
      }
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if(!validator.isStrongPassword(value)) {
          throw new Error('Enter a Strong Password:' + value)
        }
      }
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "others"],
        message: '{VALUE} is not a valid gender'
      },
      validate(value) {
        if(!['male', 'female', 'others'].includes(value)) {
          throw new Error('Gender is not valid')
        }
      }
    },
    photoUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5hhP3Gu-5htmJL8s7erHyll_KDuNfjgVzA&s",
      validate(value) {
        if(!validator.isURL(value)) {
          throw new Error('Invalid PhotoURL' + value)
        }
      }
    },
    about: {
      type: String,
      default: "This is a default about of the user!",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.getJWT = async function () {
  const user = this
  const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$179", {
    expiresIn: "7d",
  });
  return token
}

userSchema.methods.validatePassword = async function (passwordInputByUser) {
  const user = this
  const passwordHash = user.password
  const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash)
  return isPasswordValid
}

module.exports = new mongoose.model("User", userSchema);
