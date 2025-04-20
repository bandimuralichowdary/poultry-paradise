const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TestModel = mongoose.model("Test", TestSchema);

// GET all test entries
router.get("/", async (req, res) => {
  try {
    const data = await TestModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// POST a new test entry
router.post("/", async (req, res) => {
  const { name } = req.body;
  const newEntry = new TestModel({ name });
  try {
    await newEntry.save();
    res.json({ message: "Saved successfully" });
  } catch (error) {
    res.status(500).send("Error saving data");
  }
});

module.exports = router;