const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const PORT = 3690;

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});

// Connect to MongoDB

mongoose
  .connect(
    "mongodb+srv://krishnaruparelia0207:DxrcAvKIvk5KgRpU@krishnagettingstarted.eqdddjp.mongodb.net/userAuthDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//  Create the userSchema

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "User",
  },
});

// complile the Schema to form model

const User = mongoose.model("User", userSchema);

//  ! Middlewares

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// !set the view engine
app.set("view engine", "ejs");

// Home route

app.get("/", (req, res) => {
  res.render("home");
});

// Login route

app.get("/login", (req, res) => {
  res.render("login");
});

//  Register route
app.get("/register", (req, res) => {
  res.render("register");
});

//  Register Logic
app.post("/register", async (req, res) => {
  // ! Destructure the req.body
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // ! Create a new user
  try {
    const newUser = await new User({
      username,
      password: hashedPassword,
    });
    console.log(newUser);
    newUser.save();
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
});

// Login post route
app.post("/login", async (req, res) => {
  try {
    // Destructure the req.body
    const { username, password } = req.body;

    // Find the user by username
    const userFound = await User.findOne({ username });

    // Check if user was found and password is correct
    if (userFound && (await bcrypt.compare(password, userFound.password))) {
      // Create some cookies (cookie)
      res.cookie("userData", JSON.stringify(userFound), {
        maxAge: 3 * 24 * 60 * 1000, // 3 days
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      });

      // Render the user Dashboard
      res.redirect("/dashboard");
    } else {
      res.send("Login Failed");
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
    res.redirect("/login");
  }
});

// Dashboard route

app.get("/dashboard", (req, res) => {
  // ! grab the users from the cookie
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;
  const username = userData ? userData.username : null;
  //   ! Render the templeate
  if (username) {
    return res.render("dashboard", { username });
  } else {
    // ! or redirect to login
    return res.redirect("/login");
  }
});

// Logout route

app.get("/logout", (req, res) => {
  res.clearCookie("userData");
  res.redirect("/login");
});
