const express = require("express");

// ! instancee

const app = express();
// * Create the PORT

const PORT = 3690;

// * Define the router handler
app.get("/", (req, res) => {
  res.send("Hello World");
});

// * Start the server
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});

console.log(app);
