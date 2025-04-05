require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// const mongo_url = "mongodb://127.0.0.1:27017/wanderlust"
const db_url = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(db_url);
}

main()
  .then(() => {
    console.log("DB is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});

//Root Path
// app.get("/", (req, res) => {
//   res.send("Root is working");
// });

const store = MongoStore.create({
  mongoUrl: db_url,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 60 * 60,
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() * 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

//session initialization
app.use(session(sessionOptions));
app.use(flash());

//Passport session initialization
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // use static authenticate method of model in LocalStrategy

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Middleware setting res.locals
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;

  next();
});

//route for listings
app.use("/listings", listingsRouter);
//route for reviews
app.use("/listings/:id/reviews", reviewsRouter);
//route for signup
app.use("/", userRouter);

//Standard response route for all pages
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

//Error Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something Went Wrong!" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("./listings/error.ejs", { message });
});
