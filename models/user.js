//id autogenerated 
//name string
//email string some constraints -unique. It should have the format of an email
//notes , an array of one to many (one user to many) bear in mind this design

const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto'); // a native module of Node

const userSchema = new Schema({
    name: String,
    email: {
        required: true,
        type: String,
        match: [/^\S+@\S+\.\S+$/, 'Not a valid email format.'],
        unique: true
    },
    notes: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Note", //it should match to the notes file
            default: [] //it will look better
        }],
    hash: String,
    salt: String
    }
})

userSchema.methods.createHash = (password) => {
    //crate the hash
    this.salt = crypto.randomBytes(16).toString('hex'); //we're usgin the user that is already in the session of passport / we create a hash with a method of generating a random byte/ hex is for encoding it in hexadecimanl
    this.hash = crypto.pbkdf2Sync(password, this.salt, 4000, 64, 'SHA512').toString('hex');  //pbkdf2Sync is a mathematical thing // the nr 4000 is the nr of iterations/ 64 is the nr of digits
}; //creating a new method for that entity
userSchema.methods.validatePassword = (password) => {
    let temporaryHashforCheck = crypto.pbkdf2Sync(password, this.salt, 4000, 64, 'SHA512').toString('hex');
    return hash === this.hash; // it will return true or false

}

const User = mongoose.model('User', userSchema);

module.exports = User; 

