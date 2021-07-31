const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();
// const authorization = require('../middleware/authorization');


router.get('/user/favorites', isAllowed, userController.getAllFavorites)

router.post('/user/favorites', isAllowed, userController.addToFavorites);

router.delete('/favorites',  isAllowed, userController.deleteFavorite);


//
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
