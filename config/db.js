const mongoose = require('mongoose');

const dbConnect = () => {
    const MONGODB_LOCAL=process.env.LOCAL_MONGODB_URL;
    mongoose.connect(MONGODB_LOCAL, {userNewUrlParser: true, useUnifiedTopology: true})
    console.log("connecting to the DDBB");
}

module.exports = dbConnect;