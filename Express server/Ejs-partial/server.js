const express = require("express");
const path = require("path");
const app = express();

const PORT = 3690;

// Serve the static files/folder
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
  res.render("home");
});

// About route
app.get("/about", (req, res) => {
  res.render("about");
});

// Contact route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Gallery route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
