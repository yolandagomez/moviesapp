//this file contains the functions of the app
const Movie = require("../models/item");

/*These controllers, when the endpoints are ChannelSplitterNode, return JSON, or wahtever */

exports.allMovies = (req, res, next) => {
        Movie.find().then(movies => res.status(200).json({
          success:true,
          movies: movies
        }))};

exports.getMovieById = (req, res, next) => {
    Movie.findById(req.params.id, (err, doc) => {
      if(!doc) {
        res.status(404).json({
        success: false,
        msg: `There is no movie with te ID: '${req.params.id}'`,
      })
      return;
    }
    res.status(200).json({
      success: true,
      msg: `This is the movie requested with ID: '${req.params.id}'`,
      movie: doc
    })
  })
  };

exports.getByCategory = (req, res, next) => {
    Movie.find({category: req.params.category}).then(movies =>  res.status(200).json({
      success: true,
      movies: movies
  })).catch(error => next(error));
};

exports.searchByTitle = (req, res, next) => {
  Movie.find(({$text:{$search: `${req.query.title}`}})).then(movie =>  res.status(200).json({
    success: true,
    movies: movie
})).catch(error => next(error))
}
