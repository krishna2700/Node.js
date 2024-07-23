const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const PORT = 3690;

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});

//  ! Middlewares

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// !set the view engine
app.set("view engine", "ejs");

// Simulated databse for users

const users = [
  {
    username: "john",
    password: "123",
    role: "Admin",
  },
  {
    username: "jane",
    password: "456",
    role: "User",
  },
];

// Home route

app.get("/", (req, res) => {
  res.render("home");
});

// Login route

app.get("/login", (req, res) => {
  res.render("login");
});

// Login post route

app.post("/login", (req, res) => {
  console.log(req.body);
  // ! Find the user login details
  const userFound = users.find((user) => {
    const { username, password } = req.body;
    return user.username === username && user.password === password;
  });
  console.log(userFound);
  //    ! Create Some Cookies (cookie)
  //    * Prepare the login user Details
  //   ? setting the cookie with the logged in user details
  res.cookie("userData", JSON.stringify(userFound), {
    maxAge: 3 * 24 * 60 * 1000, // 3 days
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });
  // ! Render the user Dashboard
  if (userFound) {
    res.redirect("/dashboard");
  }
  //  ! Or redirect to login page
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
