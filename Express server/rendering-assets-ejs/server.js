const express = require("express");
const path = require("path");
const app = express();

const PORT = 3690;

// Serve the static files/folder
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);
//  Set the view enjine to ejs
app.set("view engine", "ejs");
// Home route
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// About route
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

// Contact route
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Gallery route
app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
