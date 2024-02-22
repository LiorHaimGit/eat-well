// Require the modules
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");

// Initialize the app
const app = express();

// Set the view engine and the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set the static directory
app.use(express.static(path.join(__dirname, "public")));

// Set the middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: "eat well secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Set the global variables
app.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// Connect to the database
mongoose.connect("mongodb://localhost:27017/eat-well", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => console.log("Connected to the database"))
.catch((err) => console.log(err));

// Require the models
const User = require("./models/user");
const Recipe = require("./models/recipe");
const Comment = require("./models/comment");

// Require the routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/users");
const recipeRoutes = require("./routes/recipes");
const commentRoutes = require("./routes/comments");

// Use the routes
app.use("/", indexRoutes);
app.use("/users", userRoutes);
app.use("/recipes", recipeRoutes);
app.use("/recipes/:id/comments", commentRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

