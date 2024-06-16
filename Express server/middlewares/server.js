const express = require("express");
const app = express();
const PORT = 3690;

// * Serve static files
// app.use(express.static());
// !Pass incoming data
app.use(express.json());
app.use(express.urlencoded());

// ? Application level middleware

// * Logging details of every reques

const logRequest = (req, res, next) => {
  console.log(
    `Request Recieved at: ${new Date().toISOString()} for ${req.method} ${
      req.path
    }`
  );
  console.log("Am a Application");
  next();
};

app.use(logRequest);
//  Home Route

app.get("/books", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Welcome to this App",
  });
});
//  Create a book

app.post("/books", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Book created successfully",
  });
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
