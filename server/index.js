const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working fine! 🐔" });
});

// Add a route for the root URL "/"
app.get("/", (req, res) => {
  res.send("Welcome to the Poultry Paradise API! 🐔");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});