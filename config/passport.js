//from passport documentation

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const customField = {
    usernameField: 'email',
    passwordField: 'password'
}

passoport.use(new LocalStrategy(customField, //we are going to overwrite passw and user tith this customField
    function(username, password, done) {
        User.findOne({email: email}, (err, user)=> {
            if (err) { return done (err);} //done is a verified callback function
            if (!user) {
                return done(null, false, { message: 'Incorrect email'}); //authorization is going to be null, and authentication false
            }
            if(!user.validPassword(password)) {
                return done (null, false, { message: 'Incorrect password'});
            }
            return donde (null, user);
        })
    }
));