const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_ATLAS, {userNewUrlParser: true, useUnifiedTopology: true})
    console.log("connecting to the DDBB");
}

module.exports = dbConnect;