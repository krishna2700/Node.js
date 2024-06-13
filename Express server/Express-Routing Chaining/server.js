const express = require("express");
const userRoute = require("./routes/usersRoute");
const postRoute = require("./routes/postRouter");
const app = express();
const PORT = 3690;

// Home route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Main App",
  });
});

// Users route
app.use("/users", userRoute);

// Posts route
app.use("/posts", postRoute);
// Start the server

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
