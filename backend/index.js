const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const connectDB = require("./utils/db");
const userRoute = require('./routes/user.routes.js')
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
 app.use("/api/auth/",userRoute);

  // Start the server
  const PORT = process.env.PORT || 5004;
  app.listen(PORT, () => {
    connectDB() ;
    console.log(`Server running on port ${PORT}`);
  });