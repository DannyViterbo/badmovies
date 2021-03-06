var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var db = require("../db/sql/index.js")

//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes

app.get('/movies', function(req, res){
  apiHelpers.getMovies() 
    .then((data) => {
      // console.log('this is the data in get/movies in server', data.data.results )
      res.send(data.data.results)
    })
    .catch((err) => {
      console.error("Error in get/movies in server", err);
      res.send(err)
    })
}),


app.get('/search', function(req, res) {
  // console.log('this ithe req in agpp.get', req.query)
  // get the search genre     

  // https://www.themoviedb.org/account/signup

  // use this endpoint to search for movies by genres, you will need an API key

  // https://api.themoviedb.org/3/discover/movie

  // and sort them by horrible votes using the search parameters in the API
  apiHelpers.getMoviesByGenre(req.query) 
  .then((data) => {
    // console.log('this is the data in get/search in server', data.data.results)
    res.send(data.data.results)
  })
  .catch((err) => {
    console.error("Error in get/movies in server", err);
    res.send(err)
  })
});

app.get('/genres', function(req, res) {
  // make an axios request to get the list of official genres
  
  // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

  // send back
  apiHelpers.getMovieGenres() 
  .then((data) => {
    // console.log('this is the data in get/genres in server', res.data.genres )
    res.send(data.data.genres)
  })
  .catch((err) => {
    console.error("Error in get/movies in server", err);
    res.send(err)
  })
});

app.post('/save', function(req, res) {
  var movie = req.body
  db.save(movie)
    .then(() => {
      console.log('hey budy this is the data ')
    })
    .catch((err) => console.err(err))
});

app.post('/delete', function(req, res) {

});

// //OPTION 2: Use Express Router
// //IF you decide to go with this option delete OPTION 1 to continue
// //Routes
// const movieRoutes = require('./routes/movieRoutes.js');
// //Use routes
// app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
