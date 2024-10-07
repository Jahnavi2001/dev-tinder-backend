const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jahnavi_vuyyuru:rBfFNENzy9tq1c6M@learnnode.7iknf.mongodb.net/devTinder"
  );
};

module.exports = {
  connectDB
}
