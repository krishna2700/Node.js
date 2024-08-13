const express = require("express");
const app = express();
const PORT = 3690;
const axios = require("axios");

// Route to fetch posts

app.get("/posts", async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(response.data);
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
  //  * Setting the HTTP Status
  if (err.response) {
    res.status(err.response.status);
    res.json({
      message: err.response.data.message,
    });
  } else if (err.request) {
    res.status(500);
    res.json({
      message: "Internal Server Error",
    });
  } else {
    res.status(503).json({
      message: "Service Unavailable",
    });
  }
});

// Start the server

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
