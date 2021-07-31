const express = require("express"); //with require, you're importing
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const passport = require("passport");

/**
 * ========== GENERAL SETUP ==============
 */

dotenv.config({ path: "./config/config.env" });
const session = require("./config/session");
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * ========== SESSION SETUP ==========
 */
app.use(session);

/**
 * ========== PASSPORT AUTHENTICATION ==========
 */

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({ origin: "*", credentials: true }));

//import router file
const movieRouter = require("./routes/movies");

const authRouter = require("./routes/auth"); //create a file auth.js


//mount route file
app.use(movieRouter); // it has already been defined on line 36
app.use("/auth", authRouter); 

/**
 * ========== ERROR HANDLER ==============
 */
// if (process.env.NODE_ENV === "develop") {
//   app.use(logger("dev"));
// }  -- until you create the logger

app.use(function (req, res, next) {
  let error = new Error("Page not found");
  error.statusCode = 404;
  next(error);
});

// app.use(errorHandler); until you define it / import it like JEss created on a different file, but it is not required (anothe rmiddleware), a default error route, not mandatory

/**
 * ========== SERVER ==============
 */

app.listen(PORT, () => {
  console.log(
    `Express started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
