require("dotenv").config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.MONGO_URI;

// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.MONGO_URI);

//   console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
// };

const connectDB = () => {
  return mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    if (err) {
      console.log("Connection to Database failed.");
    }
    else{
      console.log("Database connection successful.");
    }
  });
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDB;
