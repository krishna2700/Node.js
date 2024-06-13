const express = require("express");

// Create instance of express router
const userRoute = express.Router();

// * Using the route()
//  ! Getting all users
userRoute.route("/").get((req, res) => {
  res.json("Welcome to users route");
});

// ! Handle a specific user
userRoute
  .route("/:id")
  .get((req, res) => {
    res.json("Welcome to single user route");
  })
  .put((req, res) => {
    res.json("Welcome to update user route");
  })
  .delete((req, res) => {
    res.json("Welcome to delete user route");
  });

module.exports = userRoute;
