const request = require("request");
const axios = require("axios");
const { API_KEY } = require("../../config.js");

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

const getMovieGenres = genre => {
  let queryString = { api_key: API_KEY, language: "en-US" };
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
    params: queryString
  });
};

const getMovies = () => {
  let queryString = { api_key: API_KEY, language: "en-US" };
  return axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
    params: queryString
  });
};


const getMoviesByGenre = genre => {
  console.log(`genre in getMoviesByGenre apiHelper: ${genre}`);
};

// Don't forget to export your functions and require them within your server file
module.exports = { getMovieGenres, getMovies, getMoviesByGenre };


