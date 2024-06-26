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

// Render userData route
app.get("/users", (req, res) => {
  // Dummy user content
  const userData = {
    userName: "Krishna",
    age: "23",
    isPremium: true,
    email: "krishna@gmail.com",
    isLogin: true,
  };
  res.render("userData", userData);
});

// Render Product page/route
app.get("/products", (req, res) => {
  const products = [
    { name: "Laptop", price: 999 },
    { name: "Mobile", price: 1999 },
    { name: "Watch", price: 1200 },
  ];
  console.log("Rendering products page with:", products);
  res.render("products", { products });
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
