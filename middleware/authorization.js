//do the same as we did with controllers, kewwords. name of the methods

//authorize the user to go somewhere
exports.allowedTo = (req, res, next) => {
  //isAuthenticated is from passport library
  //does the user has valid credentials to enter (just accesing the app)
  if (req.isAuthenticated()) {
    next(); //automaticaaly express manage to call the next function in stack
  } else {
    res.render("error", {
      statusCode: 401,
      message: "You do not have access",
    }); // there is no need to include "/"" bc views is by default the renderind folder
  }
};
