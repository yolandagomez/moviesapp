//business log of the 3 controllers

const User = require("../models/user")

// register

exports.register = (req, res, next) => {
    //check if user already exists and if it doesnt raise error. IF it doesnt create new error
    User.findOne({email: req.body.email}, (err, userDocument)=>{ //findOne is a method from mongoose
        if (userDocument) { //user that really is a document 
        throw new Error('This user already exist!');
        } else {
            let user = new User(req.body);
            user.save(err)=> {
                if(err) {
                    next (err);
                } else {
                    req.login(user, (err) => { //req.login is a method from middleware passport
                        if(err) {
                            next(err); //calling middleware to manage that error
                        } else {
                            res.redirect('user/movies') //Redirect a request, method from express, it sends you to another page afeter logging in
                        }
                    });
                }
            };
        }
    })
}

exports.login = (req, res, next) => {
    passport.authenticate('local', { //bc documentation said it should be called, my local strategy
        successRedirect: 'user/notes',
        failureRedirect: 'choose and endpoint'
    }) //this comes from documentation
}



exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('Choose and enpoint, like a good bye page, or the initial page')
}