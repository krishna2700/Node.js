const express = require("express");
const app = express();
const PORT = 3690;

// Simulate an Error in the middleware

app.use((req, res, next) => {
  const isError = true;
  if (isError) {
    const error = new Error("Something went wrong");
    error.status = 500;
    next(error);
  } else {
    next();
  }
});

// Regular Route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Main App",
  });
});

// Start the server

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
