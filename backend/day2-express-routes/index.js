const express = require("express");

const app = express();

// ------------- // Get Method // ------------------ //

app.get("/", (req, res) => {
  res.send("Get data success");
});

app.get("/about", (req, res) => {
  res.send("Get About page");
});

app.get("/home", (req, res) => {
  res.send("Get Home page");
});

app.get("/contact", (req, res) => {
  res.send("Get Contact page");
});

app.get("/profile", (req, res) => {
  res.json({
    name: "Jugnu",
    age: "34",
    occupation: "Teacher",
  });
});

// ------------- // get by ID Method // ------------------ //

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  res.send(`User ID is ${userId}`);
});

app.get("/search", (req, res) => {
  const name = req.query.name;

  res.send(`Searching for ${name}`);
});

app.get("/profile", (req, res) => {
  res.json({
    name: "Vishal",
    role: "Frontend Developer",
    city: "Ahmedabad",
  });
});

app.get("/error", (req, res) => {
  res.status(404).send("Page Not Found");
});

// ------------- // get by name Method // ------------------ //

app.get("/search", (req, res) => {
  const name = req.query.name;

  res.send(`Searching for ${name}`);
});

// ------------- // Post Method // ------------------ //

app.post("/users", (req, res) => {
  res.send("User Created");
});

app.post("/usersList", (req, res) => {
  res.json({
    name: "Jugnu",
    age: 35,
  });
});

app.listen(8000, () => {
  console.log("Server Started");
});
