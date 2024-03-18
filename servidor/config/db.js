const mongoose = require('mongoose');
require("dotenv").config({ path: '.env' });

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {

    });
    console.log("Database connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
