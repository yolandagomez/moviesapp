//this file contains the functions of the app
exports.getItem = (req, res, next) => {
    res.status(200).json({mss:"success"})
}; 

exports.createItem = (req, res, next) => {
    //TODO
}

/*These controllers, when the endpoints are ChannelSplitterNode, return JSON, or wahtever */

exports.allMovies = (req, res, next) => {
    res.status(200).json({
    success: true,
    notes: [
      {
        id: 1,
        title: 'Suffragette',
        image: 'https://images.unsplash.com/photo-1520785145672-94e9abd8b121?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VmZnJhZ2V0dGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        Actors: ['Carey Mulligan', 'Meryl Streep', 'Helena Bonham Carter'],
        category: 'Drama',
        review: "The best"
        
      }, 
      {
        id: 2,
        title: 'Parasite',
        image: 'https://www.indiewire.com/wp-content/uploads/2019/12/parasite-2.jpg?w=727',
        Actors: ['Kang-ho Song', 'Woo-sik Choi', 'So-dam Park'],
        category: 'Drama',
        review: "Good"
      }]})};

exports.addMovie = (req, res, next) => {
        let movie = new Movie(req.body);
        movie.save((err) => {
          if (err) {
            next (err);
            return;
          } else {
            let user = req.user;
            user.movies.push(movie._id);
            user.save((err) => {
              if (err) {
                next(err);
                return;
              }
              res.redirect('/user/movies')
            });
          }
        })
      }
    

exports.getMovie = (req, res, next) => {
    Movie.findById(req.params.id)
    .then(
      movie => res.render('views/edit.hbs', {movie:movie})
    ).catch(
      //next(new Error("custom error")) //and let the middleware handler, the error
      err => res.render('views/edit.hbs', {error:err})
    );
  
  }
  
  exports.getMovieById = (req, res, next) => {
          res.render("movies/edit", {id: 1, title: Suffragette
          }
          )
  }
  

  /*
  exports.deletingMovie = (req, res, next) => {
          res.status(200).json({
          success: true,
          msg: `delete movie with id: ${req.params.id}`
  })
  }
  */

  exports.deleteMovie = (req, res, next) => {
    let user = req.user;
    Note.findByIdAndDelete(req.params.id, ()=>{
      if (err) {
        console.log(err);
      } else {
        user.movie.pull(req.params.id); //we removed the element from the arr
        user.save(); //we should save now
        console.log('User has been saved');
        //TBD is that my file is To be defined, i havent one yet
        res.render('views/TBD.hbs')
      }
    });
    req.user.movie;
  }
  
  
  exports.createGreeting = (req, res, next) => {
          res.send('<h1>Movies available</h1>');
  }
  
 
