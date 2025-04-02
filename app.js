const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
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
app.get("/", (req, res) => {
  res.send("Root is working");
});

const sessionOptions = {
  secret: "mysuper",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");

  next();
});

//route for listings
app.use("/listings", listings);
//route for reviews
app.use("/listings/:id/reviews", reviews);

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
