const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the backend!");
  });
  
  // Start the server
  const PORT = process.env.PORT || 5004;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });