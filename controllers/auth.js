const User = require("../models/user");
const passport = require("passport");

//Register: check if user already exists and if it doesnt raise error. If it doesnt create new error
// @access Public
exports.register = (req, res, next) => {
  User.findOne({ email: req.body.email }, function (error, user) {
    //findOne is a method from mongoose
    if (user) {
      //user is really a document
      return res.status(400).send({
        message: `Email <${req.body.email}> already taken`,
      });
    } else {
      let user = new User(req.body);

      user.generateHashPassword(req.body.password);
      user.save((error) => {
        if (error) {
          next(error);
        } else {
          //Auto-login
          req.login(user, function (err) {
            //req.login is a method from middleware passport
            if (err) {
              next(err); //calling middleware to manage that error
            }
            res.status(200).json({
              email: user.email,
              name: user.name,
            });
          });
        }
      });
    }
  });
};

// @access Public
exports.login = (req, res, next) => {
  passport.authenticate("local", function (err, user) {
    //bc documentation said it should be called, my local strategy
    if (err || !user) {
      res.status(401).send("Unauthorized");
    } else {
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        res.status(200).json({
          email: user.email,
          name: user.name,
        });
      });
    }
  })(req, res, next);
};

exports.getUser = (req, res) => {
  res.status(200);

  if (!req.isAuthenticated()) {
    res.send();
  } else {
    res.json({
      email: req.user.email,
      name: req.user.name,
    });
  }
};

// @access Public
exports.logout = (req, res) => {
  req.logout();
  res.status(200).send();
};
