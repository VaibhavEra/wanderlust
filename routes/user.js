const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");

//SIGNUP route
router.get("/signup", (req, res) => {
  res.render("./users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      await User.register(newUser, password);

      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  })
);

//LOGIN route
router.get("/login", (req, res) => {
  res.render("./users/login.ejs");
});

router.post(
  "/login",
  //middleware to check if a user exists
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome back to WanderLust!");
    res.redirect("/listings");
  }
);
module.exports = router;
