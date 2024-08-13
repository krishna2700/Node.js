const express = require("express");
const app = express();
const PORT = 3690;

// Simulate an Error in the middleware

app.use((req, res, next) => {
  const isError = true;
  try {
    if (isError) {
      const error = new Error("Something went wrong");
      error.status = 500;
      next(error);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

// Regular Route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Main App",
  });
});

// Custom Error handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  //  * Setting the HTTP Status
  res.status(err.status || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
});

// Start the server

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
