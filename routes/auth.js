const express = require ('express');
const router = express.Router();
const authorization = require('../middleware/authorization');
const authController = require("../controllers/auth");


//here the controller

router.post('/register', authController.register) // we will come back later to fill the controller path
router.post('/login', authController.login);
router.get('/logout', authController.logout); //doing this I'll make this endpoint/route: private, instead of public
router.get('/getuser', authController.getUser);
//exports router to use it on app.js
module.exports = router;