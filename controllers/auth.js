const User = require("../models/user")
const passport = require('passport')

//Register: check if user already exists and if it doesnt raise error. If it doesnt create new error
exports.register = (req, res, next) => {
    User.findOne({email: req.body.email}, (err, userDocument)=>{ //findOne is a method from mongoose
         if (userDocument) { //user that really is a document
        throw new Error('${req.body.email} is already registered!');
        } else {
            let user = new User(req.body);
            //user(req.body.password) 
            user.save(err)=> {
                if(err) {
                    next (err);
                } else {
                    req.login(user, (err) => { //req.login is a method from middleware passport
                        if(err) {
                            next(err); //calling middleware to manage that error
                        } else {
                            res.redirect('/') //Redirect a request, method from express, it sends you to another page afeter logging in
                        }
                    });
                }
            };
        }
    })
}

exports.login = (req, res, next) => {
//     passport.authenticate('local', { //bc documentation said it should be called, my local strategy
//         successRedirect: 'user/notes',
//         failureRedirect: 'choose and endpoint'
//     }) //this comes from documentation
    res.status(200);
}



exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('Choose and enpoint, like a good bye page, or the initial page')
}