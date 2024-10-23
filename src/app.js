const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/database");

const authRouter = require("./routes/auth");
const requestRouter = require("./routes/request");
const profileRouter = require("./routes/profile");
const userRouter = require("./routes/user");

const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

// Reads JSON request and converts it into the Javascript Object and put JS object back into the request
app.use(express.json());

// Using this we can access the cookie data in the request (req.cookies)
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", requestRouter);
app.use("/", profileRouter);
app.use('/', userRouter)

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
