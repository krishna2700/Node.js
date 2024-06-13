const express = require("express");
const postRoute = express.Router();

postRoute.get("/", (req, res) => {
  res.json("Welcome to posts route");
});

module.exports = postRoute;
