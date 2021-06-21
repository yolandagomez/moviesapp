const express = require ('express');
const router = express.Router();
const authorization = require('../middleware/authorization');

//here the controller

router.post('/register') // we will come back later to fill the controller path
router.post('/logIn');
router.get('/logOut', authorization.allowedTo); //doing this I'll make this endpoint/route: private, instead of public

//exports router to use it on app.js
module.exports = router;