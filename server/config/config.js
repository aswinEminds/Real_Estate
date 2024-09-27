const mongoose = require("mongoose");

require("dotenv").config();

exports.PORT = process.env.PORT;
exports.PASS_KEY = process.env.PASS_KEY;
exports.JWT_SECRET = process.env.JWT_SECRET;

exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected", conn.connection.host);
  } catch (err) {
    console.log(err);
  }
};
