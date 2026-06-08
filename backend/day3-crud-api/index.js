const express = require("express");

const app = express();
app.use(express.json());

// Make a Crud Operation //

let users = [
  {
    id: "5",
    name: "arjun",
  },
];

//////// Get Method ///////

app.get("/users", (req, res) => {
  res.json(users);
});

//////// POST Method ///////

app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser, "newUser.........");

  users.push(newUser);

  res.json({
    message: "User Created",
    users,
  });
});

////////// PUT method //////////

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((u) => u.id === id);

  if (user) {
    user.name = req.body.name;
  }

  res.json(users);
});

////////// DELETE method //////////

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.filter((u) => u.id !== id);

  res.json({
    message: "User deleted",
    user,
  });
});

app.listen(8000, () => {
  console.log("Server Running");
});
