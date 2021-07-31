const express = require("express");
const movieController = require("../controllers/movies");
const router = express.Router();
const authorization = require("../middleware/authorization");

router.get("/auth/register", (req, res) => {
  res.render("register.ejs");
});

//router.get("/getuser", authController.getUser); -until you have created this method

router.get("/", movieController.allMovies);

router.get("/search", movieController.searchByTitle);

router.get(
  "/categories/:category",
  movieController.getByCategory
); // wrong, why?

router.get("/:id", movieController.getMovieById);

//include authorizarion
// router.get('/id', authorization.allowedTo, movieController.allMovies);
//
// router.post('/', authorization.allowedTo, movieController.addMovie);
//
// router.get('/id', authorization.allowedTo, movieController.getMovie);
//
// router.get('/id', authorization.allowedTo, movieController.getMovieById);
//
// router.delete('/id', authorization.allowedTo, movieController.deleteMovie);

//use this to test on postman

//exports router to use it on app.js

module.exports = router;
