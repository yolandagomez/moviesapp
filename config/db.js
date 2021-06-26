const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}) //esto lo requiere el método de mongoose
    console.log(`connecting to the DDBB ${process.env.MONGO_URL}`);
}

module.exports = dbConnect;