require("dotenv").config();
const express = require("express");
const connectDB = require("./Config/connectDb");
const User = require("./models/User");

const app = express();

app.use(express.json());

connectDB();

////// POST //////////////////

app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/users", async (req, res) => {
  try {
    const userss = await User.find();

    res.status(200).json({
      message: "User Listing",
      userss,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen("5000", (req, res) => {
  console.log("Server Connected");
});
