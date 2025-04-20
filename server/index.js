const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working fine! 🐔" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});