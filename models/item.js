const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: [true, "A movie needs a name"]
    },
    image: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;