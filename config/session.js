const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session); //session is related to express session in the middleware
const ONE_DAY = 1000 * 60 * 60 * 24; // 1 day expiration date for the cookie

const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
  collection: "sessions",
});

module.exports = session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    httpOnly: true,
    maxAge: ONE_DAY,
    sameSite: "none",
    secure: process.env.NODE_ENV !== "development",
  },
});
