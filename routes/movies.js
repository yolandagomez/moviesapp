const express = require("express");
const movieController = require("../controllers/movies");
const router = express.Router();
// const authorization = require('../middleware/authorization');

router.get("/auth/register", (req, res) => {
  res.render("register.ejs");
});

router.get("/", authorization.allowedTo, movieController.allMovies);

router.get("/search", authorization.allowedTo, movieController.searchByTitle);

router.get(
  "/categories/:category",
  authorization.allowedTo,
  movieController.getByCategory
); // wrong

router.get("/:id", authorization.allowedTo, movieController.getMovieById);

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
