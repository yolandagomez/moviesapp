const express = require('express');
const movieController = require('../controllers/item');
const router = express.Router();
// const authorization = require('../middleware/authorization');

//router.get('/', movieController.getItem);
//router.get('./', (req, res) => res.status(200).json({mss:"success"})); <-This is for trying some on the browser, if it's working
//router.post('/',itemController.createItem);

/* GET home page. */


router.get('/auth/register', (req, res) => {
    res.render('register.ejs');
});

router.get('/:id', movieController.allMovies);

router.post('/',  movieController.addMovie);

router.get('/:id',  movieController.getMovie); // wrong

router.get('/:id', movieController.getMovieById); // wrong

router.delete('/id', movieController.deleteMovie);


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
