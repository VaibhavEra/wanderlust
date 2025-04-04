const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

//SIGNUP route
router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.signup));

//LOGIN-OUT route
router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  //middleware to check if a user exists
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

router.get("/logout", userController.logout);

module.exports = router;
