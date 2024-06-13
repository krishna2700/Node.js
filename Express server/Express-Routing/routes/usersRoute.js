const express = require("express");

// Create instance of express router
const userRoute = express.Router();

// ! Getting all users
userRoute.get("/", (req, res) => {
  res.json("Welcome to users route");
});

// ! Getting single user
userRoute.get("/:id", (req, res) => {
  res.json("Welcome to single user route");
});

// ! updating a user
userRoute.put("/:id", (req, res) => {
  res.json("Welcome to update user route");
});
// ! delete a user
userRoute.delete("/:id", (req, res) => {
  res.json("Welcome to delete user route");
});

module.exports = userRoute;
